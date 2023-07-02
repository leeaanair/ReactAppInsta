import './App.css';
import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
	{id : 'cg1', text : 'Finish the Goals'},
	{id : 'cg2', text : 'Revise'},
	{id : 'cg3', text : 'Help others'}

	]);	//current state and updatestate

	
/* 	const courseGoals = [
	{id : 'cg1', text : 'Finish the Goals'},
	{id : 'cg2', text : 'Revise'},
	{id : 'cg3', text : 'Help others'}

	];
 */	
	const addNewGoalHandler = (newGoal) => {

		/*It does update courseGoals, but does not update the UI. Which needs state.*/
		//courseGoals.push(newGoal);
		
		/*push modifies the old array, hence we are using concat which gives a new updated array
		but if you setCourseGoals twice, both will only update the first instance, instead of second updating the first updated constant.
		Hence it is better to pass function in setCourse goals, that gurantees that latest updated constant gets updated.
		https://stackoverflow.com/questions/71942780/react-usestate-why-do-the-docs-advise-passing-a-function-with-the-previous-stat
		*/
		
		//setCourseGoals(courseGoals.concat(newGoal));

		/*this is a safer approach*/
		setCourseGoals((prevcourseGoals) => prevcourseGoals.concat(newGoal));
		
		console.log(courseGoals);
	}
	return(
		<div>
		<NewGoal onAddGoal={addNewGoalHandler} />
		<GoalList goals={courseGoals} /> {/*Merge jsx code with js expression>*/}
		</div>
		
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
