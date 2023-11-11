import React, { Component, useState } from "react";

function ZipCodeForm() {
  // setting states
  const [zipcode, setZipcode] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [airData, setAirData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // fetching coordinates
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},us&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(zipcode);
      const data = await response.json();
      if (data.length === 0) {
        throw new Error("Invalid zipcode");
      }
      //
      setCoordinates({ lat: data.lat, lon: data.lon });
      console.log(coordinates); //do i have the coordinates?

      //yes, then make the API call with the correct coordinates
      if (coordinates) {
        const airIndexResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const pollutionData = await airIndexResponse.json();
        setAirData(pollutionData);
        console.log(airData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="mt-5">Air Quality Index Information </h1>
      <div className="form-outline">
        <div className="card p-5 w-80 mt-5">
          <label className="form-label" htmlFor="zipCode">
            Zip Code
          </label>
          <input
            type="text"
            name="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder="Enter ZIP Code"
            className="form-control"
          />
          <button className="btn btn-primary m-4" type="submit">
            Get Info
          </button>
        </div>
      </div>
    </form>
  );
}

export default ZipCodeForm;
