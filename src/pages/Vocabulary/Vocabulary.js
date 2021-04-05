import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { Word } from "../../components";
import { WORDS } from "../../config/words";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

const WordList = (props) => {
  const classes = useStyles();

  return (
    <div>
      {WORDS ? (
        <Grid className={classes.container}>
          {WORDS.map((currentWord, index) => (
            <Box className={classes.box} key={index}>
              <Word
                main={currentWord.french}
                translation={currentWord.persian}
                written={currentWord.arabic}
                nature={currentWord.nature}
              />
            </Box>
          ))}
        </Grid>
      ) : (
        "No words found in dictionary"
      )}
    </div>
  );
};

export default WordList;
