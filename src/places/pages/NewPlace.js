import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import './NewPlace.css';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';


const formReducer = (state, action) => {

	switch(action.type){

		case 'INPUT_CHANGE':
			let formIsValid = true;
			for (const inputId in state.inputs) {
				if(inputId === action.inputId){
					formIsValid = formIsValid && action.isValid;
				}
				else{
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs : {
					...state.inputs,
					[action.inputId] : { value : action.value, isValid : action.isValid}

				},
				isValid : formIsValid
			};

		default :
			return state;
	}

};


const NewPlace = () => {

	const [formState, dispatch] = useReducer(formReducer, {
		inputs : {
			title: {
				value : '',
				isValid : false
			},
			description: {
				value : '',
				isValid : false
			}

		}, 
		isValid : false
	});

	 
	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({type : 'INPUT_CHANGE', value : value, isValid : isValid, inputId : id})
	}, []);


	const onSubmitHandler = event => {
		event.preventDefault();
		console.log(formState.inputs);
	}

	return (
	<form className="place-form" onSubmit={onSubmitHandler}> 
		<Input id = "title" onInput = {inputHandler} element = "input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid value"/>
		<Input id = "description" onInput={inputHandler} element = "textarea" type="text" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter atleast 5 characters"/>
		<Input id = "address" onInput={inputHandler} element = "textarea" type="text" label="Address" validators={[VALIDATOR_MINLENGTH(20)]} errorText="Please enter atleast 20 characters"/>
		
		<Button type="submit" disabled={!formState.isValid}>ADD Place</Button>

	</form>
	);
}

export default NewPlace;