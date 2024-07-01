'use client'

//react
import { useEffect, useState } from "react";

//ui
import { Loader, Typography } from "@/components/ui";

//reusable
import { GamesList } from "@/components/reusable";

//react-simple-pull-to-refresh
import PullToRefresh from 'react-simple-pull-to-refresh';

//hooks
import { useGamesResults } from "@/utils/hooks/useGamesResults";

//interfaces
import { IGame } from "@/utils/interfaces/types";

const Games = () => {
    //hooks
    const { gamesResults, loading: loadingGames, refetchData } = useGamesResults()

    //games
    const [games, setGames] = useState<IGame[]>([])

    //useState - loading
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        //get games
        if(!loadingGames) {
            if(gamesResults) {
                let tempGames: IGame[] = []
                if(gamesResults.round8Games) tempGames = tempGames.concat(gamesResults.round8Games)
                if(gamesResults.round4Games) tempGames = tempGames.concat(gamesResults.round4Games)
                if(gamesResults.round2Games) tempGames = tempGames.concat(gamesResults.round2Games)
                if(gamesResults.finalGames) tempGames = tempGames.concat(gamesResults.finalGames)
                console.log('tempGames', tempGames)

                setGames(tempGames)
            }
            setLoading(false)
        }

    }, [loadingGames, gamesResults])

    //handle refresh
    const handleRefresh = async () => {
        setLoading(true)
        refetchData()
    }

    if(loading) return <Loader />

    return (
        <PullToRefresh onRefresh={handleRefresh} className="text-white" refreshingContent={<Loader />}>
            <div className="px-2 sm:px-4 text-white space-y-8">
                <div>
                    {games.length > 0 ? (
                        <GamesList games={games}/>
                    ) : (
                        <div className='flex_center h-[200px] border rounded-md bg-white/10 border-dashed'>
                            <Typography variant='text' text='No hay juegos todavía' />
                        </div>
                    )}
                </div>
            </div>
        </PullToRefresh>
    );
};

export default Games