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