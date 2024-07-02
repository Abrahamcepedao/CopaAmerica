'use client';

//next
import { useRouter } from "next/navigation";

//components
import { Button } from "@/components/ui";

//redux
import { selectUser } from "@/app/GlobalRedux/Features/auth/authSlice";
import { useSelector } from "react-redux";

//react-icons
import { TbEdit } from "react-icons/tb";

//constants
import { VERSION } from "@/utils/constants/constants";

//interfaces
import { IUser } from "@/utils/interfaces/types";

const Profile = () => {
    //router
    const { push } = useRouter();

    //redux
    const user: IUser | null = useSelector(selectUser);

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

            <div className="text-center mt-4 text-xs text-white">
                <p>Version: {VERSION}</p>
            </div>
        </div>
    );
}

export default Profile