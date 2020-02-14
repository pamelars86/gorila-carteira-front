import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
    labels: ['%Renta Fixa', '%Renta Variável'],
    datasets: [
      {
        label: 'Investimentos de acordo ao tipo',
        backgroundColor: [
          '#5dbe95',
          '#C9DE00',
        ],
        hoverBackgroundColor: [
        '#3ac1c3',
        '#4B5000',
        ],
        data: [65, 59]
      }
    ]
  }

class InvestmentResume extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <Pie
            data={state}
            options={{
            title:{
                display:true,
                text:'Resumo da Carteira',
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
            }}
        />
      </div>
    );
  }
}

export default InvestmentResume;