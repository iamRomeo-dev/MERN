import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const { logout, user } = useAuth0();
  return (
    <Button
      onClick={() => logout()}
      id="qsLogoutBtn"
      variant="none"
      className="btn-margin"
    >
       <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid mb-3 mb-md-0"
          />
    </Button>
  );
};

export default LogoutButton;
