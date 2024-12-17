import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePackage = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/package/${id}`);
        const data = await response.json();

        if (response.ok) {
          setPackageDetails(data.package);
        }
      } catch (error) {
        console.error("failed to fetch package details")
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
      <p><strong>description:</strong> {packageDetails.description}</p>
      <p><strong>price per person:</strong> Rs. {packageDetails?.pricePerPerson}</p>

      <h3>available dates:</h3>
      <ul>
        {packageDetails?.availableDates.map((date, index) => (
          <li key={index}>
            {new Date(date.startDate).toLocaleDateString()} -{" "}
            {new Date(date.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePackage;
