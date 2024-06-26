import React from 'react';
import TemperatureSensor from '../components/dignostics/TemperatureSensor';
import FuelSensor from '../components/dignostics/FuelSensor';
import { Grid } from '@mui/material';
import Speedometer from '../components/dignostics/Speedometer';
import TirePressure from '../components/dignostics/TirePressure';
import OdometerStats from '../components/statistics/OdometerStats';
import TimeStats from '../components/statistics/TimeStats';

const DiagnosticsPage: React.FC = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} textAlign={'center'}>
          <div style={{backgroundColor: 'inherit'}}>
            <h2>Температура</h2>
            <TemperatureSensor/>
          </div>
        </Grid>
        <Grid textAlign={'center'} item xs={6} sx={{backgroundColor: '#f2efe6', borderRadius: '5px'}}>
          <div>
          <h2>Скорость</h2>
          <Speedometer/>
          </div>
        </Grid>
        <Grid textAlign={'center'} item xs={6} sx={{backgroundColor: '#f2efe6', borderRadius: '5px'}} >
          <div>
            <h2>Топливо</h2>
            <FuelSensor/>
          </div>
        </Grid>
        <Grid textAlign={'center'} item xs={6}>
          <div>
            <h2>Давления в шинах</h2>
            <TirePressure/>
          </div>
        </Grid>
      </Grid>
      <Grid rowSpacing={1} textAlign={'center'} item xs={12}  >
          <div>
          <h1>Статистика пробега</h1>
          <OdometerStats/>
          {/* <h2>Время в движении</h2> */}
          <TimeStats/>
          </div>
      </Grid>
    </div>
  );
};

export default DiagnosticsPage;
