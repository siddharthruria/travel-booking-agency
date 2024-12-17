import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { isAdmin, logout } = useContext(AdminContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand">
            <b>travel-agency-app</b>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ marginLeft: "1.2vw" }}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ marginLeft: "1.2vw" }}
                  className="nav-link"
                  aria-current="page"
                  to="/package/allPackages"
                >
                  tour-packages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ marginLeft: "1.2vw" }}
                  className="nav-link"
                  aria-current="page"
                  to="/booking/allBookings"
                >
                  your-bookings
                </Link>
              </li>
              {!isAdmin && (
                <>
                  <li className="nav-item">
                    <Link
                      style={{ marginLeft: "1.2vw" }}
                      className="nav-link"
                      aria-current="page"
                      to="/admin/login"
                    >
                      login-admin
                    </Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <Link
                      style={{ marginLeft: "1.2vw" }}
                      className="nav-link"
                      aria-current="page"
                      to="/admin"
                    >
                      admin-panel
                    </Link>
                  </li>
                  <div>
                    <Link
                      to="/admin/login"
                      style={{ marginLeft: "625px", textDecoration: "none" }}
                      type="button"
                      className="buttons btn btn-primary"
                      onClick={() => {
                        logout();
                      }}
                    >
                      admin-logout
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
