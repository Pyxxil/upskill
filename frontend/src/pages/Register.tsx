import React, { FormEvent } from "react";
import { User } from "../App";

interface IProps {
    user: User | null | undefined,
    setUser: Function
}

interface IState {
    name?: string,
    email?: string,
    password?: string,
    passwordConfirm?: string,

    error?: string[]
}

const validEmailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

class Register extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",

            error: []
        }
    }

    handleChangeName(event: FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }

    handleChangeEmail(event: FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }

    handleChangePassword(event: FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value });
    }

    handleChangePasswordConfirm(event: FormEvent<HTMLInputElement>) {
        this.setState({ passwordConfirm: event.currentTarget.value });
    }

    /**
     * Submit logic.
     * When the user presses the register button, a request is made to the backend to attempt to register.
     * @param event 
     */
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(this.validateClientSide()){
            console.log("Submitting form ");
            console.log(this.state);
        }
    }

    /**
    * This method is used to validate the registration form on the client side.
    */
    validateClientSide = () => {
        let overallError: string[] = [];

        let valid = true;

        if (this.state.name && this.state.email && this.state.password && this.state.passwordConfirm) {
            // Validate the display name
            if (this.state.name.length < 6 || this.state.name.length > 14) {
                overallError.push("Display name must be between 6 and 14 characters long (inclusive).");
                valid = false;
            }

            // Validate the email
            if (!validEmailRegex.test(this.state.email)) {
                overallError.push("Email must be valid.");
                valid = false;
            }

            // Validate the password
            if (!validPasswordRegex.test(this.state.password)) {
                overallError.push("Password must be larger than 8 characters, contain 1 lowercase alphabetical character, contain 1 uppercase alphabetical character and 1 numeric character.");
                valid = false;
            }

            // Validate the password confirmation
            if (this.state.passwordConfirm !== this.state.password) {
                overallError.push("Password confirmation must be the same as the password.");
                valid = false;
            }

        } else {
            overallError.push("Fields cannot be empty.");
            valid = false;
        }

        // Set error messages
        this.setState({
            error: overallError,
        });

        return valid;
    }

    render() {
        return (
            <div>
                <h1>Please login</h1>
                <div>
                    {this.state.error && this.state.error.length > 0 && (<h2>Errors:</h2>)}
                    {this.state.error && this.state.error.map((errorReason, index) => (
                        <li key={index}>
                            {errorReason}
                        </li>
                    ))}
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChangeName.bind(this)} value={this.state.name} /><br />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={this.handleChangeEmail.bind(this)} value={this.state.email} /><br />
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" onChange={this.handleChangePassword.bind(this)} value={this.state.password} /><br />
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="text" id="passwordConfirm" name="passwordConfirm" onChange={this.handleChangePasswordConfirm.bind(this)} value={this.state.passwordConfirm} /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
};

export default Register;