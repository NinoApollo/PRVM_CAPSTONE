import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";

interface UserListProps {
  onAddUser: () => void;
}

const UserList: FC<UserListProps> = ({ onAddUser }) => {
  const users = [
    {
      user_id: 1,
      first_name: "Stefhany",
      middle_name: "",
      last_name: "Vasquez",
      suffix_name: "Panyang",
      role: "Student",
      address: "Cagay",
      action: (
        <>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-emerald-600 font-medium hover:underline hover:text-emerald-700 transition-colors"
            >
              Edit
            </button>
            <button
              type="button"
              className="text-rose-600 font-medium hover:underline hover:text-rose-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      ),
    },
    {
      user_id: 2,
      first_name: "Niño",
      middle_name: "Rivan",
      last_name: "Apollo",
      suffix_name: "Wallet",
      role: "Admin",
      address: "Roxas",
      action: (
        <>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-emerald-600 font-medium hover:underline hover:text-emerald-700 transition-colors"
            >
              Edit
            </button>
            <button
              type="button"
              className="text-rose-600 font-medium hover:underline hover:text-rose-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-emerald-100 bg-white">
        <div className="max-w-full max-h-[calc(100vh)] overflow-auto">
          <Table>
            <caption className="mb-4">
              <div className="border-b border-emerald-100">
                <div className="p-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-lg transition cursor-pointer"
                    onClick={onAddUser}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </caption>
            <TableHeader className="border-b border-emerald-100 bg-linear-to-r from-emerald-600 to-emerald-700 sticky top-0 text-white text-xs">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-center"
                >
                  No.
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  First Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  Middle Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  Last Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  Suffix Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  Role
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-start"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-emerald-50 text-emerald-700 text-sm">
              {users.map((user, index) => (
                <TableRow className="hover:bg-emerald-50" key={index}>
                  <TableCell className="px-4 py-3 text-center">
                    {user.user_id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.first_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.middle_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.last_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.suffix_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.role}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.address}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserList;
