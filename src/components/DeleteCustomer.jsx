import React from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

export default function DeleteCustomer({ id }) {
  const userKit = new UserKit();
  const history = useHistory();

  function deleteCustomer() {
    userKit
      .deleteCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/home");
      });
  }
  return (
    <div>
      <button onClick={deleteCustomer}>Delete customer</button>
    </div>
  );
}
