import React, { useState } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const userKit = new UserKit();

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }
  function renderInput(label, placeholder, stateVariable, stateSetVariable) {
    return (
      <InputWrapper>
        <label>{label}:</label>
        <Input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
        />
      </InputWrapper>
    );
  }
  return (
    <PageWrapper>
      <h2>Register</h2>
      <p>Enter details to register</p>

      {renderInput("First Name", "John", firstName, setFirstName)}
      {renderInput("Last Name", "Doe", lastName, setLastName)}
      {renderInput("Email", "john.doe@mail.com", email, setEmail)}
      {renderInput(
        "Password",
        "Must have at least 8 characters",
        password,
        setPassword
      )}
      {renderInput(
        "Organisation Name",
        "My company",
        organisationName,
        setOrganisationName
      )}
      {renderInput(
        "Organisation Kind (0,1,2)",
        "(0,1,2)",
        organisationKind,
        setOrganisationKind
      )}

      <Button onClick={handleRegister}>Register</Button>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  width: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  label {
    margin: 5px;
    margin-bottom: 2px;
  }
`;
const Input = styled.input`
  padding: 12px;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
`;
const Button = styled.button`
  width: 20%;
  background-color: #4caf50;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 15px 5px;
  cursor: pointer;
  box-sizing: border-box;
`;
