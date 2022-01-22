import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs, Chip, Avatar, Badge } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#003f7f",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textTransform: "initial",
    paddingTop: "1vh",
    paddingBottom: "1px",
    content: "centered",
  },
  appName: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  userInfo: {
    paddingTop: "11px",
    paddingRight: "4vw",
  },
});

export default function AppHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.appName}>
        <h3>JobGet</h3>
      </div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Find Jobs" />
        <Tab label="Companies" disabled />
        <Tab label="Employers / Post Job" disabled />
      </Tabs>
      <div className={classes.userInfo}>
        <Badge color="secondary" badgeContent={0} showZero>
          <Chip avatar={<Avatar>U</Avatar>} label="User Name" />
        </Badge>
      </div>
    </Paper>
  );
}
