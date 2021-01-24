import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import StatsContainer from "./components/StatsContainer";
import GraphsContainer from "./components/GraphsContainer";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "./App.css";

function App() {


  return (

        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StatsContainer />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GraphsContainer />
            </Grid>
            <Grid item xs={12}>
              <Map />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Container>
  );
}

export default App;
