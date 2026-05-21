import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import RoleMainPage from "../pages/Role/RoleMainPage";
import EditRolePage from "../pages/Role/EditRolePage";
import DeleteRolePage from "../pages/Role/DeleteRolePage";
import UserMainPage from "../pages/User/UserMainPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<RoleMainPage />} />
          <Route path="/roles/edit" element={<EditRolePage />} />
          <Route path="/roles/delete" element={<DeleteRolePage />} />
          <Route path="/users" element={<UserMainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
