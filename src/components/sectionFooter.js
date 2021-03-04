import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: '10px 0px',
    [theme.breakpoints.down("xs")]: {
      padding: '0px 20px'
    },
    "& div": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      "& p": {
        fontFamily: "Libre Baskerville",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "32px",
        [theme.breakpoints.down('xs')]: {
          fontSize: '20px'
        }
      },
    },
  },
}));

const SectionFooter = ({ title, RightComponent }) => {
  const classes = useStyles();
  return (
    <div style={{ justifyContent: "space-between" }} className={classes.root}>
      <div>
        <p>{title}</p>
        <span
          style={{
            position: "relative",
            width: "48px",
            height: "3px",
            background: "#0259EB",
            borderRadius: "16px",
            border: "none",
            top: "5px",
          }}
        />
      </div>
      <RightComponent />
    </div>
  );
};

export default SectionFooter;
