import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { Pointer, getTirePrediction } from '../../api/predictionApi';

const TirePrediction: React.FC = () => {
  const [pointer, setPointer] = useState<Pointer>({
    id: 0,
    dumpTruckId: 0,
    roadTypeId: 0,
    speed: 0,
    fuel: 0,
    engineTemperature: 0,
    enginePressure: 0,
    engineSpeed: 0,
    engineLoad: 0,
    engineVibration: 0,
    tirePressure: 0,
    tireTemperature: 0,
    tireTreadDepth: 0,
  });

  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPointer(prevState => ({
      ...prevState,
      [name]: Number(value)
    }));
  };

  const handleSubmit = async () => {
    const prediction = await getTirePrediction(pointer);
    setResult(prediction.prediction);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Tire Prediction</Typography>
      {Object.keys(pointer).map(key => (
        <TextField
          key={key}
          name={key}
          label={key}
          value={(pointer as any)[key]}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>Predict</Button>
      {result !== null && (
        <Typography variant="h6" gutterBottom>Result: {result}</Typography>
      )}
    </Container>
  );
};

export default TirePrediction;
