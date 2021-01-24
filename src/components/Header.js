import React from "react";
import { customStyles } from "../styles/custom-styles";
import Typography from "@material-ui/core/Typography";

function Header() {
  const classes = customStyles();
  return (
    <Typography className={classes.typographyRoot} variant="h4">
      COVID-19 STATUS TRACKING
    </Typography>
  );
}

export default Header;
