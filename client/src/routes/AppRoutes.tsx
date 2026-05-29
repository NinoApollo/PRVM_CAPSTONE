import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import UserMainPage from "../pages/User/UserMainPage";
import RoleMainPage from "../pages/Role/RoleMainPage";
import EditRolePage from "../pages/Role/EditRolePage";
import DeleteRolePage from "../pages/Role/DeleteRolePage";
import DashboardMainPage from "../pages/Dashboard/DashboardMainPage";
import LoginPage from "../pages/Auth/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardMainPage />} />
            <Route path="/roles" element={<RoleMainPage />} />
            <Route path="/role/edit/:role_id" element={<EditRolePage />} />
            <Route path="/role/delete/:role_id" element={<DeleteRolePage />} />
            <Route path="/users" element={<UserMainPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default AppRoutes;
