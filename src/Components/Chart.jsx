import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const ChartGraph = () => {
  const data = {
    labels: [ 'BNBLP Pool (30%)', 'Burned (30%)', 'Partnership/CEX Wallet(5%)', 'LP Pool(35%)'],
    datasets: [
      {
        data: [30, 30, 5,35], 
        backgroundColor: [
          '#BE2C2C',
          '#FF8F34',
          '#9934FF',
          '#028DFD'
        ],
        hoverBackgroundColor: [
          '#c51919',
          '#fc801a',
          '#871cf3',
          '#0171cc'
        ],
        borderWidth: 10,
        borderColor:'#1B160B',
        borderRadius:15,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false // Hide legend to customize with arrows and labels
      },
      tooltip: {
        enabled: false // Hide tooltips to customize with arrows and labels
      }
    },
    cutout: '65%' // Adjust for donut hole size
  };

  return (
    <div style={{ position: 'relative', width: '30%', margin:"0" }}>
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}>
        {data.labels.map((label, index) => (
          <div key={index} style={{
            position: 'absolute',
            color:"#ffffff",
            transform: `rotate(${(index * 90) - 45}deg) translate(8rem)`,
            transformOrigin: '0 0',
          }}>
            <div style={{ transform: `rotate(-${(index * 90) - 45}deg)`, whiteSpace: 'nowrap' }}>
              {label} <span style={{ display: 'inline-block', transform: 'rotate(45deg)' }}>---➤</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartGraph;
