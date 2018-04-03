import React, { Component } from 'react';
import './MainPage.css';
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Assignment from "material-ui-icons/Assignment";
import LiveHelp from "material-ui-icons/LiveHelp";
import AssistantPhoto from "material-ui-icons/AssistantPhoto";
import Visibility from "material-ui-icons/Visibility";
import pink from "material-ui/colors/pink";
import green from "material-ui/colors/green";
import Avatar from "material-ui/Avatar";

const styles = {
  avatar: {
    margin: 10
  },
  pinkAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: pink[500]
  },
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  },
  row: {
    display: "flex",
    justifyContent: "center"
  }
};

class MainPage extends Component {
  
  render() {
    const { classes } = this.props;
    
    return <div className="MainPage">
        <h1 className="MainPage__title">Ameen Merchant App</h1>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.row}>
              <Avatar>
                <Assignment />
              </Avatar>
              Expansion Panel 1
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>;
  }
}

// export default MainPage;
export default withStyles(styles)(MainPage);
