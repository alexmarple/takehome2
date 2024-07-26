import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Main from './pages/Main';

export default function CustomRoutes({ cases }) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/cases' replace />} />
        <Route path='/cases' element={<Main cases={cases} />} />
        {/* add other routes here */}
      </Routes>
    </Router>
  );
}
