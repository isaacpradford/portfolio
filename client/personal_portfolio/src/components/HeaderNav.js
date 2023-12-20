// router
import { Link } from "react-router-dom";

export default function HeaderNav( {pages = null} )
{   
    if (pages) {
        return ( 
            <ul className="headerNav">
                {/* <li className="headerLi"><Link to={`/`}>Home</Link></li> */}
                {pages.map((page, index) => (
                    <li className="headerLi" key={index}>
                        <Link to={`/${page}`}>{page}</Link>
                    </li>
                ))}
            </ul>
        )
    } else {
        return (
        <ul className="headerNav">
            <li className="headerLi"><Link to={`/Projects`}>All Projects</Link></li>
            <li className="headerLi"><Link to={`/Music`}>Music</Link></li>
            <li className="headerLi"><Link to={`/About`}>About Me</Link></li>
            <li className="headerLi"><Link to={`/Contact`}>Contact</Link></li>
        </ul>
        )
    }

}
