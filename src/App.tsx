import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout';
// import PlanningPage from './pages/PlanningPage';
import RemoteControlPage from './pages/RemoteControlPage';
import StatisticsPage from './pages/StatisticsPage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import MapPage from './pages/MapPage';
import CameraPage from './pages/CameraPage';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PlanningPage from './pages/PlanningPage';
import RadarPage from './pages/RadarPage';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/remote-control" element={<RemoteControlPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/radar-page" element={<RadarPage/>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
