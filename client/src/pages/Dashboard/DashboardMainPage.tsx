import { useEffect } from "react";

const DashboardMainPage = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-200/60 bg-white/95 p-6 shadow-xl shadow-emerald-500/10">
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">
            Overview
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-emerald-900">
            Website Summary
          </h1>
          <p className="mt-2 text-sm text-emerald-600 max-w-2xl">
            This dashboard gives a quick summary of the website status and points you to user and role management.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
              Users
            </p>
            <p className="mt-3 text-3xl font-semibold text-emerald-900">
              Manage access
            </p>
            <p className="mt-2 text-sm text-emerald-600">
              Add, edit, and remove users from the account system.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
              Roles
            </p>
            <p className="mt-3 text-3xl font-semibold text-emerald-900">
              Control permissions
            </p>
            <p className="mt-2 text-sm text-emerald-600">
              Create and manage role types used across the website.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
              Summary
            </p>
            <p className="mt-3 text-3xl font-semibold text-emerald-900">
              Fast overview
            </p>
            <p className="mt-2 text-sm text-emerald-600">
              Navigate the sidebar to reach the correct area for any admin task.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainPage;
