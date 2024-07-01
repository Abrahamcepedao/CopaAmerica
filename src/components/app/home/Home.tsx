'use client'

//react
import { useEffect, useState } from "react";

//components - ui
import { Typography, Loader } from "@/components/ui";

//components - reusable
import { GamesList } from "@/components/reusable";

//components
import Selection from "./Selection";

//react-icons
import { TbInfoCircle } from "react-icons/tb";

//redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setReduxUser } from "@/app/GlobalRedux/Features/auth/authSlice";

//lib
import { participantService } from "@/database/functions/DbService";

//react-simple-pull-to-refresh
import PullToRefresh from 'react-simple-pull-to-refresh';

//hooks
import { useLeaderboard, useGamesResults } from "@/utils/hooks";

//utils
import { formatMoney, calculatePoints } from "@/utils/functions/utility_functions";

//constants
import { lastDate, CAN_SELECT, VERSION } from "@/utils/constants/constants";

//interfaces
import { IUser, IGame, ILeaderboardPos } from "@/utils/interfaces/types";

const Home = () => {
    //hooks
    const { games: reduxGames, loading: loadingGames } = useGamesResults()
    const { leaderboard, loading: loadingLeaderboard, refetchData } = useLeaderboard()

    //redux
    const reduxUser: IUser | null = useSelector(selectUser);
    const dispatch = useDispatch()

    //useState - can select
    const [canSelect, setCanSelect] = useState(false)

    //useSttae - my games
    const [myGames, setMyGames] = useState<IGame[]>([])
    const [myGamesList, setMyGamesList] = useState<IGame[]>([])

    //useState - results
    const [results, setResults] = useState({
        pos: '0',
        points: 0,
        money: 0
    })

    //useEffect - reduxUser
    useEffect(() => {
        if(reduxUser) {
            console.log(reduxUser)
            if(reduxUser?.copamerica?.hasSelected && reduxUser?.copamerica?.data) {
                let tempGames: IGame[] = []
                if(reduxUser?.copamerica?.data.round4Games) tempGames = tempGames.concat(reduxUser?.copamerica?.data.round4Games)
                if(reduxUser?.copamerica?.data.round2Games) tempGames = tempGames.concat(reduxUser?.copamerica?.data.round2Games)
                if(reduxUser?.copamerica?.data.finalGames) tempGames = tempGames.concat(reduxUser?.copamerica?.data.finalGames)
                console.log('tempGames', tempGames)
                setMyGames(tempGames)
                setMyGamesList(tempGames)
            }
        }
    }, [reduxUser])
    
    useEffect(() => {
        if(reduxUser !== null){
            if(reduxUser.copamerica?.hasSelected){
                if(reduxUser.copamerica?.hasPaid !== true) {
                    handleRefresh()
                } 
            } else {
                handleRefresh()
            }
        }

        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth() + 1
        let year = today.getFullYear()
        if(year <= lastDate.year){
            if(month === lastDate.month){
                if(day <= lastDate.day){
                    setCanSelect(true)
                } else {
                    setCanSelect(false)
                }
            } else if(month < lastDate.month){
                setCanSelect(true)
            } else {
                setCanSelect(false)
            }  
        } else {
            setCanSelect(false)
        }
    }, [])

    useEffect(() => {
        if(!loadingLeaderboard && leaderboard && reduxUser) {
            let tempPoints = 0
            let tempMoney = 0
            let tempPos = ''
            leaderboard.positions.forEach((item: ILeaderboardPos) => {
                if(item.uid === reduxUser.uid) {
                    tempPos = item.position
                    tempPoints = item.points
                    tempMoney = item.money
                }
            })
            setResults({ pos: tempPos, points: tempPoints, money: tempMoney })
        }
    }, [loadingLeaderboard, leaderboard, reduxUser])


    useEffect(() => {
        if(!loadingGames && reduxGames && myGames) {
            //check that reduxGames and games have the same length
            if(reduxGames.length !== myGames.length) return
            let tempGames: IGame[] = calculatePoints(myGames, reduxGames)
            console.log('tempGames', tempGames)
            setMyGamesList(tempGames)
        } else {
            if(myGames) setMyGamesList(myGames)
        }
    }, [loadingGames, reduxGames, myGames])

    const handleRefresh = async () => {
        refreshUser()
    }

    //refresh user
    const refreshUser = async () => {
        try {
            const res = await participantService.get(reduxUser?.uid || '')
            console.log(res)
            if (res.status === 200 && res.data) {
                dispatch(setReduxUser(res.data as IUser))
                await refetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PullToRefresh onRefresh={handleRefresh} refreshingContent={<Loader />}>
            <div className="px-2 sm:px-4 text-white space-y-8">
                {reduxUser?.hasPaid ? (
                    <div>
                        {reduxUser?.hasSelected ? (
                            <>
                                <div className="flex justify-center gap-8">
                                    <div className="text-center">
                                        <Typography variant="kpi_number" text={results.pos}/>
                                        <Typography variant="kpi_text" text="Pos"/>
                                    </div>
                                    <div className="text-center">
                                        <Typography variant="kpi_number" text={results.points.toString()}/>
                                        <Typography variant="kpi_text" text="Puntos"/>
                                    </div>
                                    <div className="text-center">
                                        <Typography variant="kpi_number" text={formatMoney(results.money)}/>
                                        <Typography variant="kpi_text" text="Dinero"/>
                                    </div>
                                </div>
                                <Typography variant="subtitle" text="Mi selección"/>
                                <div>
                                    <GamesList games={myGamesList} showGoals={false} showPoints={true}/>
                                </div>

                                <div className="mt-4 border border-white rounded-md p-2">
                                    {reduxUser?.data && (
                                        <div className='ds_container w-full'>
                                            <div className='grid grid-cols-2 gap-4'>
                                                <div>
                                                    <p className='text'>Goleador</p>
                                                    <p className='text bold'>{reduxUser?.data?.responses?.more_goals}</p>
                                                </div>
                                                <div>
                                                    <p className='text'>Marcador final</p>
                                                    <p className='text bold'>{reduxUser?.data.responses?.final_score}</p>
                                                </div>
                                                <div>
                                                    <p className='text'>¿Tiempo regular?</p>
                                                    <p className='text bold'>{reduxUser?.data.responses?.regular_time || '-'}</p>
                                                </div>
                                                <div>
                                                    <p className='text'>¿Tiempo extra?</p>
                                                    <p className='text bold'>{reduxUser?.data.responses?.extra_time || '-'}</p>
                                                </div>
                                                <div>
                                                    <p className='text'>¿Penales?</p>
                                                    <p className='text bold'>{reduxUser?.data.responses?.penalties || '-'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                </div>
                            </>
                        ) : (
                            <>
                                {CAN_SELECT ? (
                                    <>
                                        {canSelect ? (
                                            <Selection />
                                        ) : (
                                            <div className="px-4">
                                                <div className="mb-5 flex items-center bg-white/10 p-4 rounded-lg">
                                                    <div>
                                                        <TbInfoCircle className="mr-2"/>
                                                    </div>
                                                    <p className="">Ya pasó la fecha límite para seleccionar tus partidos</p>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="px-4">
                                        <div className="mb-5 flex items-center bg-white/10 p-4 rounded-lg">
                                            <div>
                                                <TbInfoCircle className="mr-2"/>
                                            </div>
                                            <p className="text-justify">Todavía no puedes seleccionar tus partidos. Los organizadores habilirarán esta opción una vez que sean definitivos los partidos de octavos.</p>
                                        </div>

                                        <p className="text-base font-semibold text-center">V {VERSION}</p>
                                    </div>
                                )}
                                
                                    
                            </>
                        )}
                    </div>
                ) : (
                    <div className="px-4">
                        <div className="mb-5 flex items-center bg-white/10 p-4 rounded-lg">
                            <div>
                                <TbInfoCircle className="mr-2"/>
                            </div>
                            <p className="">Una vez que hayamos registrado tu pago, tendrás acceso a la plataforma</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-base font-semibold">Información del pago</p>
                            <ul className="list-disc pl-5 text-sm text-justify">
                                <li className="">En caso de estar en Mérida, entregar efectivo a Gabriel Gutierrez (999 997 2751)</li>
                                <li className="">Depositar $500 MXN a cuenta CLABE (002910701710520076, Banamex, concepto: Quiniela - e-mail utilizado para inscribirse")</li>
                                <li className="">Para más información contactar a Abraham Cepeda (999 365 4620) o Gabriel Gutierrez (999 997 2751)</li>
                            </ul>
                        </div>
                    </div>            
                )}
            </div>
        </PullToRefresh>
    );
};

export default Home;
