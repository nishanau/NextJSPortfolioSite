"use client";

import React from "react";

import { createContext, useState, useContext } from "react";
import Toast from "@/components/Toast/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: "" });

  const showToast = (message) => {
    setToast( {message} );
  };
  const onClose = () => {
    setToast({ message: "" });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toast.message} onClose={onClose} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
