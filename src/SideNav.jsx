import React from 'react'
import { Link } from 'react-router'


const SideNav = ({ children }) => {
  return (
		<div className="">
			SideNav
			<nav className="flex flex-col relative top-0 p-4">
				<Link to="/">HOME</Link>
				<Link to="/notes">NOTES</Link>
			</nav>
		</div>
	);
}

export default SideNav