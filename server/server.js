/***
 * simple web server
 */

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const airPollutionBaseUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=${process.env.APIKey}`;

const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("this is working");
});

app.post("/post_zipCode", async (req, res) => {
  let { zipCode } = req.body;
  console.log(zipCode);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Gets the zip code data from the front end
// sends that data to the geocode API
// getting the long/lat data from the geocode API
// sending that long/lat data to the air pollution data
// get the air pollution data and display it
