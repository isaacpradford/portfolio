// router
import { Link } from "react-router-dom";

export default function SocialLinks()
{
	return (
        <ul className="socialLinks">  
            <li className="socialLi"><Link to={`/music`}>LinkedIn</Link></li>
            <li className="socialLi"><Link to={`/about`}>Instagram</Link></li>
            <li className="socialLi"><Link to={`/contact`}>Twitter</Link></li>
        </ul>
	)
}