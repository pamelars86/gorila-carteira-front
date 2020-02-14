import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import InvestmentList from "./InvestmentList";

import axios from "axios";

import { API_URL } from "../constants";
import InvestmentCreateFormR from "./InvestmentCreateFormR";

class Home extends Component {
 /* state = {
    investments: []
  };*/

  componentDidMount() {
    const { listMyInvestments } = this.props;
    listMyInvestments();
  }

  /*getInvestments = () => {
    axios.get(API_URL).then(res => this.setState({ investments: res.data }));
  };

  resetState = () => {
    this.getInvestments();
  };*/

  render() {
    const { createMyInvestment, deleteInvestment, myInvestments} = this.props;

    return (
      <Container style={{ marginTop: "20px" }}>
        <InvestmentCreateFormR />
        <Row>
          <Col>
            <InvestmentList
              investments={myInvestments}
              deleteInvestment={deleteInvestment}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;