import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import ActivateUser from "../components/ActivateUser";
import Login from "../components/Login";

export default function LoginPage() {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  return (
    <Div>
      {uid && token ? (
        <ActivateUser
          setUid={setUid}
          uid={uid}
          setToken={setToken}
          token={token}
        />
      ) : (
        <Login />
      )}
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
`;
