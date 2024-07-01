'use client'

//next
import Link from "next/link";
import { usePathname } from "next/navigation";

//react-icons
import { TbHomeFilled, TbFileText, TbTrophyFilled, TbBuildingStadium } from "react-icons/tb";

interface IUrl {
    path: string,
    name: string,
    icon: JSX.Element,
}
const urls: IUrl[] = [
    {
        path: '/app',
        name: 'Inicio',
        icon: <TbHomeFilled />,
    },
    {
        path: '/app/results',
        name: 'Resultados',
        icon: <TbTrophyFilled />,
    },
    {
        path: '/app/games',
        name: 'Partidos',
        icon: <TbBuildingStadium />,
    },
    {
        path: '/app/rules',
        name: 'Reglas',
        icon: <TbFileText />,
    },
]

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="nav bg-secondary p-1 pb-4 fixed bottom-0 w-screen flex_b_center">
            {urls.map((url, index) => (
                <Link href={url.path} key={index} className={`text-center flex_center gap-1 ${pathname === url.path ? 'opacity-1 bg-white/10' : 'opacity-30'} w-full p-2 rounded-md text-white text-2xl`}>
                    <p className="mx-auto">{url.icon}</p>
                    <p className="text-xs">{url.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default Navbar