import { useState } from "react";

import SearchForm from "./SearchForm";
import ResultsCard from "./ResultsCard";
import config from "../config.json";

const Container = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  async function getData(url = "") {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  const apiCall = async ({ city, units }) => {
    const url = `${config.url}?q=${city}&appid=${config.key}&units=${units}`;
    const request = getData(url);
    const response = await request;
    if (response != null) {
      setWeather(response.main);
      setCity(response.name);
      setError(null);
    } else {
      setError("Something went wrong. Please try again.");
      setWeather(null);
      setCity(null);
    }
  };

  return (
    <div className="container">
      <div className="container p-3">
        <h1>Learn the weather, plan your day!</h1>

        <SearchForm apiCall={apiCall} />
        {error != null && (
          <div className="container p-1">
            <div className="alert alert-danger fade show" role="alert">
              {error}
            </div>
          </div>
        )}
      </div>
      <div className="container p-3">
        {weather !== null && <ResultsCard weather={weather} city={city} />}
      </div>
    </div>
  );
};

export default Container;
