import React from "react";
import { Input, Button, Col, Row, Form } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { requiredValidator } from '../helpers/validators';


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div>
      <Input
        {...input}
        placeholder={label}
        type={type}
        autoFocus
      />
      { touched
        && ((error && (
        <span className="error-message-text">
          {error}
        </span>
        ))
        || (warning && (
        <span>
          {' '}
          {warning}
          {' '}
        </span>
        )))
      }
    </div>
  );

  const renderSelectField = ({
    input, label, meta: { touched, error }, children, optionDefault,
  }) => (
    <div>
      <div>
        <select {...input} className="form-control">
          <option value={optionDefault}>
            {label}
          </option>
          {children}
        </select>
        {touched && error && (
          <span className="error-message-text">
            {error}
          </span>
        )}
      </div>
    </div>
  );

class InvestmentCreateFormR extends React.Component {

  render() {
    const {
        handleSubmit
      } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
            <Col sm="2">Tipo de Renda</Col>
            <Col sm="4">Valor do Investimento</Col>
            <Col sm="4">Data</Col>
        </Row>
        <Row className="mb-5">
            <Col sm="2">
                <Field 
                    type="select" 
                    name="type_investment"
                    id="type_investment" 
                    component={renderSelectField}
                    label="Selecione um tipo"
                    validate={requiredValidator}
                >
                    <option value="Fixo">Fixa</option>
                    <option value="Variável">Variável</option>
                </Field>

            </Col>
            <Col sm="4">
                <Field
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Insira um valor de renda"
                  component={renderField}
                  validate={requiredValidator}
                />
            </Col>
            <Col sm="4">
                <Field
                    name="purchase_date"
                    id="purchase_date"
                    type="date"
                    showTime={false}
                    component={renderField}
                    validate={requiredValidator}
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


const mapStateToProps = () => {
    return ({
      initialValues:  {
        type_investment: "",
        purchase_date: "",
        amount: 0
      },
    });
  };
  
export default connect(
    mapStateToProps,
  )(reduxForm({
    form: 'create_investment',
  })(InvestmentCreateFormR));