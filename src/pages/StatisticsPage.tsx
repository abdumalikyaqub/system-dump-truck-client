import React from 'react';
import FuelConsumptionStats from '../components/statistics/FuelConsumptionStats';
import { Grid } from '@mui/material';
import OdometerStats from '../components/statistics/OdometerStats';
import TimeStats from '../components/statistics/TimeStats';

const StatisticsPage: React.FC = () => {

  return (
    <div style={{ display: "flex" }}>
      <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} textAlign={'center'} sx={{backgroundColor: '#f2efe6', borderRadius: '5px'}}>
          <div>
            <h2>Расход топлива</h2>
            <FuelConsumptionStats/>
          </div>
        </Grid>
        <Grid textAlign={'center'} item xs={6} sx={{backgroundColor: '#f2efe6', borderRadius: '5px'}}>
          <div>
          <h1>Статистика пробега</h1>
          <OdometerStats/>
          {/* <h2>Время в движении</h2> */}
            <TimeStats/>
          </div>
        </Grid>
        <Grid rowSpacing={1} textAlign={'center'} item xs={12}  >
          <div>
            <h2>Другие параметры</h2>
            {/* <TimeStats/> */}
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default StatisticsPage;
