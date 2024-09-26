import Link from "next/link"

export default function ProductList() {
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Products:</h1>
            <h2><Link href="">product 1</Link></h2>
            <h2><Link href="">product 2</Link></h2>
            <h2><Link href="">product 3</Link></h2>
        </>
    )
}