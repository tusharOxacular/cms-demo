"use client";
import React, { useState } from "react";
import AuthButton from "../atoms/InputFields/loginInputs/AuthButton";
import AuthInput from "../atoms/InputFields/loginInputs/AuthInput";
import loginUser from "../../api/auth/LoginUser";
import { useToast } from "@/contexts/ToastContext";
import { useRouter } from "next/navigation";

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/cms-auth/login`;

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      await loginUser(apiUrl, { email, password });
      showToast("Login successful!", "success");
      router.push("/dashboard");
    } catch (err: any) {
      showToast("Invalid email or password.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 py-8 mx-auto h-full pb-32">
        <a
          href=""
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="h-12" src="/assets/images/logo.webp" alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <div className="px-5 space-y-4 md:space-y-6 sm:px-8 pt-4 pb-6">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Login
            </h1>
            <form onSubmit={handleSubmit}>
              <AuthInput
                name="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="w-full h-4"></div>
              <AuthInput
                name="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full h-8"></div>
              <AuthButton
                name={loading ? "Loading..." : "Login"}
                type="submit"
                isLoading={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogInPage;
