import Link from "next/link"
import { useRouter } from "next/router"

const LoginPage = () => {
    const { push } = useRouter()
    const handleLogin = () => {
        push("/product")
    }
    return (
        <div>
            <h1 className="text-2xl">LoginPage</h1>
            <button
                onClick={() => handleLogin()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">login
            </button>
            <p>
                Belum punya akun?
                <Link className="text-blue-500 hover:underline hover:underline-offset-2" href="/auth/register"> Register Disini</Link>
            </p>
        </div>
    )
}

export default LoginPage