//next
import Image from "next/image";

//ui
import { Typography } from "@/components/ui";

//icons
import { TbBrandInstagram, TbBrandYoutube, TbWorld } from "react-icons/tb";

//interfaces
interface IPartner {
    title: string,
    img: string,
    url?: string,
    instagram?: string,
    youtube?: string,
}

const partners: IPartner[] = [
    {
        title: 'DFuture',
        img: '/img/partners/dfuture.png',
        url: 'https://dfuture.com.mx/',
    },
    {
        title: 'Que ruede la #5',
        img: '/img/partners/qr5.png',
        instagram: 'https://www.instagram.com/queruedelanumero5/',
        youtube: 'https://www.youtube.com/@Queruedelanumero5Podcast'
    }
]

const Partners = () => {
    return (
        <div className="p-4 rounded-lg text-justify">
            <Typography text='Nuestros Partners 2024' variant='title' className='text-center' />

            <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                    <div key={index} className="bg-white/10 p-4 rounded-lg flex flex-col items-center justify-center">
                        <Image src={partner.img} alt={partner.title} width={200} height={200} className="max-w-[100px] mx-auto"/>
                        <div className="flex_c_center gap-4 mt-4 text-white">
                            {partner.url && <a href={partner.url} target="_blank" rel="noreferrer"><TbWorld className="text-3xl" /></a>}
                            {partner.instagram && <a href={partner.instagram} target="_blank" rel="noreferrer"><TbBrandInstagram className="text-3xl" /></a>}
                            {partner.youtube && <a href={partner.youtube} target="_blank" rel="noreferrer"><TbBrandYoutube className="text-3xl" /></a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners