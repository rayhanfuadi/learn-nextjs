import { useRouter } from "next/router"
import Navbar from "../Navbar"

interface AppShellProps {
    children: React.ReactNode
}

const disableNavbar = [
    "/auth/login",
    "/auth/register",
]

const AppShell = ({ children }: AppShellProps) => {
    const { pathname } = useRouter()

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            <div className="p-4 bg-slate-900 text-white">Footer</div>
        </main>
    )
}

export default AppShell