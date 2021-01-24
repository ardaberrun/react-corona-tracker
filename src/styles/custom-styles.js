import { makeStyles } from "@material-ui/core/styles";

// #ECB613 toplam vaka
// #8AAC4C toplam iyileşen
// #3C7EBB toplam active
// #B1361E toplam ölüm
// #EAEAEA yazı color
// #303133 backgroundColor

export const customStyles = makeStyles((theme) => ({
  container: {
    height: "70vh",
  },
  graphContainer: {
    textAlign: "center",
    height: "67vh",
    backgroundColor: "#262729",
    marginTop: theme.spacing(2),
  },
  box: {
    padding: theme.spacing(2),
    backgroundColor: "#262729",
    borderRadius: "10px ",
  },
  listRoot: {
    color: "#eaeaea",
    overflowY: "auto",
    height: "40vh",
    backgroundColor: "#262729",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#303133",
      borderRadius: "3px",
    },
  },
  loadingContainer: {
    height: "40vh",
    backgroundColor: "#262729",

  },
  spinner: {
    position:"relative",
    left:"47%",
    top:"47%"
  },
  stepper: { backgroundColor: "#262729"},

  divider: {
    backgroundColor: "#303133",
    height: "2px",
  },
  button: {
    color: "#EAEAEA",
  },
  disabled: {
    "&$disabled": {
      color: "grey",
    },
  },
  typographyRoot: {
    color: "#eaeaea",
    textAlign: "center",
  },
  graphTypography: {
    textTransform: "capitalize",
    alignSelf: "start",
    color: "#EAEAEA",
    padding: theme.spacing(2),
  },
  icon: {
    color: "#ECB613",
    fontSize: "80px !important",
  },
  noData: {
    margin: "100px 0",
  },
}));
