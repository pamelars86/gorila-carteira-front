import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  listMyInvestments, createMyInvestment, deleteInvestment,
} from '../actions/investmentAction';

// state.<reducer's name>.<property>

const mapStateToProps = state => ({
  isFetching: state.investment.isFetchingMyInvestments,
  myInvestments: state.investment.myInvestments,
  error: state.investment.error,
  isDeleted: state.investment.isDeleted,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    listMyInvestments: () => dispatch(listMyInvestments()),
    createMyInvestment: (values) => dispatch(createMyInvestment(values)),
    deleteInvestment: (idInvestment) => dispatch(deleteInvestment(idInvestment))
 
} )
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
  
export default HomeContainer;