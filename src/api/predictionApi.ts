import axios from 'axios';

const API_URL = 'https://localhost:7222/api/Predictions';

export const getTirePrediction = async (pointer: Pointer) => {
  const response = await axios.post(`${API_URL}/tire`, pointer);
  return response.data;
};

export const getEnginePrediction = async (pointer: Pointer) => {
  const response = await axios.post(`${API_URL}/engine`, pointer);
  return response.data;
};

export interface Pointer {
  dumpTruckId: number;
  roadTypeId: number;
  speed: number;
  fuel: number;
  engineTemperature: number;
  enginePressure: number;
  engineSpeed: number;
  engineLoad: number;
  engineVibration: number;
  tirePressure: number;
  tireTemperature: number;
  tireTreadDepth: number;
}
