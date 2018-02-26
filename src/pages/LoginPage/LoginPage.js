import React, { Component } from "react";
import SmallForm from "../../components/SmallForm";
import Container from "../../components/Container";

class SearchPage extends Component {

  render() {
    return (
      <div>
      <Container fluid>
        <SmallForm/>
      </Container>
      </div>
    );
  }
}

export default SearchPage;
