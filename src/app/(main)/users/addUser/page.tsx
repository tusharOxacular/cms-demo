"use client";

import React, { useState } from "react";
import Input from "@/components/atoms/InputFields/createUserInputs/Input";
import SelectInput from "@/components/atoms/InputFields/createUserInputs/SelectInput";
import Button from "@/components/atoms/Button";
import createUser from "@/api/auth/CreateUser";

const apiUrl = "http://localhost:8001/cms-auth/create-user";

function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputFields = [
    { name: "name", type: "text", placeholder: "Name...", key: "name" },
    {
      name: "email",
      type: "email",
      placeholder: "name@company.com",
      key: "email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "••••••••",
      key: "password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "••••••••",
      key: "confirmPassword",
    },
  ];

  const roles = ["admin", "author", "editor"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const { name, email, password, role } = formData;
      await createUser(apiUrl, { name, email, password, role });
      setSuccess("User created successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 min-h-screen flex p-4 sm:p-8 md:p-16">
      <form
        className="space-y-4 sm:space-y-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto"
        onSubmit={handleSubmit}
      >
        {inputFields.map((field, index) => (
          <Input
            key={index}
            name={field.key} // Match the formData keys
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.key as keyof typeof formData]} // Prevent undefined values
            onChange={handleChange}
          />
        ))}

        <div>
          <SelectInput
            name="role" // Ensure name matches formData key
            htmlFor="role"
            option={roles}
            value={formData.role}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button name="Create User" type="submit" />
          {/* <Button name="Reset" type="reset" /> */}
        </div>
      </form>
    </section>
  );
}

export default AddUser;
