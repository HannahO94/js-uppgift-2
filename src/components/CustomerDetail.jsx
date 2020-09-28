import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { Link } from "react-router-dom";

import DeleteCustomer from "../components/DeleteCustomer";
import styled from "styled-components";

export default function CustomerDetail({ props }) {
  const [customerDetail, setCustomerDetail] = useState([]);
  const userKit = new UserKit();

  const currentId = props.match.params.id;
  function getCustomerDetail() {
    userKit
      .getCustomer(currentId)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data);
      });
  }

  useEffect(() => {
    getCustomerDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Div>
      <H1>Detail Page</H1>
      <CustomerInfoWrapper key={customerDetail.id}>
        <h2>{customerDetail.name}</h2>

        <P>
          Orgnaisation number:{" "}
          {customerDetail.organisationNr && customerDetail.organisationNr}
        </P>
        <P>Vat Number: {customerDetail.vatNr && customerDetail.vatNr}</P>
        <P>Reference: {customerDetail.reference && customerDetail.reference}</P>
        <P>
          Payment Term:{" "}
          {customerDetail.paymentTerm && customerDetail.paymentTerm}
        </P>
        <P>Website: {customerDetail.website && customerDetail.website}</P>
        <P>Email: {customerDetail.email && customerDetail.email}</P>
        <P>
          Phone Number:{" "}
          {customerDetail.phoneNumber && customerDetail.phoneNumber}
        </P>
      </CustomerInfoWrapper>
      <LinkItem to={`/edit-customer/${customerDetail.id}`}>
        Edit customer detail{" "}
      </LinkItem>
      <DeleteCustomer id={customerDetail.id} />
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 30px;
`;
const CustomerInfoWrapper = styled.div`
  margin: 50px;
`;
const P = styled.p`
  margin: 10px 0;
`;
const LinkItem = styled(Link)`
  background-color: #4caf50;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
`;
