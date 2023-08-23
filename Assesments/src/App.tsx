// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfoForm from './Pages/UserInfo';
import Details from './Pages/UserDetails';
import DataDisplay from './Pages/DataDisplay';
import Departments from './Component/Departments';
import HomePage from './Pages/Home';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/task1"  element={<UserInfoForm />} />
        <Route path="/second-page" element={<Details />} />
        <Route path="/task2" element={<DataDisplay />} />
        <Route path="/task3" element={<Departments />} />
      </Routes>
    </Router>
  );
};

export default App;
