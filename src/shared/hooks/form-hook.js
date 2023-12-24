import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {


  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          console.log("Action id matches");
          console.log("Hence action is : ",action);
          formIsValid = formIsValid && action.isValid;
          console.log("form validity is ", formIsValid);

          
        } else {

          console.log("Action is ", action);
          console.log("Inside formreducer title is valid? ", state.inputs[inputId].isValid);
          console.log("Inside formreducer title is ? ", state.inputs[inputId].value);
          formIsValid = formIsValid && state.inputs[inputId].isValid;

          console.log("form validity is ", formIsValid);

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