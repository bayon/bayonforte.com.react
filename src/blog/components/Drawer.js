import {
    Divider, List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { useState } from "react";

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});


function DrawerComponent(props){

    const [left,setLeft] = useState(false)

    setLeft(false)
    const { classes } = props;
    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={props.toggleDrawerHandler}
          onKeyDown={props.toggleDrawerHandler}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
  return (

      <Drawer open={props.left} onClose={props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    
  )
}

export default withStyles(styles)(DrawerComponent);
