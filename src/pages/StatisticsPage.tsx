import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StatisticsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Диагностика</Typography>
      <Button variant="contained" color="success" onClick={() => navigate('/engine-predict')}>
          Прогнозирование вероятности отказа двигателя
      </Button><br />
      <Button variant="contained" color="success" onClick={() => navigate('/tire-predict')} sx={{ mt: '20px' }}>
          Прогнозирование износа протектора шин
      </Button>
    </Container>
  );
};

export default StatisticsPage;
