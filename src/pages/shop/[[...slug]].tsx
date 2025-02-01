import { useRouter } from "next/router"

const ShopPage = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        <div>
            <h1>ShopPage</h1>
            <p className="flex">Shop:
                {query.slug ? query.slug[0] : ""}
                {query.slug ? <div> - {query.slug[1]}</div> : ""}
                {query.slug ? <div> - {query.slug[2]}</div> : ""}
                {query.slug ? <div>{query.slug[3]}</div> : ""}
            </p>
        </div>
    )
}

export default ShopPage