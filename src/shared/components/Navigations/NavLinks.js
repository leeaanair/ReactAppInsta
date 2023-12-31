import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {
	
	const auth = useContext(AuthContext);

	console.log("From NavLinks : ", auth.isLoggedIn);
	return(
	<ul className = "nav-links">
		<li><NavLink to="/" exact>All Users</NavLink></li>
			{
				auth.isLoggedIn && ( 
					<React.Fragment>
						<li><NavLink to="/u1/places">My Places</NavLink></li>
						<li><NavLink to="/places/new">Add Place</NavLink></li>
					</React.Fragment>
				)
			}
			{
				!auth.isLoggedIn &&
				(<li><NavLink to="/auth">Login</NavLink></li>)	
			}

	</ul>
	);
}

export default NavLinks;