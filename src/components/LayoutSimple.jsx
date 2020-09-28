import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserConstext from "../contexts/UserContext";
import UserKit from "../data/UserKit";
import UserOnline from "./UserOnline";
import buildings from "../images/buildings.jpg";

export default function LayoutSimple({ children }) {
  const { user, setUser } = useContext(UserConstext);
  const userKit = new UserKit();
  const history = useHistory();

  function getUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        data.detail ? setUser(null) : setUser(data);
      });
  }
  function logout() {
    localStorage.clear();
    history.push("/login");
    setUser(null);
  }

  useEffect(() => {
    setUser(getUser());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Div>
      <Nav>
        <ul>
          <li>
            {user === null || user === undefined ? (
              <LinkItem to="/login">Login</LinkItem>
            ) : (
              <LinkItem to="/home">Home</LinkItem>
            )}
          </li>
          <li>
            {user === null || user === undefined ? (
              <LinkItem to="/register">Register</LinkItem>
            ) : (
              <PLink onClick={logout}>Logout</PLink>
            )}
          </li>
        </ul>
      </Nav>
      <UserOnline />
      <Main>{children}</Main>
      <Footer>
        <FooterTextWrapper>
          <H3>Made by Hannah</H3>
        </FooterTextWrapper>
      </Footer>
    </Div>
  );
}
const Div = styled.div`
  background-image: url(${buildings});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #cccccc;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #122c4b;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    z-index: 0;
  }
  & > * {
    z-index: 10;
    position: relative;
  }
`;

const Nav = styled.nav`
  background-color: #122c4b;
  padding: 20px;
  text-align: right;
  z-index: 10;
  position relative;
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }
`;
const LinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding-right: 10px;
`;
const Main = styled.main`
  margin: 50px;
  margin-top: 500px;
  min-height: 700px;
`;
const Footer = styled.footer`
  background-color: #122c4b;
  border-top: 1px solid #d7dbdd;
  box-shadow: 2px 2px 1px rgba(229, 231, 233, 0.75);
  padding: 80px 0;
`;
const FooterTextWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  color: grey;
`;
const H3 = styled.h3`
  margin-bottom: 10px;
  color: #fff;
`;
const PLink = styled.p`
  color: #fff;
  cursor: pointer;
`;
