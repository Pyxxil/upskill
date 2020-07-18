import React, { FormEvent } from "react";

const Login = () => {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Please register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value="" /><br/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value="" /><br/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value="" /><br/>
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="text" id="passwordConfirm" name="passwordConfirm" value="" /><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;