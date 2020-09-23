import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import UserConstext from "../contexts/UserContext";
import UserKit from "../data/UserKit";
import NewCustomer from "./NewCustomer";

export default function CustomerList() {
  //   const [customerList, setCustomerList] = useState([]);
  const userKit = new UserKit();
  const { user, setUser, customerList, setCustomerList } = useContext(
    UserConstext
  );

  function getUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
  }

  useEffect(() => {
    getUser();
    getCustomerList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <p>{user && user.email}</p>
      <p>
        {user && user.firstName} {user && user.lastName}
      </p>

      <PageWrapper>
        <NewCustomer getCustomerList={getCustomerList} />
        <h2>Customer List</h2>
        {customerList &&
          customerList.map((customer, i) => {
            return (
              <CustomerWrapper key={i}>
                <Link to={`customer/${customer.id}`}>
                  <Text>{customer.name}</Text>
                </Link>
                <p>Org Nr: {customer.organisationNr}</p>
                <p>Reference: {customer.reference}</p>
              </CustomerWrapper>
            );
          })}
      </PageWrapper>
    </div>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  p {
    margin: 5px;
  }
`;
const Text = styled.p`
  font-size: 20px;
`;
