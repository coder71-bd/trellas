import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import Register from './pages/Register/Register';
import EmailVerify from './pages/shared/EmailVerify/EmailVerify';
import Footer from './pages/shared/Home/Footer/Footer';
import Header from './pages/shared/Home/Header/Header';
import Home from './pages/shared/Home/Home';
import Login from './pages/shared/Login/Login';
import PrivateRoute from './pages/shared/PrivateRoute/PrivateRoute';
import ShareExperience from './pages/shared/ShareExperience/ShareExperience';

const App = () => {
  return (
    <AuthProvider>
      <div className="font-serif">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/emailverify" element={<EmailVerify />} />
            <Route
              path="/shareExperience"
              element={
                <PrivateRoute>
                  <ShareExperience />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
