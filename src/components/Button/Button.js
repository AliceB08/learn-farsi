import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

import { COLOURS } from "../../config/colours";

const useStyles = makeStyles({
  root: {
    margin: 16,
    maxWidth: 800,
    flex: 1,
    background: `linear-gradient(45deg, ${COLOURS.blue}, ${COLOURS.green})`,
  },
  textContainer: {
    textDecoration: "none",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flex: 1,
    padding: 24,
    margin: 16,
  },
});

const Word = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Link className={classes.textContainer} to={props.linkTo}>
        <Typography variant="h4">{props.text}</Typography>
      </Link>
    </Paper>
  );
};

export default Word;
