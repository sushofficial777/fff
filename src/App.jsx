import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "ProtectedRoute";


import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import TeamLead from "layouts/teamleader";
import Manager from "layouts/manager";
import Employees from "layouts/employees";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<ProtectedRoute Component={AuthLayout} />} />
      <Route path="admin/*" element={<ProtectedRoute Component={AdminLayout} />} />
      <Route path="tl/*" element={<ProtectedRoute Component={TeamLead} />} />
      <Route path="manager/*" element={<ProtectedRoute Component={Manager} />} />
      <Route path="user/*" element={<ProtectedRoute Component={Employees} />} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};
export default App;
