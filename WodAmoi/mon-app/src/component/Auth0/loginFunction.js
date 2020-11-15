import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import { Nav } from "react-bootstrap";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>
    </>
  );
};

export default AuthNav;
