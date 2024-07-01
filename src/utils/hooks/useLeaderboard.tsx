//react
import { useState, useEffect } from 'react';

//firebase
import { leaderboardService } from '@/database/functions/DbService';

//react-redux
import { useSelector, useDispatch } from 'react-redux';
import { selectLeaderboard, setReduxLeaderboard } from '@/app/GlobalRedux/Features/leaderboard/leaderboardSlice';

//interfaces
import { ILeaderboard } from '@/utils/interfaces/types';

export const useLeaderboard = () => {
    //redux
    const dispatch = useDispatch();
    const reduxLeaderboard: ILeaderboard | null = useSelector(selectLeaderboard);

    //state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            const res = await leaderboardService.get('copamerica_leaderboard_2024');
            console.log(res);
            if(res.status === 200 && res.data) {
                if(res.data) dispatch(setReduxLeaderboard(res.data))
            }
        } catch (error: any) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (reduxLeaderboard === null) fetchData();
        else setLoading(false);
    }, [reduxLeaderboard]);

    const refetchData = async () => {
        setLoading(true);
        setError(null);
        fetchData();
    };

    return { leaderboard: reduxLeaderboard, loading, error, refetchData };
};