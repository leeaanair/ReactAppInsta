import React, { useState } from 'react';
import "./NewGoal.css";

const NewGoal = props => {
	
	//let enteredText = '';
	
	const [enteredText, setText] = useState('');	//current state and updatestate

	const addGoalHandler = event => {
		event.preventDefault();
		
		const newGoal = {
			id : Math.random().toString(),
			text : enteredText
		};
		
		/*If you want to remove the text in field after submitting.*/
		// enteredText = '';
		console.log(newGoal);
		props.onAddGoal(newGoal); 
		
		
	};
	
	const onTextChangeHandler = event => {
		
		/*without using state, the previous state disappears when you click on submit twice*/
		//enteredText = event.target.value
		
		/*no need of function since it doesn't depend on previous state*/
		setText(event.target.value);
	}
	return (
		<form className = "new-goal" onSubmit={addGoalHandler}>
		
		{/*Two way binding in value which binds the current value and onChange with updates the new value*/}
			
			<input type="text" value = {enteredText} onChange={onTextChangeHandler}/>
			<button type="submit">Add Goal</button>
			
		</form>
	);
	
};

export default NewGoal;
