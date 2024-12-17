import React, { createContext, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export const PackageContext = createContext();

const PackageProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [packages, setPackages] = useState([]);
  const [specificPackage, setSpecificPackage] = useState(null);
  const navigate = useNavigate();

  // ------------------------------  CREATING A NEW TOUR PACKAGE ------------------------------

  const createPackageRequest = async (tourPackageData) => {
    try {
      const response = await fetch(
        "http://localhost:5555/api/admin/package/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tourPackageData),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setPackages([...packages, responseData.newPackage]);
        navigate("/admin");
      } else {
        return console.error("error creating new package :/");
      }
    } catch (error) {
      return console.error("error creating new package :/");
    }
  };

  // ---------------------------------  GET ALL TOUR PACKAGES ---------------------------------

  const fetchAllPackagesRequest = async () => {
    try {
      const response = await fetch("http://localhost:5555/api/package/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      if (response.ok) {
        setPackages(responseData.tourPackages || []);
      } else {
        return console.error("error fetching the packages :/");
      }
    } catch (error) {
      return console.error("error fetching the packages :/");
    }
  };

  // -------------------------------  GET SPECIFIC TOUR PACKAGE -------------------------------

  const fetchSpecificPackageRequest = async (id) => {
    try {
      const response = await fetch(`http://localhost:5555/api/package/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      if (response.ok) {
        setSpecificPackage(responseData.package);
        console.log(specificPackage);
      } else {
        return console.error("error fetching the package :/");
      }
    } catch (error) {
      return console.error("error fetching the package :/");
    }
  };

  // -------------------------------  UPDATE SPECIFIC TOUR PACKAGE -------------------------------

  const updatePackageRequest = async (id, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:5555/api/admin/package/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        const updatedPackages = packages.map((packageItem) =>
          packageItem._id === id
            ? { ...packageItem, ...updatedData }
            : packageItem
        );
        setPackages(updatedPackages);
      }
    } catch (error) {
      return console.error("error updating the package :/");
    }
  };

  // -------------------------------  DELETE SPECIFIC TOUR PACKAGE -------------------------------

  const deletePackageRequest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5555/api/admin/package/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        const newTourPackages = packages.filter(
          (packageItem) => packageItem._id !== id
        );
        setPackages(newTourPackages);
        enqueueSnackbar("tour package deleted successfully :)", {
          variant: "info",
        });
      }
    } catch (error) {
      enqueueSnackbar("error deleting tour package :/", {
        variant: "error",
      });
      return console.error("error deleting the package :/");
    }
  };
  

  return (
    <PackageContext.Provider
      value={{
        packages,
        createPackageRequest,
        fetchAllPackagesRequest,
        specificPackage,
        setSpecificPackage,
        fetchSpecificPackageRequest,
        updatePackageRequest,
        deletePackageRequest,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export default PackageProvider;
