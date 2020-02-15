import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  listMyInvestments, createMyInvestment, deleteInvestment,
} from '../actions/investmentAction';
import { SubmissionError } from 'redux-form';

// state.<reducer's name>.<property>

const mapStateToProps = state => ({
  isFetching: state.investment.isFetchingMyInvestments,
  myInvestments: state.investment.myInvestments,
  error: state.investment.error,
  isDeleted: state.investment.isDeleted,
  isCreated: state.investment.isCreated,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    listMyInvestments: () => dispatch(listMyInvestments()),

    createMyInvestment: (values) => {
      const errors = [];
      if (!values.amount) {
        errors.amount = 'Campo obrigatório';
      }
      if (!values.purchase_date) {
        errors.purchase_date = 'Campo obrigatório';
      }
    
      if (values.type_investment === 'NaN' || values.type_investment === '') {
        errors.type_investment = 'Selecione um tipo';
      }
      if (Object.keys(errors).length !== 0) throw new SubmissionError(errors);
      dispatch(createMyInvestment(values))
    },
    deleteInvestment: (idInvestment) => dispatch(deleteInvestment(idInvestment)),
} )
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
  
export default HomeContainer;