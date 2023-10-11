import React from "react";

export default function ZipCodeForm() {
  return (
    <div className="">
      <h1 class="mt-5">Air Quality Index Information </h1>
      <div class="form-outline">
        <div class="card p-5 w-80 mt-5">
          <label class="form-label" for="form12">
            Enter your zip code
          </label>
          <input
            type="text"
            id="form12"
            placeholder="Enter your zipcode"
            class="form-control"
          />
          <button class="btn btn-primary m-4">Get Info</button>
        </div>
      </div>
    </div>
  );
}
