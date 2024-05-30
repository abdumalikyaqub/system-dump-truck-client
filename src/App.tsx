import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StatisticsPage from './pages/StatisticsPage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import DumpTruckList from './components/transports/DumpTruckList';
import DumpTruckForm from './components/transports/DumpTruckForm';
import EnginePrediction from './components/statistics/EnginePrediction';
import TirePrediction from './components/statistics/TirePrediction';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/planning" element={<DumpTruckList />} />
          <Route path="/create" element={<DumpTruckForm />} />
          <Route path="/edit/:id" element={<DumpTruckForm />} />
          <Route path="/tire-predict" element={<TirePrediction />} />
          <Route path="/engine-predict" element={<EnginePrediction />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
