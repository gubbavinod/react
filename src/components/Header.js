import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
    <div className="header">
            <div className="logo-container">
                    <img className="logo" alt="Logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                    <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>about</li>
                            <li>cart</li>
                    </ul>
            </div>
            
    </div>
)};

export default Header;