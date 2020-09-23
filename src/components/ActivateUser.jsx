import React from "react";
import { useHistory } from "react-router-dom";
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
      <div>
        <h2>Activate Account</h2>
        <button onClick={handleActivateUser}>Activate User</button>
      </div>
    </div>
  );
}
