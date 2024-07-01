'use client';

//react
import { useState } from "react";

//next
import { useRouter } from "next/navigation";

//components
import { Button } from "@/components/ui";

//lib
import { logout } from "@/database/functions/auth";

//redux
import { useDispatch } from "react-redux";
import { setReduxUser,selectUser } from "@/app/GlobalRedux/Features/auth/authSlice";
import { useSelector } from "react-redux";

//react-icons
import { TbEdit, TbLogout, TbCirclePlus, TbX } from "react-icons/tb";

//interfaces
import { IUser, IInput } from "@/utils/interfaces/types";

const Profile = () => {
    //router
    const { push } = useRouter();

    //redux
    const dispatch = useDispatch();

    //redux
    const user: IUser | null = useSelector(selectUser);

    //handle logout
    const handleLogout = async () => {
        await logout();
        dispatch(setReduxUser(null));
        push('/login');
    }

    //handle edit profile
    const handleEditProfile = () => {
        push('/app/profile/edit');
    }

    return (
        <div className="px-2 md:px-4">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-4 text-white">
                <div>
                    <p className="text-sm">Nombre</p>
                    <p className="text-sm bold">{user?.name}</p>
                </div>
                <div>
                    <p className="text-sm">Apodo</p>
                    <p className="text-sm bold">{user?.nickname}</p>
                </div>
                <div>
                    <p className="text-sm">Teléfono</p>
                    <p className="text-sm bold">{user?.phone}</p>
                </div>
                <div>
                    <p className="text-sm">Email</p>
                    <p className="text-sm bold">{user?.mail}</p>
                </div>
            </div>
            <div className="max-w-xs mx-auto grid grid-cols-1 gap-2 sm:gap-4">
                {/* <Button variant="tertiary" text="Cerrar sesión" iconEnd={<TbLogout className="ml-2"/>} compressed onClick={handleLogout}/> */}
                <Button variant="primary" text="Editar perfil" iconEnd={<TbEdit className="ml-2"/>} compressed onClick={handleEditProfile}/>
            </div>
        </div>
    );
}

export default Profile