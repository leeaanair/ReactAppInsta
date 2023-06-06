import './GoalList.css';
import React from 'react';

//using props
const GoalList = props => {
	
	//console.log(props.goals);
	
	return(
		<div className="course-goals">
			<h2>Course Goals</h2>
			<ul className="goal-List">
			{
				props.goals.map(goal => {
				return <li key={goal.id}>{goal.text}</li>;
			})
			}
			</ul>
		</div>
	
	); //React.createElement('h1', {title: 'This works'}, 'Hi! This is React')

}



/* const GoalList = () => {
	
	return(
		<div className="course-goals">
			<h2>Course Goals</h2>
			<ul className="goal-List">
				<li>Finish the course</li>
				<li>Revise</li>
				<li>Help others</li>
			</ul>
		</div>
	
	); //React.createElement('h1', {title: 'This works'}, 'Hi! This is React')

}
 */
 
 
/* class App extends React.Component{
	
	render(){
		return(<h1 title="This works">
			Hi! This is React 
		</h1>);
	}
	
}
 */
export default GoalList;
