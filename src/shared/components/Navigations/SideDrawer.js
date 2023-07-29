import React from 'react';
import ReactDOM  from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
	
	
 	const content =	<aside className="side-drawer">{props.children}</aside>
	return(
		ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
	);

	/*
		
		return(
		<aside className="side-drawer">{props.children}</aside>
		);
	
	*/
 
 }

export default SideDrawer;