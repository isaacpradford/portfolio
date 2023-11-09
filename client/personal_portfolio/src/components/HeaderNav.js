// router
import { Link } from "react-router-dom";

export default function HeaderNav()
{
	return (
        <ul className="headerNav">  
            <li className="headerLi"><Link to={`/projects`}>All Projects</Link></li>
            <li className="headerLi"><Link to={`/music`}>Music</Link></li>
            <li className="headerLi"><Link to={`/about`}>About Me</Link></li>
            <li className="headerLi"><Link to={`/contact`}>Contact</Link></li>
        </ul>
	)
}