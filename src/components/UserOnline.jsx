import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import UserConstext from "../contexts/UserContext";
import UserKit from "../data/UserKit";

export default function UserOnline() {
  const { user, setUser } = useContext(UserConstext);
  const userKit = new UserKit();

  function getUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }

  useEffect(() => {
    setUser(getUser());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <UserInfo>
      <p>{user && user.email}</p>
      <p>
        {user && user.firstName} {user && user.lastName}
      </p>
    </UserInfo>
  );
}

const UserInfo = styled.div`
  grid-column: 1 / span 2;
  text-align: right;
  margin: 20px 20px 50px 20px;
  color: #fff;
  @media (max-width: 768px) {
    grid-column: 1;
  }
`;
