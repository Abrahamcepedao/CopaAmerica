"use client"
import ReduxProvider from "./GlobalRedux/provider"
 
const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
	)
}
 
export default Providers