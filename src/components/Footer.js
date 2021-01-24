import React from "react";
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {customStyles} from '../styles/custom-styles'


function Footer() {
  const classes = customStyles();
  return (
    <Typography className={classes.typographyRoot}>
      This website is <Link href="https://github.com/ardaberrun">open source</Link> and was made with React and Material-UI
    </Typography>

  );
}

export default Footer;
