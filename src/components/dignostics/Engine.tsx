import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

interface EngineProps {
  isRunning: boolean;
  toggleEngine: () => void;
}

const Engine: React.FC<EngineProps> = ({ isRunning, toggleEngine }) => {
  return (
    <div>
      <h2>Engine</h2>
      <FormControlLabel
        control={<Switch checked={isRunning} onChange={toggleEngine} />}
        label="Engine Status"
      />
    </div>
  );
};

export default Engine;
