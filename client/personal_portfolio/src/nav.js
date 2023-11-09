import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="nav">
			<Link to="/" className="site-title">
				Isaac Radford
			</Link>
		</nav>
	);
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
	);
}
