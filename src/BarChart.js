import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ chartData, chartOptions }) => {
  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width="100%"
        height="400"
      />
    </div>
  );
};

export default BarChart;
