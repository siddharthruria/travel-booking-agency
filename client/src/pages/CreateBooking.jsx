import React, { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import {  useNavigate, useParams } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";

const CreateBooking = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const { bookings, createBooking } = useContext(BookingContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfTravellers, setNumberOfTravellers] = useState(0);
  const [bookingDates, setBookingDates] = useState([
    { startDate: "", endDate: "" },
  ]);
  const [specialRequest, setSpecialRequest] = useState("");

  const handleDateChange = (index, field, value) => {
    const updatedDates = [...bookingDates];
    updatedDates[index][field] = value;
    setBookingDates(updatedDates);
  };

  const addDateRange = () => {
    setBookingDates([...bookingDates, { startDate: "", endDate: "" }]);
  };

  const removeDateRange = (index) => {
    const updatedDates = bookingDates.filter((_, i) => i !== index);
    setBookingDates(updatedDates);
  };

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
    try {
      createBooking({
        name,
        email,
        phone,
        bookingDates: bookingDates.map((date) => ({
          startDate: new Date(date.startDate),
          endDate: new Date(date.endDate),
        })),
        packageId: id,
        numberOfTravellers,
        specialRequest,
      });
      enqueueSnackbar("booking created successfully :)", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("error creating the booking :/", {
        variant: "error",
      });
      console.error(error.message);
    }
  };

  return (
    <div className="container position-relative">
      <h2 className="my-3 position-absolute start-50 translate-middle">
        create a booking for the tour package
      </h2>
      <form className="py-5 my-4" onSubmit={handleSubmitFunction}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfTravellers" className="form-label">
            number of travellers
          </label>
          <input
            type="number"
            className="form-control"
            id="numberOfTravellers"
            name="numberOfTravellers"
            value={numberOfTravellers}
            onChange={(e) => setNumberOfTravellers(e.target.value)}
            min="0"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="availableDates">booking dates</label>
          {bookingDates.map((date, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <input
                type="date"
                className="form-control me-2"
                value={date.startDate}
                onChange={(e) =>
                  handleDateChange(index, "startDate", e.target.value)
                }
                required
              />
              <input
                type="date"
                className="form-control me-2"
                value={date.endDate}
                onChange={(e) =>
                  handleDateChange(index, "endDate", e.target.value)
                }
                required
              />
              {bookingDates.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeDateRange(index)}
                >
                  remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={addDateRange}
          >
            add date range
          </button>
        </div>
        <div className="mb-3">
          <label htmlFor="specialRequest" className="form-label">
            special requests
          </label>
          <input
            type="text"
            className="form-control"
            id="specialRequest"
            name="specialRequest"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
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

export default CreateBooking;
