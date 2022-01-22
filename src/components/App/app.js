import "./app.css";
import React, { useEffect, useState } from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import JobDash from "../JobDash/jobDash";
import AppHeader from "../AppHeader/appHeader";

function App() {
  const [city, setCity] = useState("Santa Monica, CA");
  const [country, setCountry] = useState("");
  const [jobTerm, setJobTerm] = useState("Perl Job");
  const [error, setError] = useState(null);
  const [currentJobSearch, setCurrentJobSearch] = useState([]);

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontSize: 14,
      h5: {
        fontWeight: 600,
      },
    },
  });

  useEffect(() => {
    getJobListings(city, country, jobTerm)
      .then((lisitngs) => {
        setCurrentJobSearch(lisitngs);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [city, country, jobTerm, error]);

  const handleCityChange = (city, country, jobtype) => {
    console.log(city, country, jobtype);
    setCity(city);
    setCountry(country);
    setJobTerm(jobtype);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <AppHeader></AppHeader>
      </div>
      <CssBaseline />
      <Container maxWidth="lg">
        <JobDash
          city={city}
          country={country}
          jobTerm={jobTerm}
          currentJobSearch={currentJobSearch}
          onCityChange={handleCityChange}
          error={error}
        />
      </Container>
    </ThemeProvider>
  );
}

function getJobListings(city, country, jobTerm) {
  const generateUrl = `${process.env.REACT_APP_API_URL}${jobTerm}&location=${city}&radius_miles=25&days_ago=1&jobs_per_page=10&page=1&api_key=${process.env.REACT_APP_API_KEY}`;
  return fetch(generateUrl)
    .then((res) => handleResponse(res))
    .then((jobResults) => {
      if (jobResults?.jobs?.length) {
        return jobResults.jobs;
      } else {
        return [];
      }
    });
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: Location " + response.statusText.toLowerCase());
  }
}

export default App;
