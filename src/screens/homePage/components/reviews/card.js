import React from "react";
import reviewSectionCardData from "../../../../staticFiles/data/reviewSectionCardData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    minWidth: "1140px",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      justifyContent: 'flex-start',
      minWidth: "1000px"
    },
  },
  card: {
    position: "relative",
    minWidth: "200px",
    width: "360px",
    minHeight: "248px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
    background: "#0A0B1A",
    boxSizing: "border-box",
    borderRadius: "16px",
    margin: "20px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "10px",
      width: "328px",
      height: "232px",
      minHeight: "232px",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "9px",
      top: "-9px",
      borderRadius: "16px",
      background: "linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "none",
    },
    "& div:nth-child(1)": {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "#0A0B1A",
      border: "2px solid #E5AF56",
      padding: "25px",
      borderRadius: "16px",
      boxSizing: "border-box",
      [theme.breakpoints.down("md")]: {
        padding: "25px 15px",
      },
      "& div:nth-child(1)": {
        position: "relative",
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        border: "none",
        padding: "0px",
        "& img": { position: "relative", width: "48px", height: "48px" },
        "& div:nth-child(2)": {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          left: "20px",
          "& span": {
            position: "relative",
            left: "0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: '0px',
            height: '20px',
            top: '5px',
            '& img': {
              position: 'relative',
              objectFit: 'contain',
              transform: "scale(0.5)",
              left: "-12px",
            },
            "& p:nth-child(2)": {
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "11px",
              textTransform: "uppercase",
              color: "#E5C558",
              position: "relative",
              top: "0px",
              opacity: 0.7,
              left: '-15px'
            },
          },
          "& p:nth-child(1)": {
            fontFamily: "Quattrocento",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
          },
        },
      },
      "& p:nth-child(2)": {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        textTransform: "none",
        color: "white",
        opacity: 0.9,
        top: "22px",
        position: "relative",
      },
    },
  },
}));

const Card = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {reviewSectionCardData.map((cardData) => (
        <div className={classes.card}>
          <div>
            <div>
              <img src={cardData.url} />
              <div>
                <p>{cardData.name}</p>
                <span>
                  <img
                    src={cardData.flag}
                  />
                  <p>{cardData.location}</p>
                </span>
              </div>
            </div>
            <p>{cardData.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
