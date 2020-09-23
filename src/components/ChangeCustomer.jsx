import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";

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
  const id = props.match.params.id;

  function changeCustomer() {}

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data.results);
      });
  }
  useEffect(() => {
    getCustomerList();
  }, []);
  return (
    <div>
      {customerDetail &&
        customerDetail
          .filter((customer) => customer.id === parseInt(id))
          .map((customer) => {
            return (
              <PageWrapper key={customer.id}>
                <h2>{customer.name}</h2>
                <p>{customer.organisationNr}</p>
                <p>{customer.vatNr}</p>
                <p>{customer.reference}</p>
                <p>{customer.paymentTerm}</p>
                <p>{customer.website}</p>
                <p>{customer.email}</p>
                <p>{customer.phoneNumber}</p>

                {/* <InputWrapper>
                  <label>Orgnaisation number: </label>
                  <Input
                    value={customer.organisationNr && customer.organisationNr}
                    onChange={(e) => setOrganisationNumber(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label>Vat Number:</label>
                  <Input
                    value={customer.vatNr && customer.vatNr}
                    onChange={(e) => setVatNr(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label>Reference: </label>
                  <Input
                    value={customer.reference && customer.reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label> Payment Term: </label>
                  <Input
                    value={customer.paymentTerm && customer.paymentTerm}
                    onChange={(e) => setPaymentTerm(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label>Website:</label>
                  <Input
                    value={customer.website && customer.website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label>Email: </label>
                  <Input
                    value={customer.email && customer.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label>Phone Number: </label>
                  <Input
                    value={customer.phoneNumber && customer.phoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputWrapper> */}
              </PageWrapper>
            );
          })}
      <Button onClick={changeCustomer}>Edit Customer details </Button>
    </div>
  );
}
const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 5px;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 5px;
    margin-bottom: 2px;
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
const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 15px 5px;
  cursor: pointer;
  box-sizing: border-box;
`;
