//components
import Header from "./Header"
import Navbar from "./Navbar"
import ProtectedRoute from "./ProtectedRoute"

const AppLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="bg-primary min-h-screen">
            <ProtectedRoute>
                <Header />
                <div className="overflow-y-scroll pb-24">
                    {children}
                </div>
                <Navbar />
            </ProtectedRoute>
        </div>
    )
}

export default AppLayout