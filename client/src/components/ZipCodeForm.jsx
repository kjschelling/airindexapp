import React, { Component } from "react";

const APIKey = "f500ae6df08d77e7f8abede7b3712209";
class ZipCodeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: "",
      long: "",
      lat: "",
    };
  }

  handleZipCodeChange = (e) => {
    this.setState({ zipcode: e.target.value });
  };

  //handle submit makes an API call to geocode API to get long / lat from zipcode
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${this.state.zipcode}&appid=${APIKey}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        return JSON.stringify(jsonData);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="mt-5">Air Quality Index Information </h1>
        <div className="form-outline">
          <div className="card p-5 w-80 mt-5">
            <label className="form-label" htmlFor="zipCode">
              Zip Code
            </label>
            <input
              type="text"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleZipCodeChange}
              placeholder="Enter ZIP Code"
              className="form-control"
              ref={(input) => (this.forminput = input)}
            />
            <button className="btn btn-primary m-4" type="submit">
              Get Info
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ZipCodeForm;
