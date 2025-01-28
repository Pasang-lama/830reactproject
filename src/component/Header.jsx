import Logo from "../assets/logo.svg"
import { Link } from "react-router"
function Header() {
    return (
        <header className="header">
            <div className="top-header text-light py-2 px-5 d-flex justify-content-between">
                <div className="phone"><i className="bi bi-phone"></i> OUR PHONE NUMBER: <a href="tel:+">+77 (756) 334 876</a></div>
                <ul className="d-flex gap-3">
                    <li><a href=""><i className="bi bi-person-fill"></i> My account</a></li>
                    <li><a href="">  Cart</a></li>
                    <li><a href="">  Our location </a></li>
                    <li><Link to={"/about"}>About us</Link></li>
                    <li> <Link to={"/contact"}>Contact us</Link></li>
                </ul>
            </div>
            <div className="navigation-bar py-3 px-5 d-flex justify-content-between align-items-center">
                <nav>
                    <ul className="d-flex gap-3">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Features</a></li>
                    </ul>
                </nav>
                <Link to={"/"}> <img src={Logo} alt="" /></Link>
                <div className="right-content">
                    <button>Login / Register</button>
                </div>
            </div>
        </header>
    )
}


export default Header