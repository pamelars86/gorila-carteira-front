import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import InvestmentList from "./InvestmentList";

import axios from "axios";

import { API_URL } from "../constants";
import InvestmentCreateForm from "./InvestmentCreateForm";

class Home extends Component {
  state = {
    investments: []
  };

  componentDidMount() {
    this.resetState();
  }

  getInvestments = () => {
    axios.get(API_URL).then(res => this.setState({ investments: res.data }));
  };

  resetState = () => {
    this.getInvestments();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <InvestmentCreateForm />
        <Row>
          <Col>
            <InvestmentList
              investments={this.state.investments}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;