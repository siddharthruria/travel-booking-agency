import React, { createContext, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();
const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

const AdminProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      navigate("/admin");
      return true;
    } else {
      setIsAdmin(false);
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    navigate("/");
    enqueueSnackbar("admin account logged out", { variant: "info" });
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
