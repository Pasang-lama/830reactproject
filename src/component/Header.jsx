import Logo from "../assets/logo.svg"
function Header() {
    return (
        <header className="header">
            <div className="top-header text-light py-2 px-5 d-flex justify-content-between">
                <div className="phone"><i className="bi bi-phone"></i> OUR PHONE NUMBER: <a href="tel:+">+77 (756) 334 876</a></div>
                <ul className="d-flex gap-3">
                    <li><a href=""><i className="bi bi-person-fill"></i> My account</a></li>
                    <li><a href="">  Cart</a></li>
                    <li><a href="">  Our location </a></li>
                    <li><a href="">  Contact us</a></li>
                </ul>
            </div>
            <div className="navigation-bar py-3 px-5 d-flex justify-content-between align-items-center">
                <nav>
                    <ul className="d-flex gap-3">
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Features</a></li>
                    </ul>
                </nav>
                <a href=""><img src={Logo} alt="" /></a>
                <div className="right-content">
                    <button>Login / Register</button>
                </div>
            </div>
        </header>
    )
}


export default Header