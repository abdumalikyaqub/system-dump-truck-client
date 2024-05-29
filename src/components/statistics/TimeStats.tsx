import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { faker } from '@faker-js/faker';

const TimeStats: React.FC = () => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [totalStops, setTotalStops] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomTime = faker.datatype.number({ min: 1, max: 10 }); // генерация случайного времени движения
      const randomStops = faker.datatype.number({ min: 0, max: 5 }); // генерация случайного количества остановок

      setTotalTime((prevTotalTime) => prevTotalTime + randomTime);
      setTotalStops((prevTotalStops) => prevTotalStops + randomStops);
    }, 5000); // Обновление каждые 5 секунд

    return () => clearInterval(intervalId);
  }, []);

  const handleToggleMovement = () => {
    setIsMoving((prevIsMoving) => !prevIsMoving);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100px">
      <Typography variant="h4" mb={2}>
        Статистика времени движения
      </Typography>
      <Typography variant="h5" mb={2}>
        Общее время движения: {totalTime} мин.
      </Typography>
      <Typography variant="h5" mb={2}>
        Количество остановок: {totalStops}
      </Typography>
      {/* <Button variant="contained" color={isMoving ? 'secondary' : 'primary'} onClick={handleToggleMovement}>
        {isMoving ? 'Остановить' : 'Начать движение'}
      </Button> */}
    </Box>
  );
};

export default TimeStats;
