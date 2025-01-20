"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Toast from "../components/atoms/Toast";

// Define the shape of the toast state
interface ToastState {
  isVisible: boolean;
  message: string;
  type: "success" | "error" | "warning";
}

// Define the context value shape
interface ToastContextValue {
  showToast: (message: string, type?: "success" | "error" | "warning") => void;
}

// Create the context with a default value of `null`
const ToastContext = createContext<ToastContextValue | null>(null);

// Toast provider to manage toast state
export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    message: "",
    type: "success", // success, error, warning
  });

  const showToast = (
    message: string,
    type: "success" | "error" | "warning" = "success"
  ) => {
    setToast({ isVisible: true, message, type });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast({ isVisible: false, message: "", type: "success" })
        }
      />
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast context
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
