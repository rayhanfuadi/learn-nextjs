/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const ProductPage = () => {
    const [isLoggin, setIsLoggin] = useState(false)
    const { push } = useRouter()
    useEffect(() => {
        if (!isLoggin) {
            push("/auth/login")
            console.log("belum login")
        }
    }, [])

    return (
        <div>
            <h1>ProductPage</h1>

        </div>
    )
}

export default ProductPage