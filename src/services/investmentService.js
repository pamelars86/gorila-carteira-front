import { apiUrl } from "../constants";
import axios from 'axios';
// import { authHeader } from 'helpers';


function listMyInvestments() {

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      /*Authorization: authHeader(),*/
    },
  };

  const url = '/investments/';


  return axios.get(`${apiUrl}${url}`, requestOptions)
    .then(response => response.data).then(myInvestments => myInvestments);
}

/* Create a new investment */
function createMyInvestment(newInvestmentData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: authHeader(),
    },
  };

  const url = '/investments/';

  return axios.post(`${apiUrl}${url}`, newInvestmentData, requestOptions)
    .then(response => response.data).then(newInvestment => newInvestment);
}

// Delete an investment given its ID
function deleteMyInvestment(idInvestment) {
  const requestOptions = {
    method: 'DELETE',
    /*headers: {
      Authorization: authHeader(),
    },*/
  };

  return axios.delete(`${apiUrl}/investments/${idInvestment}/`, requestOptions)
    .then(response => response.data).then(() => idInvestment);
}

const investmentService = {
  listMyInvestments,
  createMyInvestment,
  deleteMyInvestment,
};

export default investmentService;
