import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Login from './users/pages/Login';

import MainNavigation from './shared/components/Navigations/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {

	const [isLoggedin, setIsLoggedIn] = useState(false);

	const login = useCallback(() => {
		console.log("This ran!");
		setIsLoggedIn(prevIsLoggedIn => true);
		
	}, []);
	  
	const logout = useCallback(() => {
		setIsLoggedIn(false)
	}, []);


	let routes;
	if(isLoggedin){

		routes = (
			<React.Fragment>
			<Route path="/" exact element={<Users />} />	
			<Route path="/places/new" element={<NewPlace />} />	
			<Route path="/places/:placeId" element={<UpdatePlace />} />	
			<Route path="/:userId/places" element={<UserPlaces />} />
			<Route path='*' element={<Navigate to="/" replace={true} />} />
		</React.Fragment>

		);
	}
	else{
		routes = (
		<React.Fragment>
			<Route path="/" exact element={<Users />} />	
			<Route path="/:userId/places" element={<UserPlaces />} />
			<Route path="/auth" element={<Login />} />	
			<Route path='*' element={<Navigate to="/auth" replace={true} />} />
		</React.Fragment>
		)

	}
	
	return (

		<AuthContext.Provider value={{isLoggedIn : isLoggedin, login : login, logout : logout}}>
			<Router>
			{/** Route won't work without Routes. also component is replaced with element**/}
				<MainNavigation />
				<main>	
				{/** Main css is coming from MainHeader. main tag is a semantic tag in html**/}
					
					<Routes>
						{routes}
					</Routes>
				</main>

			{/** Redirect is replaced with , Switch is replaced with Routes**/}

			</Router>;

	</AuthContext.Provider>

	);
}

export default App;