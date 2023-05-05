import './App.css';
import React from 'react';
import GoalList from './components/GoalList';

const App = () => {
	
	return(
		<GoalList />
	
	); //React.createElement('h1', {title: 'This works'}, 'Hi! This is React')

}

/* class App extends React.Component{
	
	render(){
		return(<h1 title="This works">
			Hi! This is React 
		</h1>);
	}
	
}
 */
export default App;
