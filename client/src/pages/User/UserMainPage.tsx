import { useModal } from "../../hooks/useModal";
import AddUserFormModal from "./components/AddUserFormModal";
import UserList from "./components/UserList";

const UserMainPage = () => {
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <div className="space-y-6 px-4 py-5 sm:px-6">
      <AddUserFormModal isOpen={isOpen} onClose={closeModal} />
      <UserList onAddUser={openModal} />
    </div>
  );
};

export default UserMainPage;
