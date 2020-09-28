import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../data/UserKit";

export default function DeleteCustomer({ id }) {
  const userKit = new UserKit();
  const history = useHistory();

  function deleteCustomer() {
    userKit
      .deleteCustomer(id)
      .then((res) => res.json())
      .then((data) => {});
    history.push("/home");
  }
  return (
    <div>
      <Button onClick={deleteCustomer}>Delete customer</Button>
    </div>
  );
}
const Button = styled.button`
  width: 200px;
  font-size: 16px;
  background-color: #ff2400;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 15px;
  cursor: pointer;
  box-sizing: border-box;
`;
