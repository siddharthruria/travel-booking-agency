import React, { useState, useContext, useEffect } from "react";
import { useSnackbar } from "notistack";
import { PackageContext } from "../context/PackageContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePackage = () => {
  const { id } = useParams();
  const { fetchSpecificPackageRequest, specificPackage, updatePackageRequest } =
    useContext(PackageContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [availableDates, setAvailableDates] = useState([
    { startDate: "", endDate: "" },
  ]);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetchSpecificPackageRequest(id);
    };
    fetchData();
  }, [id, fetchSpecificPackageRequest]);

  useEffect(() => {
    if (specificPackage) {
      setTitle(specificPackage.title);
      setDescription(specificPackage.description);
      setPricePerPerson(specificPackage.pricePerPerson);
      setAvailableDates(specificPackage.availableDates);
      setImage(specificPackage.image);
    }
  }, [specificPackage]);

  const handleDateChange = (index, field, value) => {
    const updatedDates = [...availableDates];
    updatedDates[index][field] = value;
    setAvailableDates(updatedDates);
  };

  const addDateRange = () => {
    setAvailableDates([...availableDates, { startDate: "", endDate: "" }]);
  };

  const removeDateRange = (index) => {
    const updatedDates = availableDates.filter((_, i) => i !== index);
    setAvailableDates(updatedDates);
  };

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
    try {
      updatePackageRequest(id, {
        title,
        description,
        pricePerPerson,
        availableDates,
        image,
      });
      enqueueSnackbar("successfully updated tour package details", {
        variant: "success",
      });
      navigate("");
    } catch (error) {
      enqueueSnackbar("error updating the tour package details :/", {
        variant: "error",
      });
      console.error(error.message);
    }
  };

  return (
    <div className="container position-relative">
      <h2 className="my-3 position-absolute start-50 translate-middle">
        update the tour package
      </h2>
      <form className="py-5 my-4" onSubmit={handleSubmitFunction}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={"" || title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="description"
            className="form-control"
            id="description"
            name="description"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pricePerPerson" className="form-label">
            price per person
          </label>
          <input
            type="number"
            className="form-control"
            id="pricePerPerson"
            name="pricePerPerson"
            value={pricePerPerson || 0}
            onChange={(e) => setPricePerPerson(e.target.value)}
            min="0"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="availableDates">available dates</label>
          {availableDates.map((date, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <input
                type="date"
                className="form-control me-2"
                value={date.startDate || ""}
                onChange={(e) =>
                  handleDateChange(index, "startDate", e.target.value)
                }
                required
              />
              <input
                type="date"
                className="form-control me-2"
                value={date.endDate || ""}
                onChange={(e) =>
                  handleDateChange(index, "endDate", e.target.value)
                }
                required
              />
              {availableDates.length > 1 && (
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
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={image || ""}
            onChange={(e) => setImage(e.target.value)}
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

export default UpdatePackage;
