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
