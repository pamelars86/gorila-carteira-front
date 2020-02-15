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
    const { createMyInvestment, deleteInvestment, myInvestments, isCreated, listMyInvestments, isDeleted} = this.props;

    if (isCreated || isDeleted) {
      listMyInvestments();
    }

    return (
      <Container style={{ marginTop: "20px" }} className="c-gorila-home">
        <InvestmentCreateForm onSubmit={createMyInvestment} />
        <Row>
          <Col>
            <InvestmentList
              investments={myInvestments}
              deleteInvestment={deleteInvestment}
            />
          </Col>
        </Row>
        <InvestmentResume 
          investments={myInvestments}
        />
      </Container>
    );
  }
}

export default Home;