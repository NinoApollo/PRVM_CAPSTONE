import { useEffect, useState, type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";
import type { RoleColumns } from "../../../interfaces/RoleColumns";
import RoleService from "../../../services/RoleService";
import Spinner from "../../../components/Spinner/Spinner";

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
          "Unexpected status error occured during loading roles: ",
          res.status,
        );
      }
    } catch (errors) {
      console.error(
        "Unexpected server error occured during loading roles: ",
        errors,
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
      <div className="overflow-hidden rounded-lg border border-emerald-100 bg-white">
        <div className="max-w-full max-h-[calc(100vh)] overflow-auto">
          <Table>
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
                  Role
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-emerald-50 text-emerald-700 text-sm">
              {loadingRoles ? (
                <TableRow>
                  <TableCell colSpan={3} className="px-4 py-3 text-center">
                    <Spinner size="md" />
                  </TableCell>
                </TableRow>
              ) : (
                roles.map((role, index) => (
                  <TableRow className="hover:bg-gray-100" key={index}>
                    <TableCell className="px-4 py-3 text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {role.role}
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
