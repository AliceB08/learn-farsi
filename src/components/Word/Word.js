import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper, Box } from "@material-ui/core";

import { COLOURS } from "../../config/colours";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // minWidth: 600,
    margin: 16,
    // alignSelf: "stretch",
    maxWidth: 800,
    flex: 1,
  },
  leftBanner: { width: 16 },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    padding: 24,
  },
  translation: {
    color: COLOURS.grey,
  },
});

const Word = (props) => {
  const classes = useStyles();

  const wordNatureToColour = {
    nom: COLOURS.green,
    adjectif: COLOURS.blue,
    verbe: COLOURS.orange,
    adverbe: COLOURS.yellow,
    préposition: COLOURS.red,
    conjonction: COLOURS.red,
    nombre: COLOURS.pink,
    pronom: COLOURS.navy,
  };

  return (
    <Paper raised={true} elevation={3} className={classes.root}>
      <Box
        className={classes.leftBanner}
        style={{ backgroundColor: wordNatureToColour[props.nature] }}
      ></Box>
      <Box className={classes.textContainer}>
        <Typography gutterBottom variant="h5">
          {props.main}
        </Typography>
        <Box fontStyle="italic">
          <Typography variant="h5" className={classes.translation}>
            {props.translation} - {props.written}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Word;
