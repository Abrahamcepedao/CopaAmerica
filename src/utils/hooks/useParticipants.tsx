//react
import { useState, useEffect } from 'react';

//firebase
import { participantService } from '@/database/functions/DbService';

//react-redux
import { useSelector, useDispatch } from 'react-redux';
import { selectParticipants, setReduxParticipants } from '@/app/GlobalRedux/Features/participants/participantsSlice';

//interfaces
import { IUser } from '@/utils/interfaces/types';

export const useParticipants = () => {
    //redux
    const dispatch = useDispatch();
    const reduxParticipants: IUser[] = useSelector(selectParticipants);

    //state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            const res = await participantService.getAll();
            console.log(res);
            if(res.status === 200 && res.data) {
                if(res.data.length > 0) dispatch(setReduxParticipants(res.data))
            }
        } catch (error: any) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (reduxParticipants.length === 0) fetchData();
        else setLoading(false);
    }, [dispatch, reduxParticipants]);

    const refetchData = () => {
        setLoading(true);
        setError(null);
        fetchData();
    };

    return { participants: reduxParticipants, loading, error, refetchData };
};