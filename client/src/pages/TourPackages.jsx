import React, { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { PackageContext } from "../context/PackageContext";

const TourPackages = () => {
  const { isAdmin } = useContext(AdminContext);
  const { packages } = useContext(PackageContext);
  const { fetchAllPackagesRequest } = useContext(PackageContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  fetchAllPackagesRequest();

  return (
    <>
      <h2 style={{ marginLeft: "575px", padding: "20px" }}>
        all tour packages available
      </h2>
      <h4 style={{ padding: "20px" }}>all tour packages</h4>

      <div className="d-flex admin-panel container"></div>

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
              <div className="package-actions"></div>
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

export default TourPackages;
