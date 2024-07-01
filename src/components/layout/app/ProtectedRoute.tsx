'use client'

// React
import React, { useEffect, useState } from 'react';

// Next
import { useRouter } from 'next/navigation';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setReduxUser } from '@/app/GlobalRedux/Features/auth/authSlice';

// Firebase Auth
import { auth } from '@/database/firebase'
import { onAuthStateChanged } from 'firebase/auth';

// Firestore
import { participantService } from '@/database/functions/DbService';

// Interface
import { IUser } from '@/utils/interfaces/types';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const reduxUser: IUser | null = useSelector(selectUser);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            try {
                if (firebaseUser) {
                    if (!reduxUser) {
                        // Fetch user data from Firestore using firebaseUser.uid
                        try {
                            const userData = await participantService.get(firebaseUser.uid);
                            if (userData.status === 200 && userData.data) {
                                dispatch(setReduxUser(userData.data as IUser)); // Update Redux state
                            } else {
                                // Handle the case where user data is not in the expected shape
                                console.error('User data is not in the expected format:', userData);
                                // Perform additional error handling or state updates as necessary
                            }
                        } catch (error) {
                            console.error('Error fetching user data:', error);
                        }
                    }
                } else {
                    router.push('/'); // Redirect if not logged in
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
            
        });
        return () => unsubscribe();
    }, [router, reduxUser, dispatch]);

    if (loading) {
        return <div>Loading...</div>; // or a loading spinner
    }


    return <div>{reduxUser ? children : null}</div>;
};

export default ProtectedRoute;
