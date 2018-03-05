import React from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Please log in to view this page</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default LoginReminder;
