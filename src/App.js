import React from 'react';
import BarChart from './BarChart';
import { ChartTauxSNR, ChartLD, ChartIncertitudeStandard } from './NewBarChart1'; // Uncommented this line

function App() {
  const chartContainerClasses = "w-full md:w-3/4 bg-white p-8 rounded-lg shadow-lg mb-8";
  const chartDataTauxSNR = [
    {
      name: 'Taux de comptage',
      data: [1124, 2908, 2846],
    },
    {
      name: 'SNR(Kα1)',
      data: [9.11, 123.00, 28.01],
    },
    {
      name: 'SNR(Lα1)',
      data: [47.83, 666.20, 148.07],
    },
  ];

  const chartOptionsTauxSNR = {
    chart: {
      id: 'chartTauxSNR',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    xaxis: {
      categories: ['30s', '60s', '90s'],
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 8,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#7303c0', '#1fa2ff', '#ff9472'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: true,
      style: { colors: ['#fff'], fontSize: '8px' },
    },
    grid: { show: false },
    title: {
      text: "Taux de comptage, SNR(Kα1), SNR(Lα1) vs Temps d'acquisition",
      align: 'center',
      style: { color: '#333', fontSize: '18px', fontWeight: 'bold' },
    },
  };

  // Data and options for the LD chart
  const chartDataLD = [
    {
      name: 'LD',
      data: [2574.13, 516.87, 613.50],
    },
  ];

  const chartOptionsLD = {
    chart: {
      id: 'chartLD',
      toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 800 },
    },
    xaxis: {
      categories: ['30s', '60s', '90s'],
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 8,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#2bd2ff'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: true,
      style: { colors: ['#fff'], fontSize: '8px' },
    },
    grid: { show: false },
    title: {
      text: "LD vs Temps d'acquisition",
      align: 'center',
      style: { color: '#333', fontSize: '18px', fontWeight: 'bold' },
    },
  };

  // Data and options for the Incertitude standard chart
  const chartDataIncertitudeStandard = [
    {
      name: 'Incertitude standard',
      data: [1.658, 1.006, 1.060],
    },
  ];

  const chartOptionsIncertitudeStandard = {
    chart: {
      id: 'chartIncertitudeStandard',
      toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 800 },
    },
    xaxis: {
      categories: ['30s', '60s', '90s'],
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 8,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#fab2ff'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: true,
      style: { colors: ['#fff'], fontSize: '8px' },
    },
    grid: { show: false },
    title: {
      text: "Incertitude standard vs Temps d'acquisition",
      align: 'center',
      style: { color: '#333', fontSize: '18px', fontWeight: 'bold' },
    },
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className={chartContainerClasses}>
        <BarChart
          chartData={chartDataTauxSNR}
          chartOptions={chartOptionsTauxSNR}
        />
      </div>
      <div className={chartContainerClasses}>
        <BarChart
          chartData={chartDataLD}
          chartOptions={chartOptionsLD}
        />
      </div>
      <div className={chartContainerClasses}>
        <BarChart
          chartData={chartDataIncertitudeStandard}
          chartOptions={chartOptionsIncertitudeStandard}
        />
      </div>
      {/* Adding the new charts below the existing ones */}
      <div className={chartContainerClasses}>
        <ChartTauxSNR />
      </div>
      <div className={chartContainerClasses}>
        <ChartLD />
      </div>
      <div className={chartContainerClasses}>
        <ChartIncertitudeStandard />
      </div>
    </div>
  );
}

export default App;