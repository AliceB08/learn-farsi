import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { COLOURS } from "../../config/colours";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: `linear-gradient(45deg, ${COLOURS.darkPink}, ${COLOURS.orange})`,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: COLOURS.white,
    padding: "0 30px",
  },
  link: { textDecoration: "none", color: "inherit" },
  input: {
    color: COLOURS.white,
    "&::before": {
      borderColor: COLOURS.white,
    },
    "&:hover::before": {
      borderColor: COLOURS.white + " !important",
    },
    "&::after": {
      borderColor: COLOURS.white,
    },
  },
});

class NavBar extends Component {
  state = {
    searchString: "",
  };

  findWord = () => {
    console.log(this.state.searchString);
  };

  onSearchInputChange = (event) => {
    console.log("Search changed ..." + event.target.value);
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.findWord();
  };

  // <Link to="/">Home</Link>
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.root}>
          <Link to="/" className={classes.link}>
            <Toolbar>
              <Typography variant="h5" color="inherit">
                Farsi - فارسی
              </Typography>
            </Toolbar>
          </Link>
          <TextField
            id="searchInput"
            placeholder="Search for words"
            margin="normal"
            onChange={this.onSearchInputChange}
            InputProps={{
              className: classes.input,
            }}
          />
        </AppBar>
        <Toolbar />
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
