import React, { Component } from "react";

class ZipCodeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: "",
    };
  }

  handleZipCodeChange = (e) => {
    this.setState({ zipcode: e.target.value });
  };

  //handle submit makes an API call to geocode API to get long / lat from zipcode
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.zipcode);
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
