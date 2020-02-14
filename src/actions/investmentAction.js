import {
    investmentService,
  } from '../services';
  import {reset} from 'redux-form';

  
  export const LIST_MY_INVESTMENTS = 'LIST_MY_INVESTMENTS';
  export const LIST_MY_INVESTMENTS_SUCCESS = 'LIST_MY_INVESTMENTS_SUCCESS';
  export const LIST_MY_INVESTMENTS_FAILURE = 'LIST_MY_INVESTMENTS_FAILURE';
  
  export const CREATE_MY_INVESTMENT = 'CREATE_MY_INVESTMENT';
  export const CREATE_MY_INVESTMENT_SUCCESS = 'CREATE_MY_INVESTMENT_SUCCESS';
  export const CREATE_MY_INVESTMENT_FAILURE = 'CCREATE_MY_INVESTMENT_FAILURE';
  
  export const DELETE_MY_INVESTMENT = 'DELETE_MY_INVESTMENT';
  export const DELETE_MY_INVESTMENT_SUCCESS = 'DELETE_MY_INVESTMENT_SUCCESS';
  export const DELETE_MY_INVESTMENT_FAILURE = 'DELETE_MY_INVESTMENT_FAILURE';
  
  // List all class plans
  export const listMyInvestments = () => {
    function requestMyInvestments() {
      return {
        type: LIST_MY_INVESTMENTS,
      };
    }
  
    function fetchListMyInvestmentsSuccess(myInvestments) {
      return {
        type: LIST_MY_INVESTMENTS_SUCCESS,
        myInvestments,
      };
    }
  
    function fetchListMyInvestmentsFailure(error) {
      return {
        type: LIST_MY_INVESTMENTS_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(requestMyInvestments());
      return investmentService.listMyInvestments()
        .then(
          (myInvestments) => {
            dispatch(fetchListMyInvestmentsSuccess(myInvestments));
          },
          (error) => {
            dispatch(fetchListMyInvestmentsFailure(error));
          },
        );
    };
  };
  
  // Create a new investment
  export const createMyInvestment = (props) => {
    function createNewInvestment() {
      return {
        type: CREATE_MY_INVESTMENT,
      };
    }
  
    function createInvestmentSuccess(newInvestment) {
      return {
        type: CREATE_MY_INVESTMENT_SUCCESS,
        newInvestment,
      };
    }
  
    function createInvestmentFailure(error) {
      return {
        type: CREATE_MY_INVESTMENT_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(createNewInvestment(props));
      return investmentService.createMyInvestment(props).then(
        (newInvestment) => {
          dispatch(createInvestmentSuccess(newInvestment));
          dispatch(reset('create_investment'));
        },
        (error) => {
          dispatch(createInvestmentFailure(error));
        },
      );
    };
  };
  
  
  // delete a investment
  export const deleteInvestment= (idInvestment) => {
    function deleteSelectedInvestment() {
      return {
        type: DELETE_MY_INVESTMENT,
      };
    }
  
    function deleteInvestmentSuccess(idInvestment) {
      return {
        type: DELETE_MY_INVESTMENT_SUCCESS,
        idInvestment,
      };
    }
  
    function deleteInvestmentFailure(error) {
      return {
        type: DELETE_MY_INVESTMENT_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(deleteSelectedInvestment(idInvestment));
      return investmentService.deleteMyInvestment(idInvestment)
        .then(
          (idInvestment) => {
            dispatch(deleteInvestmentSuccess(idInvestment));
          },
          (error) => {
            dispatch(deleteInvestmentFailure(error));
          },
        );
    };
  };