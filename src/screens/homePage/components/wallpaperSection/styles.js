import { makeStyles } from "@material-ui/core/styles";

export const mainStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "115vh",
    color: "white",
    "& img": {
      position: "relative",
      width: "100%",
      height: "85%",
      objectFit: "cover",
      objectPosition: "top center",
      [theme.breakpoints.down("xs")]: {
        height: "80%",
        objectPosition: "54% 50%",
      },
    },
  },
  root_child1: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    color: "white",
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%)",
  },
  container: {
    position: "relative",
    padding: "10px 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  root_child1_part2: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 258px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
    "& h1": {
      position: "relative",
      top: "-15px",
      fontFamily: "Libre Baskerville",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "80px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "45px",
        top: "20px",
      },
    },
    "& p": {
      position: "relative",
      top: "-35px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "24px",
      opacity: "0.6",
      width: "611px",
      height: "64px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14.5px",
        width: "331px",
        height: "48px",
        top: "-10px",
      },
    },
  },
}));

export const cardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    minWidth: "900px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
      minWidth: "650px",
    },
  },
  card: {
    position: "relative",
    width: "208px",
    height: "208px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: "144px",
      height: "144px",
      marginRight: "17px",
    },
    "&:hover": {
      backgroundColor: "rgba(8, 14, 30, 0.5)",
    },
    "& p:nth-child(2)": {
      fontFamily: "Libre Baskerville",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      margin: "9px 0px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "21px",
      },
    },
    "& p:nth-child(3)": {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      color: "rgba(255, 255, 255, 0.5)",
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },
}));
