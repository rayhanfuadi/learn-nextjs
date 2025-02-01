import { useRouter } from "next/router"
import Navbar from "../Navbar"

interface AppShellProps {
    children: React.ReactNode
}

const disableNavbar = [
    "/auth/login",
    "/auth/register",
    "/404",
]

const AppShell = ({ children }: AppShellProps) => {
    const { pathname } = useRouter()

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}

export default AppShell