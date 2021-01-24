import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

function PopupList({
  name,
  flag,
  todayCases,
  todayRecovered,
  critical,
  todayDeaths,
}) {
  return (
    <List>
      <ListItem style={{ margin: "0", padding: "0" }}>
        <ListItemAvatar>
          <Avatar alt={name} src={flag} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h6" style={{ textAlign: "right" }}>
              {name}
            </Typography>
          }
        />
      </ListItem>

      <ListItem style={{ margin: "0", padding: "0", display: "block" }}>
        <ListItemText
          primary={
            <Typography variant="body2" style={{ textAlign: "left" }}>
              Today Cases: {todayCases}
            </Typography>
          }
        />
      </ListItem>
      <ListItem style={{ margin: "0", padding: "0", display: "block" }}>
        <ListItemText
          primary={
            <Typography variant="body2" style={{ textAlign: "left" }}>
              Today Recovered: {todayRecovered}
            </Typography>
          }
        />
      </ListItem>

      <ListItem style={{ margin: "0", padding: "0", display: "block" }}>
        <ListItemText
          primary={
            <Typography variant="body2" style={{ textAlign: "left" }}>
              Today Deaths: {todayDeaths}
            </Typography>
          }
        />
      </ListItem>
      <ListItem style={{ margin: "0", padding: "0", display: "block" }}>
        <ListItemText
          primary={
            <Typography variant="body2" style={{ textAlign: "left" }}>
              Critical: {critical}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

export default PopupList;
