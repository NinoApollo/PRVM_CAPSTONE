import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const AppSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const location = useLocation();
  const [managementOpen, setManagementOpen] = useState(false);

  const sidebarItems = [
    {
      path: "/",
      text: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
  ];

  const managementItems = [
    {
      path: "/users",
      text: "Users",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 11a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
    },
    {
      path: "/role",
      text: "Roles",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
    },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const managementActive = managementItems.some((item) => isActive(item.path));

  useEffect(() => {
    if (managementActive) {
      setManagementOpen(true);
    }
  }, [managementActive]);

  return (
    <>
      {!isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm sm:hidden transition-all duration-300"
          onClick={toggleSidebar}
        />
      )}
      <aside
        id="top-bar-sidebar"
        className={`fixed top-0 left-0 z-40 w-72 h-screen pt-16 transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? "-translate-x-full" : "translate-x-0"} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6 overflow-y-auto bg-white/95 backdrop-blur-md border-r border-emerald-100">
          <div className="mb-8 px-3">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-emerald-100">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
                <div className="w-8 h-8 text-2xl rounded-lg flex items-center justify-center">
                  ♻️
                </div>
              </div>
              <div>
                {/* <p className="text-xs text-emerald-500 font-semibold">
                  RECYCLING HUB
                </p> */}
                <p className="text-lg font-bold text-emerald-800">
                  Admin Dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              {/* <p className="px-4 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-500">
                Navigation
              </p> */}
              <ul className="mt-3 space-y-1.5 font-medium">
                {sidebarItems.map((sidebarItem, index) => (
                  <li key={index}>
                    <Link
                      to={sidebarItem.path}
                      onClick={() => window.innerWidth < 640 && toggleSidebar()}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
                        location.pathname === sidebarItem.path
                          ? "bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-md"
                          : "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                      }`}
                    >
                      <span
                        className={`${location.pathname === sidebarItem.path ? "text-white" : "text-emerald-500 group-hover:text-emerald-600"} transition-colors`}
                      >
                        {sidebarItem.icon}
                      </span>
                      <span className="text-sm tracking-wide">
                        {sidebarItem.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-2">
              <button
                type="button"
                onClick={() => setManagementOpen((prev) => !prev)}
                aria-expanded={managementOpen}
                className={`flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                  managementActive
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-white text-emerald-800 hover:bg-emerald-50"
                }`}
              >
                <span className="inline-flex items-center gap-3">
                  <span
                    className={`${managementActive ? "text-white" : "text-emerald-500"}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 11a4 4 0 100-8 4 4 0 000 8z"
                      />
                    </svg>
                  </span>
                  <span>User Management</span>
                </span>
                <span
                  className={`transition-transform ${managementOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {managementOpen && (
                <ul className="mt-3 space-y-1.5 font-medium">
                  {managementItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={() =>
                          window.innerWidth < 640 && toggleSidebar()
                        }
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 pl-10 transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-emerald-500 text-white shadow-md"
                            : "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                        }`}
                      >
                        <span
                          className={`${isActive(item.path) ? "text-white" : "text-emerald-500 group-hover:text-emerald-600"} transition-colors`}
                        >
                          {item.icon}
                        </span>
                        <span className="text-sm tracking-wide">
                          {item.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
