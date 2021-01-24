import React from "react";
import { customStyles } from "../styles/custom-styles";
import Container from "@material-ui/core/Container";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

function CountryList({ countries, color, type, loading }) {
  const classes = customStyles();

  return loading ? (
    <Container className={classes.loadingContainer}>
      <CircularProgress className={classes.spinner}/>
    </Container>
  ) : (
    <List className={classes.listRoot}>
      {countries &&
        countries.map((country, i) => {
          return (
            <Container key={i}>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography style={{ textAlign: "left" }}>
                      {country.country}
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography style={{ textAlign: "right", color: color }}>
                      {"+" + new Intl.NumberFormat().format(country[type])}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider
                className={classes.divider}
                variant="middle"
                component="li"
              />
            </Container>
          );
        })}
    </List>
  );
}

export default CountryList;
