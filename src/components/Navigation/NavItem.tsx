import Link from "next/link";

interface TNavItem {
    item: string
    href: string
}

export default function NavItem({ item, href }: TNavItem) {
    return (
        <div className="mx-2">
            <Link href={href}>{item}</Link>
        </div>
    )
}