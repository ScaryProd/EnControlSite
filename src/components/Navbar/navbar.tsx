// Filename - "./components/Navbar.js
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/">
						Home
					</NavLink>
					<NavLink to="/Meetups">
						Meetups
					</NavLink>
					<NavLink to="/Featured">
						Featured
					</NavLink>
					<NavLink to="/Team">
						The Team
					</NavLink>
					<NavLink to="/Contact">
						Contact Us
					</NavLink>
					
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
