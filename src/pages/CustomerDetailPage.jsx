import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import DeleteCustomer from "../components/DeleteCustomer";
import UserConstext from "../contexts/UserContext";
import UserKit from "../data/UserKit";

export default function CustomerDetailPage(props) {
  const { customerList } = useContext(UserConstext);
  const [customerDetail, setCustomerDetail] = useState([]);
  const userKit = new UserKit();
  const currentId = props.match.params.id;

  console.log(customerList);

  function getCustomerDetail() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data.results);
      });
  }

  useEffect(() => {
    getCustomerDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>CustomerDetailPage</h1>
      {customerDetail &&
        customerDetail
          .filter((customer) => customer.id === parseInt(currentId))
          .map((customer, i) => {
            return (
              <div key={customer.id}>
                <h2>{customer.name}</h2>
                {console.log(i)}
                <p>
                  Orgnaisation number:{" "}
                  {customer.organisationNr && customer.organisationNr}
                </p>
                <p>Vat Number: {customer.vatNr && customer.vatNr}</p>
                <p>Reference: {customer.reference && customer.reference}</p>
                <p>
                  Payment Term: {customer.paymentTerm && customer.paymentTerm}
                </p>
                <p>Website: {customer.website && customer.website}</p>
                <p>Email: {customer.email && customer.email}</p>
                <p>
                  Phone Number: {customer.phoneNumber && customer.phoneNumber}
                </p>
                <DeleteCustomer id={customer.id} />
                <Link to={`/edit-customer/${customer.id}`}>
                  Edit customer detail{" "}
                </Link>
              </div>
            );
          })}
    </div>
  );
}
