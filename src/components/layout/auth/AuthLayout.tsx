//netx
import Image from "next/image"

//components
import Banner from "./Banner"
import AuthWrapper from "./AuthWrapper"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="h-screen flex flex-col justify-between bg-primary">
            <Banner/>
            <div className="max-w-xl mx-auto">
                <AuthWrapper>
                    {children}
                </AuthWrapper>
            </div>
            {/* <div>
                <Image src="/img/euro_footer.png" alt="logo" width={2000} height={400} className="w-screen"/>
            </div> */}
        </div>
    )
}

export default AuthLayout