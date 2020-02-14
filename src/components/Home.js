import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import InvestmentList from "./InvestmentList";
import InvestmentResume from "./InvestmentResume"
import InvestmentCreateForm from "./InvestmentCreateForm";

class Home extends Component {

  componentDidMount() {
    const { listMyInvestments } = this.props;
    listMyInvestments();
  }

  render() {
    const { createMyInvestment, deleteInvestment, myInvestments, isCreated, listMyInvestments} = this.props;

    if (isCreated) {
      listMyInvestments();
    }

    return (
      <Container style={{ marginTop: "20px" }}>
        <InvestmentCreateForm onSubmit={createMyInvestment} />
        <Row>
          <Col>
            <InvestmentList
              investments={myInvestments}
              deleteInvestment={deleteInvestment}
            />
          </Col>
        </Row>
        <InvestmentResume />
      </Container>
    );
  }
}

export default Home;