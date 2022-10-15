import { NavLink, Outlet } from "react-router-dom";
import "../nav/nav.css";

export default function Nav() {
	return (
		<>
			<header className="menu">
				<h3>React Example</h3>
				<nav className="menu-items">
					<NavLink end to="/" className="menu-item">
						Home
					</NavLink>

					<NavLink to="/photos" className="menu-item">
						Photos
					</NavLink>
					<NavLink to="/users" className="menu-item">
						Users
					</NavLink>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
