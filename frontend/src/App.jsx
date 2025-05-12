import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import NewRecordPage from './pages/NewRecordPage';
import MetadataPage from './pages/MetadataPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewRecordPage />} />
          <Route path="/metadata" element={<MetadataPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;