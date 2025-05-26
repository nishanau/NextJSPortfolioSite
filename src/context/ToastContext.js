"use client";

import React from "react";

import { createContext, useState, useContext } from "react";
import Toast from "@/components/Toast/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: "", type: "info" });

  const showToast = (message, type) => {
    setToast( {message, type} );
  };
  const onClose = () => {
    setToast({ message: "", type: "" });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toast.message} onClose={onClose} type={toast.type} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
