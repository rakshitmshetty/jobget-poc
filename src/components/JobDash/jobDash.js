import { Container } from "@material-ui/core";
import React from "react";

import AppLayout from "../AppLayout/appLayout";
import JobSearch from "../JobSearch/jobSearch";

export default function JobDash(props) {
  const {
    city,
    country,
    currentJobSearch,
    onCityChange,
    onCountryChange,
    jobTerm,
    error,
  } = props;
    return (
      <div>
        <div>
          <h3>Job Search:</h3>
        </div>
        <JobSearch
          city={city}
          country={country}
          jobTerm={jobTerm}
          onCityChange={onCityChange}
          error={error}
        />
        <Container maxWidth="md">
          <AppLayout currentJobSearch={currentJobSearch}/>
        </Container>
      </div>
    );
}
