"use client"
//bcs this provider is available fot the clinet side not server
import { SessionProvider } from "next-auth/react"

const Provider = ({children}) => {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    )
}
export default Provider;