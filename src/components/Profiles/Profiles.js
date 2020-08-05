import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
// import axios from 'axios'
import { useEffect } from 'react'

const Profile = () => {
  const { user } = useAuth0();
  console.log("userAuth0", user)
  const { name, picture, email } = user

  // //useEffect, takes user info to back end. 



  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </Col>
      </Row>
      <Row>
        {/* <div>{JSON.stringify(user)}</div> */}
        <div><b>{JSON.stringify(user.name)}</b></div>
        {/* <div><b>{JSON.stringify(user.family_name)}</b></div> */}
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(Profile);