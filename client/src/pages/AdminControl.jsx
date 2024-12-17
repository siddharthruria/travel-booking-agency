import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PackageContext } from "../context/PackageContext";
import { AdminContext } from "../context/AdminContext";

const AdminControl = () => {
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  const { packages, deletePackageRequest } = useContext(PackageContext);
  const { fetchAllPackagesRequest } = useContext(PackageContext);
  fetchAllPackagesRequest();

  if (!isAdmin) {
    navigate("/admin/login");
    return;
  }

  return (
    <>
      <h2 style={{ marginLeft: "575px", padding: "20px" }}>
        welcome to the admin panel
      </h2>
      <h4 style={{ padding: "20px" }}>all tour packages</h4>

      <div className="d-flex admin-panel container">
        <div className="admin-controls">
          <div className="admin-controls-item"></div>
          <div className="admin-controls-item">
            <h5>create a new tour package</h5>
            <Link
              to="/admin/package/create"
              style={{ marginLeft: "1.5vw" }}
              type="button"
              className="btn btn-primary"
              aria-current="page"
            >
              click-here
            </Link>
          </div>
        </div>
      </div>

      <div className="packagesList">
        {packages.map((packageItem) => (
          <div
            key={packageItem._id}
            className="card"
            style={{ width: "18rem" }}
          >
            <img
              src={
                packageItem.image
                  ? packageItem.image
                  : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              }
              className="card-img-top package-image"
              alt={packageItem.title}
            />
            <div className="card-body">
              <h5 className="card-title">{packageItem.title}</h5>
              <p className="card-text package-description">
                {packageItem.description}
              </p>
              <div className="package-actions">
                <button
                  onClick={() => {
                    navigate(`/admin/package/${packageItem._id}/update`);
                  }}
                  className="btn btn-warning"
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "1.5vw" }}
                  onClick={() => deletePackageRequest(packageItem._id)}
                >
                  delete
                </button>
              </div>
              <button
                onClick={() => {
                  navigate(`/package/${packageItem._id}`);
                }}
                className="btn btn-primary"
                style={{ marginTop: "0.5vw" }}
              >
                open details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminControl;
