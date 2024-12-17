import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";

const Invoices = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const { fetchInvoice } = useContext(BookingContext);

  useEffect(() => {
    const getInvoiceDetails = async () => {
      const fetchedInvoice = await fetchInvoice(id);
      setInvoice(fetchedInvoice);
    };

    getInvoiceDetails();
  }, [id]);

  if (!invoice) {
    return <h3>loading invoice...</h3>;
  }

  const { booking, totalPrice } = invoice;
  const {
    name,
    email,
    phone,
    numberOfTravellers,
    specialRequest,
    package: packageDetails,
  } = booking;

  return (
    <div className="container">
      <h2 className="my-4">booking invoice</h2>
      <div className="card p-4">
        <h4>booking details</h4>
        <p>
          <strong>name:</strong> {name}
        </p>
        <p>
          <strong>email:</strong> {email}
        </p>
        <p>
          <strong>phone:</strong> {phone}
        </p>
        <p>
          <strong>number of travellers:</strong> {numberOfTravellers}
        </p>
        <p>
          <strong>special request:</strong> {specialRequest || "None"}
        </p>

        <h4 className="mt-4">package details</h4>
        <p>
          <strong>title:</strong> {packageDetails.title}
        </p>
        <p>
          <strong>description:</strong> {packageDetails.description}
        </p>
        <p>
          <strong>price per person:</strong> ${packageDetails.pricePerPerson}
        </p>

        <h4 className="mt-4">Invoice Summary</h4>
        <p>
          <strong>total price:</strong> ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default Invoices;
