import React, { useState, useContext, useEffect } from "react";

import Card from '../../shared/components/UIElements/Card';
import Input from "../../shared/components/FormElements/Input";
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from '../../shared/util/validators';
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import './Login.css';

const Login = () => {

    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
    

       
      const loginHandler = event => {
        auth.login();
        event.preventDefault();
      };


    
      const switchModeHandler = () => {

        if(!isLoginMode){

            setFormData(
                {
                ...formState.inputs,
                  name: undefined     
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            )
        }
        else{

            setFormData(
                {
                   ...formState.inputs,
                   name : {
                    value : '',
                    isValid: false 
                   }     
                },
                false
            )

        }

        setIsLogin(prevMode => !prevMode);

      }

    return (
        <Card className="authentication">
            <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
            <hr />
            <form onSubmit={loginHandler}>

                {
                
                !isLoginMode && 
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                    />
                

                }

                <Input
                id="email"
                element="input"
                type="email"
                label="E-mail"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                errorText="Please enter a valid e-mail id."
                onInput={inputHandler}
                />

                <Input
                id="password"
                element="input"
                label="Password"
                type="password"
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(8)]}
                errorText="Please enter a valid password (at least 8 characters)."
                onInput={inputHandler}
                />

                <Button type="submit" disabled={!formState.formIsValid}>
                {isLoginMode ? 'Login' : 'Sign Up'}
                </Button>
            </form>

            <Button inverse onClick={switchModeHandler}>Switch to {!isLoginMode ? 'Login' : 'Sign Up'}</Button>
        </Card>
    
    );

};

export default Login;
