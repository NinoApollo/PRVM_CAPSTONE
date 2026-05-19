import { Link } from "react-router-dom";
import { useHeader } from "../context/HeaderContext";
import { useSidebar } from "../context/SidebarContext";

const AppHeader = () => {
  const { isOpen, toggleUserMenu } = useHeader();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={toggleUserMenu} />
      )}
      <nav className="fixed top-0 z-50 w-full bg-[#1a4a1a] border-b border-[#2d6a2d]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="top-bar-sidebar"
                data-drawer-toggle="top-bar-sidebar"
                aria-controls="top-bar-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="sm:hidden text-[#c8e6c9] bg-transparent box-border border border-transparent hover:bg-[#2d6a2d] focus:ring-4 focus:ring-[#4caf50] font-medium leading-5 rounded-lg text-sm p-2 focus:outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M5 7h14M5 12h14M5 17h10"
                  />
                </svg>
              </button>
              <span className="self-center text-lg font-semibold whitespace-nowrap text-[#c8e6c9]">
                FCU - PLASTIC RECYCLING VENDING MACHINE
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="flex text-sm bg-[#2d6a2d] rounded-full focus:ring-4 focus:ring-[#4caf50]"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={`absolute right-8 top-9 min-w-[200px] z-50 ${isOpen ? "block" : "hidden"} bg-[#1a4a1a] border border-[#2d6a2d] rounded-lg shadow-lg w-44"
                  id="dropdown-user`}
                >
                  <div
                    className="px-4 py-3 border-b border-[#2d6a2d]"
                    role="none"
                  >
                    <p
                      className="text-sm font-medium text-[#c8e6c9]"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p className="text-sm text-[#81c784] truncate" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul
                    className="p-2 text-sm text-[#a5d6a7] font-medium"
                    role="none"
                  >
                    <li>
                      <Link
                        to="#"
                        className="inline-flex items-center w-full p-2 hover:bg-[#2d6a2d] hover:text-[#c8e6c9] rounded"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
