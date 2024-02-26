// import React from 'react';
// import { Typography, Grid } from '@mui/material';

// interface FuelConsumptionStatsProps {
//   averageConsumption: number;
//   fuelNorm: number;
//   initialFuelVolume: number;
//   finalFuelVolume: number;
//   refueled: number;
//   drained: number;
// }

// const FuelConsumptionStats: React.FC<FuelConsumptionStatsProps> = ({
//   averageConsumption,
//   fuelNorm,
//   initialFuelVolume,
//   finalFuelVolume,
//   refueled,
//   drained,
// }) => {
//   return (
//     <div>
//       <Typography variant="h6">Fuel Consumption Stats</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <Typography>Average Consumption: {averageConsumption} km/l</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Fuel Norm: {fuelNorm} km/l</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Initial Fuel Volume: {initialFuelVolume} liters</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Final Fuel Volume: {finalFuelVolume} liters</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Refueled: {refueled} liters</Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography>Drained: {drained} liters</Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default FuelConsumptionStats;

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const FuelConsumptionStats: React.FC = () => {
  const [fuelData, setFuelData] = useState<number[]>([100, 80]); // начальный объем и текущий объем

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFuelData((prevFuelData) => {
        const newCurrentVolume = prevFuelData[1] - faker.datatype.number({ min: 1, max: 5 }); // уменьшение объема топлива
        return [prevFuelData[0], newCurrentVolume];
      });
    }, 10000); // Обновление каждые 10 секунд

    return () => clearInterval(intervalId);
  }, []);

  const data = {
    labels: ['Начальный объем', 'Текущий объем'],
    datasets: [
      {
        data: fuelData,
        backgroundColor: ['#5BE12C', '#EA4228'],
      },
    ],
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="200px">
      <Typography variant="h6" mb={2}>
        Статистика расхода топлива
      </Typography>
      <Pie data={data} />
    </Box>
  );
};

export default FuelConsumptionStats;
