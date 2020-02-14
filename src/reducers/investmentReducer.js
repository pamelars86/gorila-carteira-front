import {
    LIST_MY_INVESTMENTS,
    LIST_MY_INVESTMENTS_SUCCESS,
    LIST_MY_INVESTMENTS_FAILURE,
  
    CREATE_MY_INVESTMENT,
    CREATE_MY_INVESTMENT_SUCCESS,
    CREATE_MY_INVESTMENT_FAILURE,
  
    DELETE_MY_INVESTMENT,
    DELETE_MY_INVESTMENT_SUCCESS,
    DELETE_MY_INVESTMENT_FAILURE,

  } from '../actions/investmentAction';
  import { toast } from 'react-toastify';
  
  const initialState = {
    myInvestments: [],
  };
  
  const optionsSuccess = {
    className: 'alert__ma-toast--success',
    type: 'success',
  };
  
  const optionsError = {
    className: 'alert__ma-toast--error',
    type: 'error',
  };
  
  export const investment = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_MY_INVESTMENT:
        return Object.assign({}, state, {
          isRemoved: null,
          isUpdated: null,
          isCreated: false,
        });
      case CREATE_MY_INVESTMENT_SUCCESS:
        toast.success('Investimento criado com sucesso', optionsSuccess);
        return Object.assign({}, state, {
          isRemoved: null,
          isUpdated: null,
          isCreated: true,
        });
      case CREATE_MY_INVESTMENT_FAILURE:
        toast.error('Ocorreu um erro com sua solicitação', optionsError);
        return Object.assign({}, state, {
          isCreated: false,
          error: action.error,
        });
      case DELETE_MY_INVESTMENT: {
          return Object.assign({}, state, {
            isDeleting: true,
            isDeleted: false,
          });
        }
      case DELETE_MY_INVESTMENT_SUCCESS: {
          toast.success('Investimento removido com sucesso', optionsSuccess);
          return Object.assign({}, state, {
            isDeleted: true,
          });
        }
      case DELETE_MY_INVESTMENT_FAILURE: {
          toast.error('Ocorreu um erro com sua solicitação', optionsError);
          return Object.assign({}, state, {
            error: action.error,
            isDeleted: false,
          });
        }
      case LIST_MY_INVESTMENTS:
        return Object.assign({}, state, {
          myInvestments: action.myInvestments,
          isFetchingMyInvestments: true,
          error: null,
        });
      case LIST_MY_INVESTMENTS_SUCCESS:
        return Object.assign({}, state, {
          myInvestments: action.myInvestments,
          isFetchingMyInvestments: false,
        });
      case LIST_MY_INVESTMENTS_FAILURE:
        return Object.assign({}, state, {
          isFetchingMyInvestments: false,
          error: action.error,
        });
      default:
        return state;
    }
  };
  
  export default investment;
  