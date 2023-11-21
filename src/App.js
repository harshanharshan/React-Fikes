import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import HospitalManagementSystem from './Components/HospitalManagementSystem';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {

    setUser(username);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/patients" element={<HospitalManagementSystem />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
