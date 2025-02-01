import Link from "next/link"
import { useRouter } from "next/router"

const RegisterPage = () => {
    const router = useRouter()
    const handleRegist = () => {
        router.push("/shop")
    }
    return (
        <div>
            <h1 className="text-2xl">RegisterPage</h1>
            <button
                onClick={() => handleRegist()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">register
            </button>
            <p>
                sudah punya akun?
                <Link className="text-blue-500 hover:underline hover:underline-offset-2" href="/auth/login"> Masuk Disini</Link>
            </p>
        </div>
    )
}

export default RegisterPage