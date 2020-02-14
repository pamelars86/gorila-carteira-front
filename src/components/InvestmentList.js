import React, { Component } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InvestmentByType = (props) => {
  
  const { deleteInvestment, investments } = props;
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
    const { deleteInvestment, investments } = this.props

    const fixedInv = investments && investments.filter( inv => inv.type_investment === 'Fixo');
    const fixedVar= investments && investments.filter( inv => inv.type_investment === 'Variável');
    return (
      <Row>
        <Col sm="6">
          <h3 className="investment__title-type">Renda Fixa</h3>
          <InvestmentByType investments={fixedInv} deleteInvestment={deleteInvestment }/>
        </Col>

        <Col sm="6">
        <h3 className="investment__title-type">Renda Variável</h3>
          <InvestmentByType investments={fixedVar} deleteInvestment={deleteInvestment }/>
        </Col>
      </Row>
    );
  }
}

export default InvestmentList;