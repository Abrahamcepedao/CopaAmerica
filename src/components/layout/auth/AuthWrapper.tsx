'use client';

//react
import React, { useEffect, useState } from 'react';

//next
import { useRouter } from 'next/navigation';

//firebase
import { auth } from '@/database/firebase';
import { onAuthStateChanged } from 'firebase/auth';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setReduxUser } from '@/app/GlobalRedux/Features/auth/authSlice';

//lib
import { logout } from '@/database/functions/auth';
import { participantService } from '@/database/functions/DbService';

//interface
import { IUser } from '@/utils/interfaces/types';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    //router
    const { push } = useRouter();

    //redux
    const dispatch = useDispatch();
    const reduxUser: IUser | null = useSelector(selectUser);

    //useState - loading
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log(user);
            try {
                if (user) {
                    // User is signed in
                    //chek if user is in redux
                    if(!reduxUser) {
                        const res = await participantService.get(user.uid)
                        if(res.status === 200 && res.data ) {
                            dispatch(setReduxUser(res.data as any));
                            push('/app');
                        } else {
                            await logout();
                            //error
                            push('/'); // Redirect to login page
                        }
                        
                    } else {
                        push('/app');
                    }
                } else {
                    // User is signed out
                    dispatch(setReduxUser(null));
                    push('/'); // Redirect to login page
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (loading) {
        return null; // Or any loading component
    }

    return (
        <>{children}</>
    );
};

export default AuthWrapper;
