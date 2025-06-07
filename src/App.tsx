
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './components/pages/DashboardPage';
import SedesPage from './components/pages/SedesPages';
import CentroFormacionPage from './components/pages/CentroFormacionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/sedes" element={<SedesPage />} />
      <Route path="/centroformacion" element={<CentroFormacionPage />} />

      {/* Aquí puedes agregar más rutas según sea necesario */}
    </Routes>
  );
}

export default App;
