'use client'

//react
import { useState, useEffect } from 'react';

//next
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

//components
import { ButtonIcon, SelectIcon } from '@/components/ui';

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, setReduxUser } from "@/app/GlobalRedux/Features/auth/authSlice";

//lib
import { logout } from "@/database/functions/auth";

//react icons
import { TbArrowBack, TbUserSquareRounded, TbBrandInstagram } from "react-icons/tb";

//interfaces
import { IUser, IFilterOpt } from "@/utils/interfaces/types";

//options
const opts: IFilterOpt[] = [
    { id: 'person', label: 'Mi perfil'},
    { id: 'company', label: 'Patrocinadores'},
    { id: 'password', label: 'Cambiar contraseña' },
    { id: 'logout', label: 'Cerrar sesión' }
]

interface IBanner {
    title: string,
    path: string,
    goback?: boolean,
    isHome?: boolean,
}

const banners: IBanner[] = [
    {
        title: 'Copa América 2024',
        path: '/app',
        goback: false,
        isHome: true,
    },
    {
        title: 'Resultados',
        path: '/app/results',
        goback: false,
    },
    {
        title: 'Partidos',
        path: '/app/games',
        goback: false,
    },
    {
        title: 'Reglas',
        path: '/app/rules',
        goback: false,
    },
    {
        title: 'Partners',
        path: '/app/partners',
        goback: true,
    },
    {
        title: 'Perfil',
        path: '/app/profile',
        goback: true,
    },
    {
        title: 'Editar perfil',
        path: '/app/profile/edit',
        goback: true,
    },
    {
        title: 'Cambiar contraseña',
        path: '/app/password',
        goback: true,
    },
]

const Header = () => {
    //router
    const { back, push } = useRouter();
    const pathname = usePathname();

    //redux
    const dispatch = useDispatch();
    const user: IUser | null = useSelector(selectUser)

    //useState - banner
    const [banner, setBanner] = useState<IBanner | null>(null);

    //useEffect - banner
    useEffect(() => {
        let banner = banners.find(b => b.path === pathname) || null
        if(banner) setBanner(banner)
        else {
            if(pathname.includes('/app/results/')) {
                setBanner({
                    title: 'Participante',
                    path: '/app/results',
                    goback: true,
                })
            }
        }
    }, [pathname]);

    //handle option click
    const handleOptionClick = (num: number) => {
        let id = opts.find((el) => el.id === opts[num].id)?.id
        if(id === 'person') push('/app/profile')
        else if(id === 'password') push('/app/password')
        else if(id === 'company') push('/app/partners')
        else if(id === 'logout') handleLogout()
    }

    //handle logout
    const handleLogout = async () => {
        await logout();
        dispatch(setReduxUser(null));
        push('/');
    }


    return (
        <div className="img_back flex-1 w-screen">
            <div className="bg-light_overlay h-full flex justify-end flex-col px-4">
                {banner !== null ? (
                    <div className='py-4 sm:py-8'>
                        <div className='flex_b_center'>
                            {banner.isHome ? (
                                <Image src="/img/logo.png" alt="logo" width={60} height={40} className=""/>
                            ) : (
                                <div className='flex_s_center' onClick={() => back()}>
                                    {banner.goback && (
                                        <ButtonIcon icon={<TbArrowBack className="icon"/>}/>
                                    )}
                                    <h1 className="title">{banner?.title}</h1>
                                </div>  
                            )}
                            <div className='flex_b_center gap-2 sm:gap-4'>
                                <SelectIcon label='' icon={<TbUserSquareRounded className="icon"/>} options={opts} handleInputChange={handleOptionClick}/>
                            </div>
                        </div>
                        {banner.isHome && (
                            <div className="text-center pb-8 mx-auto mt-12">
                                <h1 className="title mb-4">{banner?.title}</h1>
                                <h5 className='text-white'>¡Bienvenido {user?.name}!</h5>
                            </div>
                        )}
                    </div>
                ) : null}
                
            </div>
        </div>
    );
}

export default Header