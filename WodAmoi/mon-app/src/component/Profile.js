import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <Container className="profile mb-5">
      <Row className="align-items-center mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="text-muted">{user.email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
