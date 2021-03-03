import React from "react";
import upcomingShowsCardData from "../../../../staticFiles/data/upcomingShowsCardData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: "flex",
    justifyContent: "space-between",
    padding: '10px',
    minWidth: "1140px",
    minHeight: '387px'
  },
  card: {
    position: "relative",
    width: "268px",
    height: "387px",
    borderRadius: "8px",
    backgroundColor: "#111229",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "none",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "8px",
      top: "-8px",
      borderRadius: "8px",
      background: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "none",
    },
    "& img": {
      zIndex: 4,
      position: "relative",
      width: "100%",
      maxHeight: "230px",
      borderRadius: "0px",
    },
    "& div:nth-child(2)": {
      position: "relative",
      width: "100%",
      height: "calc(100% - 230px)",
      borderRadius: "0px 0px 8px 8px",
      padding: "16px",
      boxSizing: "border-box",
      backgroundColor: '#111229',

      "& p:nth-child(2)": {
        fontFamily: "Libre Baskerville",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        color: "white",
        position: "relative",
        top: "14px",
      },

      "& span": {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "12px",
        padding: "1px 6px",
        background: "#E5C558",
        borderRadius: "1px",
        color: "#682F26",
      },
    },
    "& div:nth-child(3)": {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      top: "40px",

      "& div": {
        display: "flex",
        position: "relative",
        cursor: "pointer",
        flexDirection: 'row',
        "& p": {
          fontFamily: "Nunito",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          color: "#0259EB",
          margin: "0px",
          position: "relative",
          top: "0px",
        },
        "& img": { width: "18.75px", margin: "0px 10px" },
      },
    },
  },
}));

const Card = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {upcomingShowsCardData.map((cardData) => (
        <div className={classes.card}>
          <img src={cardData.url} />
          <div>
            <span>{cardData.genre}</span>
            <p>{cardData.name}</p>

            <div>
              <div>
                <p>More Info</p>
                <img
                  src={
                    require("../../../../staticFiles/images/rightArrow.svg")
                      .default
                  }
                />
              </div>
              {cardData.fill ? (
                <img
                  style={{ width: "18.88px", cursor: "pointer" }}
                  src={cardData.fill}
                />
              ) : (
                <img
                  style={{ width: "18.88px", cursor: "pointer" }}
                  src={
                    require("../../../../staticFiles/images/Union.svg").default
                  }
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
