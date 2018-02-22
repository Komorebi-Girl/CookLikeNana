import React, { Component } from "react";
import Search from "../../components/Search";
import Container from "../../components/Container";

class SearchPage extends Component {

  render() {
    return (
      <Container fluid>
        <Search/>
      </Container>
    );
  }
}

export default SearchPage;
