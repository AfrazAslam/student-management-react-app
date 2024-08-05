import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GridPage from './pages/GridPage';
import LookupPage from './pages/LookupPage';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
        <Navbar />
      <Routes>
        <Route path="/" element={<GridPage />} />
        <Route path="/lookup" element={<LookupPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
