import React, { Component } from 'react';
import "./ContactItem.css";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MailOutline from "material-ui-icons/MailOutline";
import blue from "material-ui/colors/blue";
import twitterLogo from "./assets/twitter.svg";
import facebookLogo from "./assets/facebook.svg";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
    color: "black"
  },
  iconButton: {
    marginLeft: -12,
    marginRight: 20
  },
  app: {
    backgroundColor: "#fff"
  },
  menuButton: {
    color: "white",
    backgroundColor: blue[700],
    borderRadius: 7,
    textTransform: "none",
    paddingTop: 8,
    paddingRight: 24,
    paddingBottom: 8,
    paddingLeft: 24,
    fontSize: 16
  }
};

const ContactItem = props => {
  const { classes } = props;

  return <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <IconButton className={classes.iconButton} color="inherit" aria-label="Menu">
            {/* <MailOutline /> */}
            <img className="twitterLogo" src={twitterLogo} alt="twitterLogo" />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Twitter
          </Typography>
          <Button className={classes.menuButton}>
            <a href="https://twitter.com/?lang=ru" className="myRef">
              Visit page >
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>;
};

export default withStyles(styles)(ContactItem);