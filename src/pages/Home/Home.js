import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import React from "react";

import { Button } from "../../components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Box className={classes.button}>
        <Button linkTo="/vocabulary" text="Vocabulary"></Button>
      </Box>
    </Grid>
  );
};

export default Home;
