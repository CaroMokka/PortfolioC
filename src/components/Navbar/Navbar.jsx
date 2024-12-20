import "./Navbar.css"
import logo from "../../assets/logo-06.png"

export const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>
                <img src={logo} />
            </div>

        </nav>
    )
}
