// router
import { Link } from "react-router-dom";
import logo from "../images/pr-high-resolution-logo-transparent-black.png"

export default function Logo({loadAnimation})
{
    const logoClass = loadAnimation ? "home-logo" : "page-logo";
    if(loadAnimation) {
        return (
            <div className="introBox">
                {/* <img className={`logo ${logoClass}`} src={logo} alt="Logo for website"/> */}
                <h1 className={`logo ${logoClass}`}>IR</h1>
                <h1 className="introName">Isaac Radford</h1>
                <h2 className="introDegree">Software Design / WebDev</h2>
            </div>
        )
    } else {
        return (
            <div className="introBox">
                <Link to="/" className="logo-link">
                    {/* <img className={`logo ${logoClass}`} src={logo} alt="Logo for website"/> */}
                    <h1 className={`logo ${logoClass}`}>IR</h1>
                </Link>
            </div>
        )
    }
}