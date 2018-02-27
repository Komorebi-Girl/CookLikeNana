import React, { Component } from "react";
import ApptCard from "../../components/ApptCard";
import Container from "../../components/Container";

class SchedulePage extends Component {

  render() {
    return (
      <Container fluid>
        <ApptCard/>
      </Container>
    );
  }
}

export default SchedulePage;
