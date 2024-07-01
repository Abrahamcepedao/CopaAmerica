//next
import Image from "next/image";

const Banner = () => {
    return (
        <div className="img_back flex-1 w-screen bg-background">
            <div className="bg-dark_overlay h-full flex justify-end flex-col px-4 pt-4">
                <div className="text-center pb-8 max-w-[350px] mx-auto h-full flex justify-center flex-col">
                    <div>
                        <Image src="/img/copamerica_logo.png" alt="logo" width={220} height={200} className="mx-auto mb-4"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner