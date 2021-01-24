import React, { useState, useEffect, useContext } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { customStyles } from "../styles/custom-styles";
import { StepContext } from "../context/StepContext";
import { CoronaContext } from "../context/CoronaContext";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

const dataForChart = (obj) => {
  if (typeof obj === "undefined") return -1;
  const entries = Object.entries(obj);
  return entries.reduce((acc, curr, i) => {
    acc[i] = { x: curr[0], y: curr[1] };

    return acc;
  }, []);
};

function GraphsContainer() {
  const classes = customStyles();
  const [historicalData, setHistoricalData] = useState([]);
  const { step } = useContext(StepContext);
  const { state } = useContext(CoronaContext);

  useEffect(() => {
    const getData = async () => {
      try {
        if (historicalData.length === 0) {
          const res = await fetch(
            "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
          );
          const data = await res.json();
          setHistoricalData(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [historicalData]);


  return (
    <Container className={classes.graphContainer}>
      <Typography variant="h6" className={classes.graphTypography}>
        {state[step].name} for one month
      </Typography>
      {dataForChart(historicalData[state[step].type]) === -1 ? (
        <Container className={classes.noData}>
          <WarningRoundedIcon className={classes.icon} />
          <Typography variant="h6" className={classes.graphTypography}>
            No Data
          </Typography>
        </Container>
      ) : (
        <VictoryChart
          width={800}
          height={500}
          padding={{ top: 50, left: 90, bottom: 80, right: 50 }}
          domainPadding={{ x: 40, y: 10 }}
        >
          <VictoryAxis
            tickFormat={(x, i) =>
              i === 0 || i === 9 || i === 19 || i === 29 ? x : ""
            }
            style={{
              grid: { stroke: "transparent" },
              tickLabels: { fill: "#EAEAEA", fontSize: 16 },
              axis: {
                stroke: "#EAEAEA",
                strokeWidth: 1,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              grid: { stroke: "transparent" },
              tickLabels: { fill: "#EAEAEA", fontSize: 16 },
              axis: {
                stroke: "#EAEAEA",
                strokeWidth: 1,
              },
            }}
          />
          <VictoryLine
            data={dataForChart(historicalData[state[step].type])}
            style={{ data: { stroke: state[step].color, strokeWidth: 4 } }}
          />
        </VictoryChart>
      )}
    </Container>
  );
}

export default GraphsContainer;
