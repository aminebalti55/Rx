import React from 'react';
import Chart from 'react-apexcharts';

// Helper function to determine if a data label should be displayed
const shouldShowLabel = (index) => [3, 4, 5, 15, 16, 17, 9].includes(index); // 0-based index

// First Chart - Taux de comptage, SNR(Kα1), SNR(Lα1) vs Nombre de séries
const ChartTauxSNR = () => {
  const chartData1 = [
    {
      name: 'Taux de comptage',
      data: [1186, 1004, 808, 3452, 2980, 2882, 952.5, 1092.5, 992, 2608, 2662, 2682, 770, 728, 730, 2930, 2758, 2618],
    },
    {
      name: 'SNR(Kα1)',
      data: [63.11, 172.26, 161.09, 1060.88, 383.48, 522.46, 125.45, 101.19, 117.66, 331.14, 155.16, 25.58, 95.02, 78.92, 78.81, 321.87, 358.49, 280.16],
    },
    {
      name: 'SNR(Lα1)',
      data: [11.49, 28.32, 27.77, 188.47, 65.71, 89.86, 21.89, 17.70, 17.85, 56.95, 27.07, 4.14, 12.61, 10.22, 10.13, 54.17, 48.39, 48.19],
    },
  ];

  const chartOptions1 = {
    chart: {
      id: 'chart-taux-snr',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    xaxis: {
      categories: Array.from({ length: 18 }, (_, i) => `Series ${i + 1}`),
      labels: {
        style: { colors: '#6B7280', fontSize: '10px' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tickPlacement: 'between',
    },
    yaxis: {
      labels: {
        style: { colors: '#6B7280', fontSize: '10px' },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        barHeight: '70%',
        borderRadius: 0,
        dataLabels: { position: 'top' },
        barGroupPadding: '5px',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#004f99'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 1,
        stops: [0, 50, 100],
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => shouldShowLabel(opts.dataPointIndex) ? val : '', // Show label based on index
      style: { colors: ['#fff'], fontSize: '10px', fontWeight: 'bold' },
      offsetY: -15,
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45,
      },
    },
    grid: { show: false },
    title: {
      text: "Taux de comptage, SNR(Kα1), SNR(Lα1) vs Nombre de séries",
      align: 'center',
      style: { color: '#333', fontSize: '16px', fontWeight: 'bold' },
    },
  };

  return <Chart options={chartOptions1} series={chartData1} type="bar" width="100%" height="500" />;
};

// Second Chart - LD vs Nombre de séries
const ChartLD = () => {
  const chartData2 = [
    {
      name: 'LD',
      data: [619.73, 561.26, 550.87, 519.17, 565.66, 548.11, 570.37, 599.56, 556.65, 561.79, 609.68, 881.49, 565.4, 574.50, 569.14, 571.50, 575.93, 582.34],
    },
  ];

  const chartOptions2 = {
    chart: {
      id: 'chart-ld',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    xaxis: {
      categories: Array.from({ length: 18 }, (_, i) => `Series ${i + 1}`),
      labels: {
        style: { colors: '#6B7280', fontSize: '10px' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tickPlacement: 'between',
    },
    yaxis: {
      labels: {
        style: { colors: '#6B7280', fontSize: '10px' },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        barHeight: '70%',
        borderRadius: 8,
        dataLabels: { position: 'top' },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#53db97'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => shouldShowLabel(opts.dataPointIndex) ? val : '', // Show label based on index
      style: { colors: ['#fff'], fontSize: '10px', fontWeight: 'bold' },
      offsetY: -15,
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45,
      },
    },
    grid: { show: false },
    title: {
      text: "LD vs Nombre de séries",
      align: 'center',
      style: { color: '#333', fontSize: '16px', fontWeight: 'bold' },
    },
  };

  return <Chart options={chartOptions2} series={chartData2} type="bar" width="100%" height="500" />;
};

// Third Chart - Incertitude standard vs Nombre de séries
const ChartIncertitudeStandard = () => {
  const chartData3 = [
    {
      name: 'Incertitude standard',
      data: [0.82, 0.83, 0.00, 0.13, 0.16, 0.14, 0.71, 0.85, 0.91, 0.29, 0.73, 0.68, 0.57, 0.56, 0.57, 0.15, 0.19, 0.57],
    },
  ];

  const chartOptions3 = {
    chart: {
      id: 'chart-incertitude-standard',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    xaxis: {
      categories: Array.from({ length: 18 }, (_, i) => `Series ${i + 1}`),
      labels: {
        style: { colors: '#6B7280', fontSize: '10px' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tickPlacement: 'between',
    },
    yaxis: {
      labels: {
        style: { colors: '#6B7280', fontSize: '10px' },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        barHeight: '70%',
        borderRadius: 6,
        dataLabels: { position: 'top' },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#ff00ff', '#FF416C'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => shouldShowLabel(opts.dataPointIndex) ? val : '', // Show label based on index
      style: { colors: ['#fff'], fontSize: '10px', fontWeight: 'bold' },
      offsetY: -15,
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45,
      },
    },
    grid: { show: false },
    title: {
      text: "Incertitude standard vs Nombre de séries",
      align: 'center',
      style: { color: '#333', fontSize: '16px', fontWeight: 'bold' },
    },
  };

  return <Chart options={chartOptions3} series={chartData3} type="bar" width="100%" height="500" />;
};

// Exporting all charts together
export { ChartTauxSNR, ChartLD, ChartIncertitudeStandard };
