import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  FormControl,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    color: "red",
    padding: "10px",
  },
  search: {
    marginTop: "10px",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchField: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  searchFieldButton: {
    paddingRight: "10px",
    paddingLeft: "10px",
    backgroundColor: "#003f7f",
  },
}));

export default function JobSearch(props) {
  const classes = useStyles();
  const { onCityChange, error } = props;
  const [searchCityTerm, setSearchCityTerm] = useState(props.city);
  const [searchJobTerm, setSearchJobTerm] = useState(props.jobTerm);
  const [searchCountryTerm, setSearchCountryTerm] = useState("");
  const [isSearching, setSearching] = useState(false);
  const hasError = error ? true : false;

  console.log('searchCityTerm , searchCountryTerm', 'searchJobTerm',props,  searchCityTerm, searchCountryTerm, searchJobTerm);

  const handleSearchCity = (event) => {
    event.preventDefault();
    setSearchCityTerm(event.target.value);
  };

  const handleSearchJob = (event) => {
    event.preventDefault();
    setSearchJobTerm(event.target.value);
  };

  const handleSearchCountry = (event) => {
    event.preventDefault();
    setSearchCountryTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearching(true);

    onCityChange(searchCityTerm, searchCountryTerm, searchJobTerm);
    if (isSearching) {
      setTimeout(() => {
        setSearching(false);
        // setSearchCityTerm("");
        // setSearchCountryTerm("");
        // setSearchJobTerm('');
      }, 500);
    }
  };

  return (
    <div className={classes.search}>
      <Grid container alignItems="flex-end">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <FormControl className={classes.fieldContainer}>
          <TextField
              className={classes.searchField}
              id="outlined-search-job"
              label="Search Job"
              type="search"
              variant="outlined"
              error={hasError}
              value={searchJobTerm}
              onChange={handleSearchJob}
            />
            <TextField
              className={classes.searchField}
              id="outlined-search-city"
              label="Search City"
              type="search"
              variant="outlined"
              error={hasError}
              value={searchCityTerm}
              onChange={handleSearchCity}
            />
            {/* <TextField
              className={classes.searchField}
              id="outlined-search-country"
              label="Search Country"
              type="search"
              variant="outlined"
              error={hasError}
              onChange={handleSearchCountry}
            /> */}
            <Button
              className={classes.searchFieldButton}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Find Jobs
            </Button>
            {error && (
              <Typography className={classes.error}>{error}</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
