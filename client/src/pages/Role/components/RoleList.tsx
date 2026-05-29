import { useEffect, useState, type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";
import RoleService from "../../../services/RoleService";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import type { RoleColumns } from "../../../interfaces/RoleInterface";

interface RoleListProps {
  refreshKey: boolean;
}

const RoleList: FC<RoleListProps> = ({ refreshKey }) => {
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [roles, setRoles] = useState<RoleColumns[]>([]);

  const handleLoadRoles = async () => {
    try {
      setLoadingRoles(true);

      const res = await RoleService.loadRoles();
      if (res.status === 200) {
        setRoles(res.data.roles);
      } else {
        console.error(
          "Unexpected status error occured during load roles: ",
          res.status,
        );
      }
    } catch (error) {
      console.error(
        "Unexpected server error occured during loading roles: ",
        error,
      );
    } finally {
      setLoadingRoles(false);
    }
  };

  useEffect(() => {
    handleLoadRoles();
  }, [refreshKey]);

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-emerald-200/60 bg-white/95 shadow-xl shadow-emerald-500/10">
        <div className="max-w-full max-h-[calc(100vh-20rem)] overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-emerald-100 bg-emerald-950 sticky top-0 text-white text-xs">
              <TableCell isHeader className="px-5 py-3 font-medium text-center">
                No.
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start">
                Role
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start">
                Actions
              </TableCell>
            </TableHeader>
            <TableBody className="divide-y divide-emerald-100 text-emerald-600 text-sm">
              {loadingRoles ? (
                <TableRow>
                  <TableCell colSpan={3} className="px-4 py-3 text-center">
                    <Spinner size="md" />
                  </TableCell>
                </TableRow>
              ) : (
                roles.map((role, index) => (
                  <TableRow className="hover:bg-emerald-50" key={index}>
                    <TableCell className="px-4 py-3 text-center text-emerald-700">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start text-emerald-800">
                      {role.role}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <div className="flex justify-start items-center gap-4">
                        <Link
                          to={`/role/edit/${role.role_id}`}
                          className="text-green-600 font-medium hover:underline"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/role/delete/${role.role_id}`}
                          className="text-red-600 font-medium hover:underline"
                        >
                          Delete
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default RoleList;
