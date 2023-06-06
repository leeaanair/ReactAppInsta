import './App.css';
import React from 'react';
import GoalList from './components/GoalList';

const App = () => {
	
	const courseGoals = [
	{id : 'cg1', text : 'Finish the Goals'},
	{id : 'cg2', text : 'Revise'},
	{id : 'cg3', text : 'Help others'}
	];
	
	return(
		<GoalList goals={courseGoals}/>	//Merge jsx code with js expression
		
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
