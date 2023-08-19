import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';

import MainNavigation from './shared/components/Navigations/MainNavigation';

const App = () => {
	return <Router>
	{/** Route won't work without Routes. also component is replaced with element**/}
		<main>	
		{/** Main css is coming from MainHeader. main tag is a semantic tag in html**/}

			<MainNavigation />
			<Routes>			
				<Route path="/" element={<Users />} />	
				<Route path="/places/new" element={<NewPlace />} />	
				<Route path="/:userId/places" element={<UserPlaces />} />	

			</Routes>
		</main>

	{/** Redirect is replaced with Navigate, Switch is replaced with Routes**/}

	</Router>;
}

export default App;