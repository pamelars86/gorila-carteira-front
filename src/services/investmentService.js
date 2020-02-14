import { apiUrl } from "../constants";
import axios from 'axios';
// import { authHeader } from 'helpers';


function listMyInvestments() {
  return axios.get(`${apiUrl}/`)
    .then(response => response.data).then(myInvestments => myInvestments);
}

/* Create a new investment */
function createMyInvestment(newInvestmentData) {
  return axios.post(`${apiUrl}/investments/`, newInvestmentData)
    .then(response => response.data).then(newInvestment => newInvestment);
}

// Delete an investment given its ID
function deleteMyInvestment(idInvestment) {
  return axios.delete(`${apiUrl}/investments/${idInvestment}/`)
    .then(response => response.data).then(() => idInvestment);
}

const investmentService = {
  listMyInvestments,
  createMyInvestment,
  deleteMyInvestment,
};

export default investmentService;
