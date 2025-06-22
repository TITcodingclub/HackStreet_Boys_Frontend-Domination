import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Trainer from './pages/Trainer';
import Diet from './pages/Diet';
import Workout from './pages/Workout';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;