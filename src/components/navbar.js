import React from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
    "& button": {
      textTransform: "none",
      color: "white",
      fontSize: "14px",
      fontStyle: "normal",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "& div:nth-child(2)": {
      position: "relative",
      display: "flex",
      width: "330px",
      justifyContent: "space-between",
      alignItems: "center",
      "& img": { width: "15px" },
      [theme.breakpoints.down("xs")]: {
        width: "100px"
      },
    },
    "& div:nth-child(1)": {
      position: "relative",
      width: "85px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      [theme.breakpoints.down("xs")]: {
        width: '70px'
      },
      "& img": {
        position: "relative",
        width: "100%",
        objectFit: "contain",
        transform: "scale(0.8)",
        imageRendering: "crisp-edges",
      },
    },
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  searchIcon: {
    color: "white",
    position: "relative",
    left: "27px",
    width: "13px",
    height: "13px",
    [theme.breakpoints.down("xs")]: {
      left: "0px",
      fontSize: "medium",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src={require("../staticFiles/images/logo.png").default} />
      </div>

      <div>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.searchIcon}
        >
          <path
            d="M8.88711 16.2447C12.913 16.2447 16.1766 12.9641 16.1766 8.91727C16.1766 4.87044 12.913 1.58984 8.88711 1.58984C4.86126 1.58984 1.59766 4.87044 1.59766 8.91727C1.59766 12.9641 4.86126 16.2447 8.88711 16.2447Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.9988 18.0766L14.0352 14.0923"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <Button>Search</Button>
        <Button>Help</Button>
        <Button>Account</Button>
        <img src={require("../staticFiles/images/basket.svg").default} />

        <img
          className={classes.hamburger}
          src={require("../staticFiles/images/Hamburger.svg").default}
        />
      </div>
    </div>
  );
};

export default Navbar;
