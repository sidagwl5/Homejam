import React from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
       [theme.breakpoints.down('xs')]: {
       '& button': {
         display: 'none'
       }
    },
    "& div:nth-child(2)": {
      position: "relative",
      display: "flex",
      width: "300px",
      justifyContent: "space-between",
      alignItems: "center",
      '& img': { width: "15px" },
      [theme.breakpoints.down('xs')]: {
        width: "100px",
      } 
    },
    "& div:nth-child(1)": {
      position: "relative",
      width: "85px",
      background: "transparent",
      "& img": { position: "relative", width: "100%", objectFit: "contain" },
    },
  },
  hamburger: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src={require("../staticFiles/images/logo.png").default} />
      </div>

      <div>
      <SearchIcon style={{ color: "white" }} />
        <Button>
          <p>Search</p>
        </Button>
        <Button>
          <p>Help</p>
        </Button>
        <Button>
          <p>Account</p>
        </Button>
        <img
          src={require("../staticFiles/images/basket.svg").default}
        />

        <img className={classes.hamburger} 
        src = {require("../staticFiles/images/Hamburger.svg").default} />
      </div>
    </div>
  );
};

export default Navbar;
