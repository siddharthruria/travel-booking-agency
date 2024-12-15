import React, { useState, useContext } from "react";
import { useSnackbar } from "notistack";
import { AdminContext } from "../context/AdminContext";

const AdminLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AdminContext);

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
    try {
      const adminSuccess = login(username, password);
      if (adminSuccess) {
        enqueueSnackbar("admin access granted", { variant: "success" });
      } else {
        enqueueSnackbar("invalid admin credentials", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("invalid admin credentials", { variant: "error" });
      console.error(error.message);
    }
  };

  return (
    <div className="container position-relative">
      <h2 className="my-3 position-absolute start-50 translate-middle">
        access admin account
      </h2>
      <form className="py-5 my-4" onSubmit={handleSubmitFunction}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary my-3">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
