import "./App.css";
// import AirIndexCard from "./components/AirIndexCard";
import ZipCodeForm from "./components/ZipCodeForm";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

//state lifecycle

//get the input data, send it to the backend
// needs state management useState and useEffect

// storage the states

//gets the data from the backend
// displays the response data

//gets the data from the input fetches data from the geocode API to send to Air pollution API

function App() {

  const [zipCode, setZipCode] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  

//write a function to get long & lat data with geocode

  async function getLongitudeLatitude(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/post_zipCode", {
        zipCode,
      });
    } catch (error) {
      console.log("Error", error);
    }
  }



  

  // write a function to handle submit

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="d-inline-flex">
          {/* <AirIndexCard /> based on a conditional */}
          <ZipCodeForm setZipCode={setZipCode} postZipCode={postZipCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
