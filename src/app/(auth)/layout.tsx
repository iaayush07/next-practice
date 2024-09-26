"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const navLinks = [
    {
        name: "Register", href: "/register"
    },
    {
        name: "Login", href: "/login"
    },
    {
        name: "Forgot-password", href: "/forgot-password"
    }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const path= usePathname();
    return (
        <>
        {navLinks.map((link)=> {
            const isActive = path.startsWith(link.href)
            return(
                <Link href={link.href} key={Link.name} className={isActive ? "active":""}>{link.name}</Link>
            )
        })}
            {children}
        </>
    )
}
