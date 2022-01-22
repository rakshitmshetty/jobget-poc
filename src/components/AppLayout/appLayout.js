import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  Avatar,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import AttachFileOutlined from "@material-ui/icons/AttachFileOutlined";
import WebAssetOutlined from "@material-ui/icons/WebAssetOutlined";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  layout: {
    paddingTop: "5vh",
  },
  noListing:{
    textAlign:"center"
  }
});

export default function AppLayout(props) {
  const classes = useStyles();
  const { currentJobSearch} = props;

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {currentJobSearch.length > 0 ? (
            currentJobSearch.map((ele, index) => (
              <JobCard jobDetails={ele} index={index} key={index} />
            ))
          ) : (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title, classes.noListing}
                  color="primary"
                  gutterBottom
                >
                  No Job Listings
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

const useStylesJobCard = makeStyles({
  root: {
    minWidth: "inherit",
    marginTop: "1em",
    display: "flex",
    borderRadius: "1em",
    "&:hover": {
      border: "2px solid black",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  layout: {},
  jobCompanyDetails: {
    display: "flex",
    justifyContent: "row",
  },
  jobInfo: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 16px 24px 16px",
    minWidth: "6vw",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobDescription: {
    display: "flex",
    flexDirection: "column",
    minWidth: "40rem",
  },
  orange: {
    color: "F0FFFF",
    backgroundColor: orange[500],
  },
  jobActions: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 16px 24px 16px",
    justifyContent: "space-between",
  },
  jobInfoIcons: {
    flexDirection: "row",
    justifyContent: "end",
  },
  jobRoleInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobPosted: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: "5rem",
    marginTop: "5px",
  },
});

const DynamicHTML = (inputHtml) => {
  return { __html: inputHtml };
};

const JobCard = (props) => {
  const classes = useStylesJobCard();
  const { jobDetails, index } = props;

  return (
    <Card className={classes.root} variant="outlined" key={index}>
      <div className={classes.jobInfo}>
        <div className={classes.jobInfoAvatar}>
          <Avatar>{jobDetails?.hiring_company.name.split("")[0]}</Avatar>
        </div>
        <div className={classes.jobInfoIcons}>
          <AttachFileOutlined color="disabled" />
          <WebAssetOutlined color="disabled" />
        </div>
      </div>
      <div className={classes.jobDescription}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {jobDetails?.name}
          </Typography>
          <div className={classes.jobCompanyDetails}>
            <Typography
              variant="h5"
              className={classes.title}
              color="primary"
              gutterBottom
            >
              {jobDetails?.hiring_company.name + " - "}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {jobDetails?.city}
            </Typography>
          </div>
          <div className={classes.jobRoleInfo}>
            <div className={classes.jobPosted}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {"Posted :" + jobDetails?.posted_time_friendly}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {"Source:" + jobDetails?.source}
              </Typography>
            </div>
          </div>
          <p dangerouslySetInnerHTML={DynamicHTML(jobDetails?.snippet)}></p>
        </CardContent>
      </div>
      <div className={classes.jobActions}>
        <div>
          <Button className={classes.buttonStyle} variant="outlined">
            Save
          </Button>
          <Button
            className={classes.buttonStyle}
            color="primary"
            variant="outlined"
          >
            Apply
          </Button>
        </div>
        <div>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};
