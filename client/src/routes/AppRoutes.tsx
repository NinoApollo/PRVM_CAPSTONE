import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import FloatingLabelInput from "../components/Input/FloatingLabelInput";
import { useState } from "react";
import FloatingLabelSelect from "../components/Select/FloatingLabelSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../components/Table";

const SampleComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const genders = [
    {
      value: "",
      text: "Select Gender",
    },
    {
      value: 1,
      text: "Male",
    },
    {
      value: 2,
      text: "Female",
    },
    {
      value: 3,
      text: "Prefer not to say",
    },
  ];

  return (
    <>
      <div className="mb-4">
        <FloatingLabelInput
          label="First Name"
          type="text"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          autoFocus
        />
        <p className="text-emerald-700 font-medium mt-1 text-sm">
          First Name: {firstName}
        </p>
      </div>
      <div className="mb-4">
        <FloatingLabelInput
          label="Last Name"
          type="text"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <p className="text-emerald-700 font-medium mt-1 text-sm">
          Last Name: {lastName}
        </p>
      </div>
      <div className="mb-4">
        <FloatingLabelInput
          label="Birth Date"
          type="date"
          name="birth_date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <p className="text-emerald-700 font-medium mt-1 text-sm">
          Birth Date: {birthDate}
        </p>
      </div>
      <div className="mb-4">
        <FloatingLabelInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="text-emerald-700 font-medium mt-1 text-sm">
          Password: {password}
        </p>
      </div>
      <div className="mb-4">
        <FloatingLabelSelect
          label="Gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          {genders.map((gender, index) => (
            <option value={gender.value} key={index}>
              {gender.text}
            </option>
          ))}
        </FloatingLabelSelect>
        <p className="text-emerald-700 font-medium mt-1 text-sm">
          Gender: {gender}
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border border-emerald-200 bg-white shadow-sm">
        <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">
          <Table>
            <TableHeader className="bg-emerald-600 text-white sticky top-0 z-30 text-xs">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-center"
                >
                  No.
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-start"
                >
                  Gender
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {genders.map((gender, index) => (
                <TableRow key={index}>
                  <TableCell className="px-4 py-3 text-center text-gray-700">
                    {gender.value}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-gray-700">
                    {gender.text}
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

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<SampleComponent />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
