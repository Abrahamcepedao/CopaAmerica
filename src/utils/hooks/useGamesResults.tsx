//react
import { useState, useEffect } from 'react';

//firebase
import { gameResultsService } from '@/database/functions/DbService';

//react-redux
import { useSelector, useDispatch } from 'react-redux';
import { selectGamesResults, setReduxGamesResults, selectGames, setReduxGames } from '@/app/GlobalRedux/Features/games/gamesResultsSlice';

//interfaces
import { IGameResults, IGame } from '@/utils/interfaces/types';

export const useGamesResults = () => {
    //redux
    const dispatch = useDispatch();
    const reduxGamesResults: IGameResults | null = useSelector(selectGamesResults);
    const reduxGames: IGame[] = useSelector(selectGames);

    //state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            const res = await gameResultsService.get('copamerica_games_2024');
            console.log(res);
            if(res.status === 200 && res.data) {
                let tempGames: IGame[] = []
                if(res.data.round4Games) tempGames = tempGames.concat(res.data.round4Games)
                if(res.data.round2Games) tempGames = tempGames.concat(res.data.round2Games)
                if(res.data.thirdGames) tempGames = tempGames.concat(res.data.thirdGames)
                if(res.data.finalGames) tempGames = tempGames.concat(res.data.finalGames)
                
                dispatch(setReduxGamesResults(res.data))
                dispatch(setReduxGames(tempGames))
            }
        } catch (error: any) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (reduxGamesResults === null) fetchData();
        else setLoading(false);
    }, [reduxGamesResults]);

    const refetchData = async () => {
        setLoading(true);
        setError(null);
        fetchData();
    };

    return { gamesResults: reduxGamesResults, games: reduxGames, loading, error, refetchData };
};