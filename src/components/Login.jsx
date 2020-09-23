import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../data/UserKit";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  const userKit = new UserKit();

  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }
  return (
    <InputWrapper>
      <h2>Login</h2>
      <Input
        placeholder="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </InputWrapper>
  );
}
const InputWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 12px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  border: 2px solid #ccc;

  background-color: #f8f8f8;
`;
const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 5px;
  cursor: pointer;
`;
