import "./App.css";
import AirIndexCard from "./components/AirIndexCard";
import ZipCodeForm from "./components/ZipCodeForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="container">
        <div className="d-inline-flex">
          {/* <AirIndexCard /> */}
          <ZipCodeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
