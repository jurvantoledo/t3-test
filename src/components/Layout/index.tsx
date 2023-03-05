import Footer from "../Footer"
import Navigation from "../Navigation"

interface TLayout {
    children: React.ReactNode
}

export default function Layout({ children }: TLayout) {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}