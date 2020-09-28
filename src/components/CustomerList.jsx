import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import UserConstext from "../contexts/UserContext";
import UserKit from "../data/UserKit";
import NewCustomer from "./NewCustomer";

export default function CustomerList() {
  const userKit = new UserKit();
  const { customerList, setCustomerList } = useContext(UserConstext);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        data.count === 0
          ? setCustomerList(null)
          : setCustomerList(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <GridWrapper>
      <PageWrapper>
        <H2>Customers</H2>

        {customerList === null ? (
          <p>You have no customers</p>
        ) : (
          customerList.map((customer, i) => {
            return (
              <CustomerWrapper key={i}>
                <LinkItem to={`customer/${customer.id}`}>
                  <Text>{customer.name}</Text>
                </LinkItem>

                <p>Org Nr: {customer.organisationNr}</p>
                <p>Reference: {customer.reference}</p>
              </CustomerWrapper>
            );
          })
        )}
      </PageWrapper>
      <NewCustomer getCustomerList={getCustomerList} />
    </GridWrapper>
  );
}
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin: 0;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H2 = styled.h2`
  margin-bottom: 30px;
`;

const CustomerWrapper = styled(PageWrapper)`
  width: 35vw;
  flex-wrap: wrap;
  align-items: start;
  padding: 12px;

  border: 1px solid #d7d7d7;
  border-radius: 6px;
  p {
    box-sizing: border-box;
    margin: 5px;
  }
`;
const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Text = styled.h2`
  width: 100%;
  font-size: 20px;
`;
