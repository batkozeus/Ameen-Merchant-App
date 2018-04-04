import React from 'react';
import "./ContactItem.css";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MailOutline from "material-ui-icons/MailOutline";
import blue from "material-ui/colors/blue";


const styles = {
  root: {
    flexGrow: 1,
    padding: 4
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
  mailButton: {
    color: "white",
    backgroundColor: blue[700],
    borderRadius: 7,
    textTransform: "none",
    paddingTop: 8,
    paddingRight: 24,
    paddingBottom: 8,
    paddingLeft: 18,
    fontSize: 16
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
  const { classes, children, linkName, linkAdress } = props;

  if (linkName === 'Email') {
    return <div className={classes.root}>
        <AppBar className={classes.app} position="static">
          <Toolbar>
            <IconButton className={classes.iconButton} color="inherit" aria-label="Menu">
              <MailOutline className="logo mailLogo" />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {linkName}
            </Typography>
            <Button className={classes.mailButton}>
              <a href={linkAdress} className="myRef">
                Contact us >
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>;
  } 
  else {
    return <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <IconButton className={classes.iconButton} color="inherit" aria-label="Menu">
            {children}
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {linkName}
          </Typography>
          <Button className={classes.menuButton}>
            <a href={linkAdress} className="myRef">
              Visit page >
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>;
  }
};

export default withStyles(styles)(ContactItem);