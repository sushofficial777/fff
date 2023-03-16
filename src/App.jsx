import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import ProtectedRoute from "ProtectedRoute";


import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import TeamLead from "layouts/teamleader";
import Manager from "layouts/manager";
import Employees from "layouts/employees";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout/>} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="tl/*" element={<TeamLead />} />
      <Route path="manager/*" element={<Manager />} />
      <Route path="user/*" element={<Employees/>} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};
export default App;
