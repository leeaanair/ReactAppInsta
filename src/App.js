import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
	return <Router>
	
	{/** Route won't work without Routes. also component is replaced with element**/}
	
		<Routes>			
			<Route path="/" element={<Users />} />	
			<Route path="/places/new" element={<NewPlace />} />	

		</Routes>
		
	{/** Redirect is replaced with Navigate, Switch is replaced with Routes**/}

	</Router>;
}

export default App;