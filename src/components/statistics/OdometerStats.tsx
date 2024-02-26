// import React from 'react';
// import { Typography, Grid } from '@mui/material';

// interface OdometerStatsProps {
//   totalDistance: number;
//   averageSpeed: number;
//   maxSpeed: number;
// }

// const OdometerStats: React.FC<OdometerStatsProps> = ({ totalDistance, averageSpeed, maxSpeed }) => {
//   return (
//     <div>
//       <Typography variant="h6">Odometer Stats</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <Typography>Total Distance: {totalDistance} km</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Average Speed: {averageSpeed} km/h</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Max Speed: {maxSpeed} km/h</Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default OdometerStats;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OdometerStats: React.FC = () => {
  const [odometerData, setOdometerData] = useState<number[]>([
    60, 80, 90, 70, 50, 40, 30, 20,
  ]); // пример начальных данных
  const [maxSpeed, setMaxSpeed] = useState<number>(0);
  const [averageSpeed, setAverageSpeed] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [currentDateTime, setCurrentDateTime] = useState<string>(new Date().toLocaleString());

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSpeed = faker.datatype.number({ min: 10, max: 50 });
      const newOdometerData = [...odometerData, newSpeed];

      const newMaxSpeed = Math.max(...newOdometerData);
      const newAverageSpeed = newOdometerData.reduce((acc, val) => acc + val, 0) / newOdometerData.length;

      setOdometerData(newOdometerData);
      setMaxSpeed(newMaxSpeed);
      setAverageSpeed(newAverageSpeed);
      setCurrentDateTime(new Date().toLocaleString());
    }, 2000); // Обновление каждые 2 секунды

    return () => clearInterval(intervalId);
  }, [odometerData]);

  const data = {
    labels: odometerData.map((_, i) => new Date().toISOString()), // Используем текущую дату и время в качестве меток
    datasets: [
      {
        label: 'Скорость',
        data: odometerData,
        fill: false,
        borderColor: '#5BE12C',
      },
      {
        label: 'Максимальная скорость',
        data: Array(odometerData.length).fill(maxSpeed),
        fill: false,
        borderColor: '#EA4228',
      },
      {
        label: 'Средняя скорость',
        data: Array(odometerData.length).fill(averageSpeed),
        fill: false,
        borderColor: '#3498db',
      },
    ],
  };

  const options: object = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: odometerData.length,
        ticks: {
          callback: (value, index, values) => {
            // Отображение только последних 5 меток для лучшей читаемости
            if (index === values.length - 1 || index === values.length - 2 || index === values.length - 3 || index === values.length - 4 || index === values.length - 5) {
              return new Date(value).toLocaleTimeString();
            } else {
              return '';
            }
          },
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 50, // Максимальная скорость (может быть изменено)
      },
    },
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100px">
    {/* <Typography variant="h6" mb={2}>
      Статистика пробега
    </Typography> */}
    {/* <Line data={data} options={options} /> */}
    <Typography variant="h5" mt={2}>
      Пробег: {odometerData.reduce((acc, speed) => acc + speed, 0).toFixed(2)} км
    </Typography>
    <Typography variant="h5">
      Максимальная скорость: {maxSpeed.toFixed(2)} км/ч
    </Typography>
    <Typography variant="h5">
      Средняя скорость: {averageSpeed.toFixed(2)} км/ч
    </Typography>
    <Typography variant="h5">
      Время: {timeElapsed} сек
    </Typography>
  </Box>
  );
};

export default OdometerStats;

// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Box, Typography } from '@mui/material';
// import { faker } from '@faker-js/faker';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const RealTimeChart: React.FC = () => {
//   const [chartData, setChartData] = useState<{ x: string; y: number }[]>([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newPoint = {
//         x: new Date().toLocaleTimeString(),
//         y: faker.datatype.number({ min: 10, max: 50 }),
//       };

//       setChartData((prevData) => [...prevData, newPoint].slice(-10)); // Ограничим до последних 10 точек для сохранения читаемости

//     }, 2000); // Обновление каждые 2 секунды

//     return () => clearInterval(intervalId);
//   }, []);

//   const data = {
//     datasets: [
//       {
//         label: 'Текущая скорость',
//         data: chartData.map((point) => ({ x: point.x, y: point.y })),
//         fill: false,
//         borderColor: '#5BE12C',
//       },
//       {
//         label: 'Средняя скорость',
//         data: chartData.map(() => ({ x: '', y: 30 })), // Просто для примера, средняя скорость может быть рассчитана по-другому
//         fill: false,
//         borderColor: '#EA4228',
//       },
//     ],
//   };

//   const options: object = {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//         ticks: {
//           callback: (value, index, values) => {
//             // Отображение только последних 5 меток для лучшей читаемости
//             if (index === values.length - 1 || index === values.length - 2 || index === values.length - 3 || index === values.length - 4 || index === values.length - 5) {
//               return new Date(value).toLocaleTimeString();
//             } else {
//               return '';
//             }
//           },
//         },
//       },
//       y: {
//         type: 'linear',
//         position: 'left',
//         min: 0,
//         max: 50, // Максимальная скорость (может быть изменено)
//       },
//     },
//     animation: {
//       duration: 0, // Отключаем анимацию для лучшей реализации real-time
//     },
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="200px">
//       <Typography variant="h6" mb={2}>
//         Движущийся график
//       </Typography>
//       <Line data={data} options={options} />
//     </Box>
//   );
// };

// export default RealTimeChart;
