import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()}/>
    <span>
        {touched
        && hasError("required")
        && `${meta.label} is required`}
    </span>
  </div>  
)
export default class Login extends Component {
    loginForm = FormBuilder.group({
        name: ["", Validators.required],
        address: ["", Validators.required],
        rememberMe: false
    });
    handleReset=() => {
        this.loginForm.reset();
    }
    handleSubmit=(e) => {
        alert("Form Submitted Successfilly !!!")
        console.log("Form values", this.loginForm.value);
    }
    render() {
        return (
          
              <FieldGroup
                control={this.loginForm}
                render={({ get, invalid }) => (
                  <form onSubmit={this.handleSubmit}>

                    <FieldControl
                      name="name"
                      render={TextInput}
                      meta={{ label: "Name" }}
                    />

                    <FieldControl
                      name="address"
                      render={TextInput}
                      meta={{ label: "Address" }}
                    />

                    
                    <button
                      type="button"
                      onClick={this.handleReset}
                    >
                      Reset
                    </button>
                    <button className='submit'
                      type="submit"
                      disabled={invalid}
                    >
                      Submit
                    </button>
                  </form>
                )}
              />
        );
    }
}