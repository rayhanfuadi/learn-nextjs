import Image from "next/image"

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="grid w-full gap-4 justify-center">
                <Image src="/404.svg" alt="404" width={200} height={200} />
                <p className="text-center">404 | Page Not Found</p>
            </div>
        </div>
    )
}

export default ErrorPage