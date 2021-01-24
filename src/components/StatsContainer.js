import React, { useContext, useEffect,useState } from "react";

import Container from "@material-ui/core/Container";

import { customStyles } from "../styles/custom-styles";

import { CoronaContext } from "../context/CoronaContext";
import { StepContext } from "../context/StepContext";

import Stepper from "./Stepper";
import CountryList from "./CountryList";
import InfoBox from "./InfoBox";

function StatsContainer() {
  const classes = customStyles();
  const { state, dispatch } = useContext(CoronaContext);
  const { step } = useContext(StepContext);
  const [loading,setLoading] = useState(false);
  

  const maxSteps = state.length;

  useEffect(() => {
    const getData = async () => {
      try {
        if (state[step].countries === null) {
          setLoading(true);
          const res = await fetch(
            `https://corona.lmao.ninja/v3/covid-19/countries?sort=${state[step].type}`
          );
          const data = await res.json();
          dispatch({
            type: "UPDATE_COUNTRIES",
            payload: { data: data, idx: step },
          });
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [state, dispatch, step,loading]);

  return (
    <Container className={classes.container}>
      <InfoBox
        name={state[step].name}
        color={state[step].color}
        cases={new Intl.NumberFormat().format(state[step].cases)}
      />

      <CountryList
        countries={state[step].countries}
        color={state[step].color}
        type={state[step].type}
        loading = {loading}
      />
      <Stepper maxSteps={maxSteps} />
    </Container>
  );
}

export default StatsContainer;
