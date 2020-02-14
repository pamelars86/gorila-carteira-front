import React, { Component } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from "axios";

import { API_URL } from "../constants";


const InvestmentByType = (props) => {
  
  const {investments} = props;
  const deleteInvestment = id => {
    axios.delete(`${API_URL}${id}/`);;
  };

  return(

  <Table>
  <thead>
    <tr className="text-center">
      <th>Tipo</th>
      <th>Valor</th>
      <th>Data de compra</th>
      <th>Remover</th>
    </tr>
  </thead>
  <tbody>
    {!investments || investments.length <= 0 ? (
      <tr>
        <td colSpan="6" align="center">
          <b>Sua carteira está vazia</b>
        </td>
      </tr>
    ) : (
      investments.map(investment => (
        <tr className="text-center" key={investment.id}>
          <td>{investment.type_investment}</td>
          <td>{investment.amount}</td>
          <td>{investment.purchase_date}</td>
          <td>
            <Button color="danger" onClick={()=>deleteInvestment(investment.id)}>
              <FontAwesomeIcon icon="trash-alt" />
            </Button>
          </td>
        </tr>
      ))
    )}
  </tbody>
</Table>
)
}


class InvestmentList extends Component {

  render() {
    const investments = this.props.investments;
    const fixedInv = investments.filter( inv => inv.type_investment === 'Fixo');
    const fixedVar= investments.filter( inv => inv.type_investment === 'Variável');
    return (
      <Row>
        <Col sm="6">
          <h3 className="investment__title-type">Renda Fixa</h3>
          <InvestmentByType investments={fixedInv} />
        </Col>

        <Col sm="6">
        <h3 className="investment__title-type">Renda Variável</h3>
          <InvestmentByType investments={fixedVar} />
        </Col>
      </Row>
    );
  }
}

export default InvestmentList;