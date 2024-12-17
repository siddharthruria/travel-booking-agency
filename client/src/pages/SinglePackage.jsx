import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const SinglePackage = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/package/${id}`);
        const data = await response.json();

        if (response.ok) {
          setPackageDetails(data.package);
        }
      } catch (error) {
        console.error("failed to fetch package details");
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [id]);

  if (loading) return <p>loading...</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{packageDetails?.title}</h1>
      <img
        src={packageDetails?.image}
        alt={packageDetails?.title}
        className="img-fluid mb-3"
      />
      <p>
        <strong>description:</strong> {packageDetails.description}
      </p>
      <p>
        <strong>price per person:</strong> Rs. {packageDetails?.pricePerPerson}
      </p>
      <h3>available dates:</h3>
      <ul>
        {packageDetails?.availableDates.map((date, index) => (
          <li key={index}>
            {new Date(date.startDate).toLocaleDateString()} -{" "}
            {new Date(date.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
      {!isAdmin && (
        <>
          <div>
            <button
              onClick={() => {
                navigate(`/${packageDetails._id}/booking`);
              }}
              className="btn btn-primary"
              style={{ marginTop: "0.5vw" }}
            >
              create a booking
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePackage;
