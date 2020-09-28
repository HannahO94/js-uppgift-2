import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../data/UserKit";

export default function ActivateUser({ setUid, setToken, uid, token }) {
  const history = useHistory();

  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }
  return (
    <div>
      <InputWrapper>
        <h2>Activate Account</h2>
        <Button onClick={handleActivateUser}>Activate User</Button>
      </InputWrapper>
    </div>
  );
}
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
