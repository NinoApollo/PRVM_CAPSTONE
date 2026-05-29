import { useEffect, useState, type FC, type FormEvent } from "react";
import BackButton from "../../../components/Button/BackButton";
import SubmitButton from "../../../components/Button/SubmitButton";
import FloatingLabelInput from "../../../components/Input/FloatingLabelInput";
import RoleService from "../../../services/RoleService";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import type { RoleFieldErrors } from "../../../interfaces/RoleInterface";

interface EditRoleFormProps {
  onRoleUpdated: (message: string) => void;
}

const EditRoleForm: FC<EditRoleFormProps> = ({ onRoleUpdated }) => {
  const [loadingGet, setLoadingGet] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState<RoleFieldErrors>({});

  const { role_id } = useParams();

  const handleGetRole = async (role_id: string | number) => {
    try {
      setLoadingGet(true);

      const res = await RoleService.getRole(role_id);

      if (res.status === 200) {
        setRole(res.data.role.role);
      } else {
        console.error(
          "Unexpected status error occured during getting role: ",
          res.status,
        );
      }
    } catch (error) {
      console.log(
        "Unexpected server error occured during getting role ",
        error,
      );
    } finally {
      setLoadingGet(false);
    }
  };

  const handleUpdateRole = async (e: FormEvent) => {
    try {
      e.preventDefault();

      setLoadingUpdate(true);

      const res = await RoleService.updateRole(role_id!, {
        role: role,
      });

      if (res.status === 200) {
        setErrors({});
        setRole(res.data.role.role);
        onRoleUpdated(res.data.message);
      } else {
        console.error(
          "Unexpected status error occured during updating role: ",
          res.status,
        );
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error(
          "Unexpected server error occured during updating role: ",
          error,
        );
      }
    } finally {
      setLoadingUpdate(false);
    }
  };

  useEffect(() => {
    if (role_id) {
      const parsedRoleId = parseInt(role_id);
      handleGetRole(parsedRoleId);
    } else {
      console.error(
        "Unexpected parameter error occured during getting role: ",
        role_id,
      );
    }
  }, [role_id]);

  return (
    <>
      {loadingGet ? (
        <div className="flex justify-center items-center mt-52">
          <Spinner size="lg" />
        </div>
      ) : (
        <form
          onSubmit={handleUpdateRole}
          className="rounded-3xl border border-emerald-200/60 bg-white/95 p-6 shadow-xl shadow-emerald-500/10"
        >
          <div className="mb-4">
            <FloatingLabelInput
              label="Role"
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              autoFocus
              errors={errors.role}
            />
          </div>
          <div className="flex justify-end gap-4 pt-3 border-t border-emerald-100">
            {!loadingUpdate && <BackButton label="Back" path="/roles" />}
            <SubmitButton
              label="Update Role"
              loading={loadingUpdate}
              loadingLabel="Updating Role..."
            />
          </div>
        </form>
      )}
    </>
  );
};

export default EditRoleForm;
