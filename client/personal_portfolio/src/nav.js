import React, {useEffect, useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to="/" className='site-title'>
                Site Name
            </Link>

            <ul>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/music">Music</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolved = useResolvedPath(to);
    const isActive = useMatch({ path: resolved.pathname, end: true });
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


// const [backendData, setBackendData] = useState([{}]);

// useEffect(() => {
//     fetch("/nav_bar").then(
//         response => response.json()
//     ).then(
//         data => {
//             setBackendData(data)
//         }
//     )
// }, [])
// return (
//     <div className="navBar">
//         {(typeof backendData.nav_bar === 'undefined') ? (
//             <p>Loading...</p>
//             ): (
//                 backendData.nav_bar.map((navLink, i) => (
//                 <li key={i}>
//                     <a href='/'>{navLink}</a>
//                 </li>
//                 ))
//             )
//         }
//     </div>
// )