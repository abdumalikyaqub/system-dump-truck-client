// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// interface TirePressureProps {
//   pressures: number[];
// }

// const TirePressure: React.FC<TirePressureProps> = ({ pressures }) => {
//   const chartData = {
//     labels: ['Front Left', 'Front Right', 'Rear Left', 'Rear Right'],
//     datasets: [
//       {
//         label: 'Tire Pressure',
//         data: pressures,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Tire Pressure</h2>
//       <Bar data={chartData} />
//     </div>
//   );
// };

// export default TirePressure;

import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { faker } from '@faker-js/faker';
import TireRepairRoundedIcon from '@mui/icons-material/TireRepairRounded';

const TirePressure: React.FC = () => {
  const [tirePressures, setTirePressures] = useState<number[]>(Array.from({ length: 4 }, () => faker.datatype.number({ min: 25, max: 35 })));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTirePressures((prevTirePressures) =>
        prevTirePressures.map((pressure) => {
          // Генерация случайного изменения давления в пределах [-2, 2]
          const pressureChange = faker.datatype.number({ min: -2, max: 2 });
          const newPressure = Math.max(0, pressure + pressureChange); // Давление не может быть отрицательным
          return newPressure;
        })
      );
    }, 2000); // Обновление каждые 10 секунд

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box display="flex" flexDirection="row" alignItems="start" justifyContent="start" minHeight="200px">
      {tirePressures.map((pressure, index) => (
        <div key={index}>
          {/* <CircularProgress variant="determinate" value={pressure} size={100} thickness={5} /> */}
          <TireRepairRoundedIcon sx={{ fontSize: 100}} />
          <Typography variant="h5" mt={2}>
            <span style={{color: '#1e1d1f'}}>Шина {index + 1}</span> Давление: <span style={{color: "red", fontSize: "30px"}}> {pressure} PSI</span>  
          </Typography>
        </div>
      ))}
    </Box>
  );
};

export default TirePressure;

// import { faker } from '@faker-js/faker';
// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';


// const TirePressure: React.FC = () => {
//   const initialPressures = Array.from({ length: 4 }, () => faker.datatype.number({ min: 25, max: 35 }));
//   const [tirePressures, setTirePressures] = useState<number[]>(initialPressures);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTirePressures((prevTirePressures) =>
//         prevTirePressures.map((pressure) => {
//           const pressureChange = faker.datatype.number({ min: -2, max: 2 });
//           const newPressure = Math.max(0, pressure + pressureChange);
//           return newPressure;
//         })
//       );
//     }, 10000); // Обновление каждые 10 секунд

//     return () => clearInterval(intervalId);
//   }, []);

//   const data = {
//     labels: ['Tire 1', 'Tire 2', 'Tire 3', 'Tire 4'],
//     datasets: [
//       {
//         label: 'Tire Pressure',
//         data: tirePressures,
//         fill: false,
//         backgroundColor: 'rgba(0, 123, 255, 0.2)',
//         borderColor: 'rgba(0, 123, 255, 1)',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 40,
//       },
//     },
//   };

//   return (
//     <div>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default TirePressure;
