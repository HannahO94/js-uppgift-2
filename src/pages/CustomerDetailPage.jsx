import React from "react";
import ChangeCustomer from "../components/ChangeCustomer";
import CustomerDetail from "../components/CustomerDetail";

export default function CustomerDetailPage(props) {
  return (
    <div>
      <CustomerDetail props={props} />
    </div>
  );
}
