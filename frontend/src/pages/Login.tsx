import React, { FormEvent } from "react";

const Login = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Please login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value="" /><br />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" value="" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
