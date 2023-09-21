import React, { useCallback } from 'react';
import Input from '../../shared/components/FormElements/Input';
import './NewPlace.css';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';


const NewPlace = () => {
	const titleInputHandler = useCallback((id, value, isValid) => {}, []);
	const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

	return (
	<form className="place-form"> 
		<Input id = "title" onInput = {titleInputHandler} element = "input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid value"/>
		<Input id = "description" onInput={descriptionInputHandler} element = "textarea" type="text" label="Title" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter atleast 5 characters"/>
	</form>
	);
}

export default NewPlace;