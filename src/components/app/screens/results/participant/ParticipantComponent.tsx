'use client'

//react
import { useEffect, useState } from 'react'

//next
import { useRouter } from 'next/navigation'

//ui
import { Typography } from '@/components/ui'

//components
import Information from './Information';
import Games from './Games';

//firebase
import { participantService,  } from '@/database/functions/DbService'

//hooks
import { useGamesResults, useLeaderboard } from '@/utils/hooks';

//utils
import { formatMoney, calculatePoints } from '@/utils/functions/utility_functions';

//interfaces
import { IUser, IGame, ILeaderboardPos } from '@/utils/interfaces/types'

interface Props {
    id: string
}

const ParticipantComponent = ({ id }: Props) => {
    //router
    const { push } = useRouter()

    //hooks
    const { games: reduxGames, loading: loadingGames } = useGamesResults()
    const { leaderboard, loading: loadingLeaderboard, refetchData } = useLeaderboard()

    //useState - participant
    const [participant, setParticipant] = useState<IUser | null>(null)

    //useState - games
    const [games, setGames] = useState<any[]>([])
    const [gamesList, setGamesList] = useState<IGame[]>([])

    //useState - results
    const [results, setResults] = useState({
        pos: '',
        points: 0,
        money: 0
    })

    //useEffect
    useEffect(() => {
        const fetchParticipant = async () => {
            let tempGames: IGame[] = []
            if (id) {
                const res = await participantService.get(id);
                if (res.status === 200 && res.data) {
                    if(res.data?.copamerica?.data?.round4Games) tempGames = tempGames.concat(res.data?.copamerica?.data.round4Games)
                    if(res.data?.copamerica?.data?.round2Games) tempGames = tempGames.concat(res.data?.copamerica?.data.round2Games)
                    if(res.data?.copamerica?.data?.thirdGames) tempGames = tempGames.concat(res.data?.copamerica?.data.thirdGames)
                    if(res.data?.copamerica?.data?.finalGames) tempGames = tempGames.concat(res.data?.copamerica?.data.finalGames)
                    setParticipant(res.data)
                } else {
                    push('/app/results');
                }
            }

            setGames(tempGames)
        };
        fetchParticipant();
    }, [id]);

    useEffect(() => {
        if(!loadingGames && reduxGames && games) {
            //check that reduxGames and games have the same length
            if(reduxGames.length !== games.length) return
            let tempGames: IGame[] = calculatePoints(games, reduxGames)
            console.log('tempGames', tempGames)
            setGamesList(tempGames)
        } else {
            if(games) setGamesList(games)
        }
    }, [loadingGames, reduxGames, games])

    useEffect(() => {
        if(!loadingLeaderboard && leaderboard && participant) {
            let tempPoints = 0
            let tempMoney = 0
            let tempPos = ''
            leaderboard.positions.forEach((item: ILeaderboardPos) => {
                if(item.uid === participant.uid) {
                    tempPos = item.position
                    tempPoints = item.points
                    tempMoney = item.money
                }
            })
            setResults({ pos: tempPos, points: tempPoints, money: tempMoney })
        }
    }, [loadingLeaderboard, leaderboard, participant])

    return (
        <>
            <div className='rounded-lg mb-4 px-4'>
                <div className="w-full rounded-lg">
                    <div className="w-full h-full bg-secondary flex_center p-8 rounded-lg text-white space-y-4">
                        <div className='text-center'>
                            <h1 className="title">{participant?.name}</h1>
                            <p className="title_text">({participant?.nickname})</p>
                        </div>
                        

                        <div className="flex justify-center gap-8">
                            <div className="text-center">
                                <Typography variant="kpi_number" text={results.pos}/>
                                <Typography variant="kpi_text" text="POs"/>
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
                    </div>
                </div>
            </div>

            {/* tab content */}
            <div className='text-white p-4 space-y-4'>
                <Games games={gamesList}/>
                <Information participant={participant}/>
            </div>
            
        </>
    )
}

export default ParticipantComponent