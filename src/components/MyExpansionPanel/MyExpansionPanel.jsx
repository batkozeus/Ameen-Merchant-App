import React, { Component } from "react";
import "./MyExpansionPanel.css";
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
import indigo from "material-ui/colors/indigo";
import blue from "material-ui/colors/blue";
import teal from "material-ui/colors/teal";
import amber from "material-ui/colors/amber";
import Avatar from "material-ui/Avatar";

const styles = {
  indigoAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: indigo[500]
  },
  blueAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: blue[500]
  },
  tealAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: teal[500]
  },
  amberAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: amber[500]
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
};

class MyExpansionPanel extends Component {
  render() {
    const { classes } = this.props;

    if (this.props.panelTheme === 'setup'){
      return <ExpansionPanel className="MyPanel">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.row}>
              <Avatar className={classes.indigoAvatar}>
                <Assignment />
              </Avatar>
              How to Setup
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.props.children}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>;
    }
    if (this.props.panelTheme === "run") {
      return <ExpansionPanel className="MyPanel">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.row}>
              <Avatar className={classes.blueAvatar}>
                <LiveHelp />
              </Avatar>
              How to Run App
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.props.children}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>;
    }
    if (this.props.panelTheme === "compliant") {
      return <ExpansionPanel className="MyPanel">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.row}>
              <Avatar className={classes.tealAvatar}>
                <AssistantPhoto />
              </Avatar>
              Standart Compliant
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.props.children}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>;
    }
    if (this.props.panelTheme === "secrets") {
      return <ExpansionPanel className="MyPanel">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.row}>
              <Avatar className={classes.amberAvatar}>
                <Visibility />
              </Avatar>
              Secrets
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.props.children}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>;
    }  
  }
}

// export default MainPage;
export default withStyles(styles)(MyExpansionPanel);