/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};


const ProductPage = () => {
    const [isLoggin, setIsLoggin] = useState(true)
    const [products, setProducts] = useState([])
    const { push } = useRouter()
    useEffect(() => {
        if (!isLoggin) {
            push("/auth/login")
        }
    }, [])

    useEffect(() => {
        fetch('/api/product')
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    return (
        <div>
            <h1>ProductPage</h1>
            <div className="grid gap-2">
                {products.map((product: productType) => (
                    <div key={product.id} className="m-2 p-2 border">
                        <p>id: {product.id}</p>
                        <p>name: {product.name}</p>
                        <p>price: {product.price}</p>
                        <p>size: {product.size}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage