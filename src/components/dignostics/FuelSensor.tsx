// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';

// interface FuelSensorProps {
//   fuelLevel: number;
// }

// const FuelSensor: React.FC<FuelSensorProps> = ({ fuelLevel }) => {
//   const chartData = {
//     labels: ['Fuel Level', 'Empty'],
//     datasets: [
//       {
//         data: [fuelLevel, 100 - fuelLevel],
//         backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 255, 255, 1)'],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Fuel Sensor</h2>
//       <Doughnut data={chartData} />
//     </div>
//   );
// };

// export default FuelSensor;

// import { HorizontalBar } from 'react-chartjs-2';

// const data = {
//   labels: ['Category 1', 'Category 2', 'Category 3'],
//   datasets: [
//     {
//       label: 'Fuel Level',
//       data: [30, 50, 70], // Примерные значения уровня топлива
//       backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
//       borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   scales: {
//     x: {
//       beginAtZero: true,
//     },
//   },
// };

// const FuelSensor: React.FC = () => {
//   return <HorizontalBar data={data} options={options} />;
// }
// export default FuelSensor;

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   indexAxis: 'y' as const,
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Horizontal Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// const FuelSensor: React.FC = () => {
//   return <Bar options={options} data={data} />;
// }
// export default FuelSensor;

import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import { faker } from '@faker-js/faker';
import EvStationRoundedIcon from '@mui/icons-material/EvStationRounded';

const FuelSensor: React.FC = () => {
  const [fuelLevel, setFuelLevel] = useState<number>(faker.datatype.number({ min: 1, max: 100 }));

  useEffect(() => {
    const intervalId = setInterval(() => {setFuelLevel((prevFuelLevel) => {
      // Уменьшаем уровень топлива на 1
      const newFuelLevel = prevFuelLevel - 1;

      // Если уровень топлива достиг 0, генерируем новое случайное значение
      if (newFuelLevel === 0) {
        return faker.datatype.number({ min: 1, max: 100 });
      }

      return newFuelLevel;
    });
  }, 5000); // Обновление каждые 10 секунд

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
    >
      <div>
        <EvStationRoundedIcon sx={{ fontSize: 100}} />
        <CircularProgress
          variant="determinate"
          value={fuelLevel}
          size={100}
          thickness={5}
        />
      </div>
      <Typography variant="h4" mt={2}>
        Уровень топлива: <span style={{color: "red", fontSize: "50px"}}>{fuelLevel}%</span> 
      </Typography>
    </Box>
  );
};

export default FuelSensor;
