import React from "react";

import { customStyles } from "../styles/custom-styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function InfoBox({ name, color, cases }) {
  const classes = customStyles();
  return (
    <Box my={2} className={classes.box}>
      <Typography variant="h6" className={classes.typographyRoot}>
        {name}
      </Typography>
      <Typography
        variant="h5"
        className={classes.typographyRoot}
        style={{ color: color }}
      >
        {cases}
      </Typography>
    </Box>
  );
}

export default InfoBox;
