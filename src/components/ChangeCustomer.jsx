import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";
import UserKit from "../data/UserKit";
import UserOnline from "./UserOnline";

export default function ChangeCustomer(props) {
  const [customerDetail, setCustomerDetail] = useState([]);
  const [customer, setCustomer] = useState("");
  const [organisationNumber, setOrganisationNumber] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [reference, setReference] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const userKit = new UserKit();
  const history = useHistory();
  const id = props.match.params.id;

  function getCustomerList() {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data);
      });
  }
  function changeCustomer() {
    const payload = {
      name: customer === "" ? customerDetail.name : customer,
      organisationNr:
        organisationNumber === ""
          ? customerDetail.organisationNr
          : organisationNumber,
      vatNr: vatNr === "" ? customerDetail.vatNr : vatNr,
      reference: reference === "" ? customerDetail.reference : reference,
      paymentTerm:
        paymentTerm === "" ? customerDetail.paymentTerm : paymentTerm,
      website: website === "" ? customerDetail.website : website,
      email: email === "" ? customerDetail.email : email,
      phoneNumber: phone === "" ? customerDetail.phoneNumber : phone,
    };
    console.log(payload);
    console.log(id);
    userKit
      .changeCustomer(id, payload)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push(`/customer/${id}`);
      });
  }

  console.log(customer);
  useEffect(() => {
    getCustomerList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Div>
      <LinkItem to={`/customer/${customerDetail.id}`}>
        Back to customer detail
      </LinkItem>
      <PageWrapper>
        <h1>Edit {customerDetail.name}</h1>
        <InputWrapper>
          <label>Name: </label>
          <Input
            defaultValue={customer === "" ? customerDetail.name : customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Orgnaisation number: </label>
          <Input
            defaultValue={
              organisationNumber === ""
                ? customerDetail.organisationNr
                : organisationNumber
            }
            onChange={(e) => setOrganisationNumber(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Vat Number:</label>
          <Input
            defaultValue={vatNr === "" ? customerDetail.vatNr : vatNr}
            onChange={(e) => setVatNr(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Reference: </label>
          <Input
            defaultValue={
              reference === "" ? customerDetail.reference : reference
            }
            onChange={(e) => setReference(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label> Payment Term: </label>
          <Input
            defaultValue={
              paymentTerm === "" ? customerDetail.paymentTerm : paymentTerm
            }
            onChange={(e) => setPaymentTerm(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Website:</label>
          <Input
            defaultValue={website === "" ? customerDetail.website : website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Email: </label>
          <Input
            defaultValue={email === "" ? customerDetail.email : email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Phone Number: </label>
          <Input
            defaultValue={phone === "" ? customerDetail.phoneNumber : phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputWrapper>
      </PageWrapper>

      <Button2 onClick={changeCustomer}>Submit</Button2>
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 5px;
    margin-bottom: 2px;
  }
`;
const PageWrapper = styled(InputWrapper)`
  width: 20%;
  padding: 50px;
  justify-content: center;
  p {
    margin: 5px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
`;
const Button2 = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 0 50px;
  cursor: pointer;
  box-sizing: border-box;
`;
const LinkItem = styled(Link)`
  background-color: #4caf50;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 15px 50px;
  cursor: pointer;
  box-sizing: border-box;
`;
