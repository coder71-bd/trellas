import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import AdminRoute from './pages/admin/AdminRoute/AdminRoute';
import ApproveBlogs from './pages/admin/ApproveBlogs/ApproveBlogs';
import MakeAdmin from './pages/admin/MakeAdmin/MakeAdmin';
import Register from './pages/Register/Register';
import EmailVerify from './pages/shared/EmailVerify/EmailVerify';
import Explore from './pages/shared/Explore/Explore';
import Footer from './pages/shared/Home/Footer/Footer';
import Header from './pages/shared/Home/Header/Header';
import Home from './pages/shared/Home/Home';
import Login from './pages/shared/Login/Login';
import PrivateRoute from './pages/shared/PrivateRoute/PrivateRoute';
import ShareExperience from './pages/shared/ShareExperience/ShareExperience';
import SingleBlogDetail from './pages/shared/SingleBlogDetail/SingleBlogDetail';

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
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/singleBlogDetail/:id"
              element={<SingleBlogDetail />}
            />
            <Route
              path="/shareExperience"
              element={
                <PrivateRoute>
                  <ShareExperience />
                </PrivateRoute>
              }
            />

            {/* admin routes */}
            <Route
              path="admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            >
              <Route path="approveBlogs" element={<ApproveBlogs />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
