// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/">
						Home
					</NavLink>
					<NavLink to="/contact">
						Contact Us
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
