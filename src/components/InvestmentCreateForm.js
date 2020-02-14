import React from "react";
import { Input, Button, Col, Row, Form } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from "axios";

import { API_URL } from "../constants";

class InvestmentCreateForm extends React.Component {
  state = {
    type_investment: "",
    purchase_date: "",
    amount: 0
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createInvestment = e => {
    e.preventDefault();
    console.log("datos...");
    console.log(this.state);
    axios.post(API_URL, this.state).then(() => {
      this.setState({
        type_investment: "",
        purchase_date: "",
        amount: 0
      });
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.createInvestment}>
        <Row>
            <Col sm="2">Tipo de Renda</Col>
            <Col sm="4">Valor do Investimento</Col>
            <Col sm="4">Data</Col>
        </Row>
        <Row className="mb-5">
            <Col sm="2">
                <Input 
                    type="select" 
                    name="type_investment"
                    id="type_investment" 
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.type_investment)}
                >
                <option value="Fixo">Fixa</option>
                <option value="Variável">Variável</option>
                </Input>

            </Col>
            <Col sm="4">
                <Input
                type="number"
                name="amount"
                id="amount"
                placeholder="Insira um valor de renda"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.amount)}
                />
            </Col>
            <Col sm="4">
                <Input
                type="date"
                name="purchase_date"
                id="purchase_date"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.purchase_date)}
                />
            </Col>
            <Col sm="2" className="text-center">
                <Button><FontAwesomeIcon icon="plus" /> Adicionar</Button>
            </Col>
        </Row>
      </Form>
    );
  }
}

export default InvestmentCreateForm;