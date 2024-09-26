import Link from "next/link"

export default function Home() {
    return (
        <>
            <Link href="/about">About</Link> <br></br>
            <Link href="/products">Productus</Link>
            <h1>Hello</h1>
        </>
    )
}