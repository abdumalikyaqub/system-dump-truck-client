import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StatisticsPage from './pages/StatisticsPage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PlanningPage from './pages/PlanningPage';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/planning" element={<PlanningPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
