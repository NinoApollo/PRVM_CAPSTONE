import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import DashboardMainPage from "../pages/Dashboard/DashboardMainPage";
import RoleMainPage from "../pages/Role/RoleMainPage";
import EditRolePage from "../pages/Role/EditRolePage";
import DeleteRolePage from "../pages/Role/DeleteRolePage";
import UserMainPage from "../pages/User/UserMainPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardMainPage />} />
          <Route path="/role" element={<RoleMainPage />} />
          <Route path="/role/edit/:role_id" element={<EditRolePage />} />
          <Route path="/role/delete/:role_id" element={<DeleteRolePage />} />
          <Route path="/users" element={<UserMainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
