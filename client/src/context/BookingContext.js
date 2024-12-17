import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  // ------------------------------  CREATING A TOUR PACKAGE BOOKING ------------------------------

  const createBooking = async (details) => {
    try {
      const response = await fetch("https://travel-agency-server-mk0z.onrender.com/api/booking/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const responseData = await response.json();

      if (response.ok) {
        setBookings([...bookings, responseData.newBooking]);
        navigate("/booking/allBookings");
      }
    } catch (error) {
      console.error("error creating the booking :/");
    }
  };

  // ---------------------------------  GET ALL BOOKINGS ---------------------------------

  const fetchAllBookings = async () => {
    try {
      const response = await fetch(
        "https://travel-agency-server-mk0z.onrender.com/api/booking/yourBookings",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setBookings(responseData.bookings || []);
      } else {
        return console.error("error fetching the bookings :/");
      }
    } catch (error) {
      return console.error("error fetching the bookings :/");
    }
  };

  // ---------------------------------  GET INVOICE FOR A BOOKING ---------------------------------

  const fetchInvoice = async (id) => {
    try {
      const response = await fetch(
        `https://travel-agency-server-mk0z.onrender.com/api/booking/invoice/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();

      if (response.ok) {
        return responseData.invoice;
      } else {  
        console.error("error fetching invoice:", responseData.error);
      }
    } catch (error) {
      console.error("error fetching invoice:", error.message);
    }
  };

  return (
    <BookingContext.Provider
      value={{ bookings, createBooking, fetchAllBookings, fetchInvoice }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
