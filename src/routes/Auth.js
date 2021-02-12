import React, { useState } from "react";
import { authService } from "fbase";
import styled from "styled-components";
import Name from "./home/Name";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      //   console.log(error);
      setError(error);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

//   const Div = styled.div`
//     display: flex;
//   `;

  const styledDiv = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    background-color: red;
    margin-left: 100px;
  `;
  return (
    <div>
      <styledDiv>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={onChange}
            required
            value={email}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
            required
            value={password}
          />
          <input
            type="submit"
            value={newAccount ? "Create Account" : "Sign In"}
          />
          {error}
        </form>
      </styledDiv>
      <Name />
    </div>
  );
};

export default Auth;
