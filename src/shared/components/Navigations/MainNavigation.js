import React from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const MainNavigation = props => {
	
	return(
		<React.Fragment>
			<SideDrawer className = "main-navigation__drawer-nav">
				<NavLinks />
			</SideDrawer>
			<MainHeader>
			{/* 		This goes in props.children of MainHeader
			*/	}		
				<button className = "main-navigation__menu-btn">
					<span />
					<span />
					<span />
				</button>
				<h1 className = "main-navigation__title">
					<Link to="/">ReactInsta</Link>
				</h1>
				<nav className = "main-navigation__header-nav">
				<NavLinks />
				</nav>
			</MainHeader>
		</React.Fragment>
	);
}

export default MainNavigation;