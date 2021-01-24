import React, { useContext } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { StepContext } from "../context/StepContext";

const stepperCustomStyles = makeStyles((theme) => ({
  stepper: { backgroundColor: "#262729" },

  button: {
    color: "#EAEAEA",
  },
  disabled: {
    "&$disabled": {
      color: "grey",
    },
  },
}));

function Stepper({ maxSteps }) {
  const theme = useTheme();
  const classes = stepperCustomStyles();

  const { step, setStep } = useContext(StepContext);

  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      steps={maxSteps}
      className={classes.stepper}
      position="static"
      variant="dots"
      activeStep={step}
      nextButton={
        <Button
          size="small"
          className={classes.button}
          classes={{ disabled: classes.disabled }}
          onClick={handleNext}
          disabled={step === maxSteps - 1}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={step === 0}
          className={classes.button}
          classes={{ disabled: classes.disabled }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}

export default Stepper;
