import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";

export default function NewCustomer({ getCustomerList }) {
  const [customer, setCustomer] = useState("");
  const [organisationNumber, setOrganisationNumber] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [reference, setReference] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isHidden, setIsHidden] = useState("none");

  const userKit = new UserKit();

  function handleCreateUser() {
    const payload = {
      name: customer,
      organisationNr: organisationNumber,
      vatNr: vatNr,
      reference: reference,
      paymentTerm: paymentTerm,
      website: website,
      email: email,
      phoneNumber: phone,
    };
    userKit
      .createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        getCustomerList();
      });
  }
  function renderInput(label, placeholder, stateVariable, stateSetVariable) {
    return (
      <InputWrapper>
        <label>{label}:</label>
        <Input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
        />
      </InputWrapper>
    );
  }

  function showAddNewCustomerForm() {
    return isHidden === "none" ? setIsHidden("block") : setIsHidden("none");
  }

  return (
    <div>
      <ClickableTextWrapper onClick={showAddNewCustomerForm}>
        <h2>Add New customer</h2>
        <p>Click here</p>
      </ClickableTextWrapper>
      <PageWrapper display={`${isHidden}`}>
        {renderInput("Customer name", "Name", customer, setCustomer)}
        {renderInput(
          "Organisation number",
          "Orgnr",
          organisationNumber,
          setOrganisationNumber
        )}
        {renderInput("Vat Number", "Vat nr", vatNr, setVatNr)}
        {renderInput("Reference", "Reference", reference, setReference)}
        {renderInput(
          "Payment Term",
          "Payment Term",
          paymentTerm,
          setPaymentTerm
        )}
        {renderInput("Website", "Website", website, setWebsite)}
        {renderInput("Email", "Email", email, setEmail)}
        {renderInput("Phone Number", "Phone Number", phone, setPhone)}

        <Button onClick={handleCreateUser}>Add customer</Button>
      </PageWrapper>
    </div>
  );
}

const PageWrapper = styled.div`
  display: ${(props) => props.display || "block"};
`;
const ClickableTextWrapper = styled.div`
  cursor: pointer;
  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 5px;
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
