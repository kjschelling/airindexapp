import React from "react";

export default function ZipCodeForm({ zipCode, setZipCode, postZipCode }) {
  const handleSubmit = () => {
    postZipCode(zipCode);
  };
  return (
    <div className="">
      <h1 className="mt-5">Air Quality Index Information </h1>
      <div className="form-outline">
        <form onSubmit={handleSubmit} className="card p-5 w-80 mt-5">
          <label className="form-label" htmlFor="zipCode">
            Enter your zip code
          </label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter zipcode"
            className="form-control"
          />
          <button className="btn btn-primary m-4" type="submit">
            Get Info
          </button>
        </form>
      </div>
    </div>
  );
}
