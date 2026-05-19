import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const AppSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const sidebarItems = [
    {
      path: "#",
      text: "Dashboard",
    },
    {
      path: "#",
      text: "User Management",
    },
  ];

  return (
    <>
      {!isOpen && (
        <div
          className="fixed inset-0 z-30 blur-lg sm:hidden"
          onClick={toggleSidebar}
        />
      )}
      <aside
        id="top-bar-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 text-md h-screen pt-14 transition-transform ${isOpen ? "-translate-x-full" : "translate-x-0"} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pt-4 overflow-y-auto bg-[#1a4a1a] border-e border-[#2d6a2d]">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((sidebarItem) => (
              <li>
                <Link
                  to={sidebarItem.path}
                  className="flex items-center p-2 py-1.5 text-[#a5d6a7] rounded-lg hover:bg-[#2d6a2d] hover:text-[#c8e6c9] group"
                >
                  <span className="ms-3">{sidebarItem.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
