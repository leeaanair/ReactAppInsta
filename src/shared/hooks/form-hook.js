import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {


  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;


      for (const inputId in state.inputs) {

        if(!state.inputs[inputId]){
          continue;
        } //this if condition is kept when 'name' of sign-up is still considered in login page. there 
        //name is undefined, hence the below lines given an error. hence we continue, incase it's not found.

        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;

          
        } else {

          formIsValid = formIsValid && state.inputs[inputId].isValid;

        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        formIsValid: formIsValid
      };
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        formIsValid: action.formIsValid
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {


  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    formIsValid: initialFormValidity
  });

  const inputHandler = useCallback((id, value, isValid) => {


    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {

    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity
    });
  }, []); 

  return [formState, inputHandler, setFormData];
};