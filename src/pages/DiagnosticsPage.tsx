import React from 'react';
import TemperatureSensor from '../components/dignostics/TemperatureSensor';
import FuelSensor from '../components/dignostics/FuelSensor';
import { Grid } from '@mui/material';
import Speedometer from '../components/dignostics/Speedometer';
import TirePressure from '../components/dignostics/TirePressure';

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
    </div>
  );
};

export default DiagnosticsPage;
