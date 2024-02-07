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
                <h1 className={`logo ${logoClass}`}>PR</h1>
                <h1 className="introName">Parker Radford</h1>
                <h2 className="introDegree">Web Development / Software Design</h2>
            </div>
        )
    } else {
        return (
            <div className="introBox">
                <Link to="/" className="logo-link">
                    {/* <img className={`logo ${logoClass}`} src={logo} alt="Logo for website"/> */}
                    <h1 className={`logo ${logoClass}`}>PR</h1>
                </Link>
            </div>
        )
    }
}