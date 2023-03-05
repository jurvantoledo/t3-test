import NavItem from "./NavItem";

export default function Navigation() {
    return (
        <div className="flex justify-evenly px-5 py-3">
            <NavItem item="home" href="/" />
            <NavItem item="about" href="/about" />
        </div>
    )
}