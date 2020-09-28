import React, { useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState("");
  const [isHidden, setIsHidden] = useState("none");

  const userKit = new UserKit();

  function handleCreateUser() {
    setErrorMessage("");
    if (validateVatNr(vatNr)) {
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
          setCustomer("");
          setOrganisationNumber("");
          setVatNr("");
          setPaymentTerm("");
          setReference("");
          setWebsite("");
          setEmail("");
          setPhone("");
        });
      setIsHidden("none");
    } else {
      setErrorMessage("Not a valid vat number");
    }
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

  function validateVatNr(vatNr) {
    console.log(vatNr);
    let reg = /\d{10}/g;
    if (vatNr.includes("SE", 0) && vatNr.match(reg) && vatNr.length === 12) {
      // console.log("match");
      return true;
    } else {
      // console.log("no match");
      return false;
    }
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
        {renderInput("Vat Number", "SE0000000000", vatNr, setVatNr)}
        <WarningP>{errorMessage}</WarningP>
        {renderInput("Reference", "Reference", reference, setReference)}
        {renderInput("Payment Term", "ex. 30", paymentTerm, setPaymentTerm)}
        {renderInput("Website", "company.com", website, setWebsite)}
        {renderInput("Email", "info@company.com", email, setEmail)}
        {renderInput("Phone Number", "010-0000000", phone, setPhone)}

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
  border-radius: 6px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  width: 50%;
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
const WarningP = styled.p`
  color: red;
`;
