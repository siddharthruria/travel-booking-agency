import React, { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const GetBookings = () => {
  const { fetchAllBookings, bookings } = useContext(BookingContext);
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    fetchAllBookings();
  }, [fetchAllBookings]);

  fetchAllBookings();

  return (
    <>
      <h2 style={{ marginLeft: "575px", padding: "20px" }}>all bookings</h2>

      <div className="d-flex admin-panel container"></div>

      <div className="bookingsList">
        {bookings.map((booking) => (
          <div key={booking?._id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{booking?.name}</h5>
              <p className="card-text package-description">{booking?.email}</p>
              <div className="package-actions"></div>
              <button
                onClick={() => {
                  navigate(`/invoice/${booking?._id}`);
                }}
                className="btn btn-primary"
                style={{ marginTop: "0.5vw" }}
              >
                open invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetBookings;
