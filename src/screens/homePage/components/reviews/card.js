import React from "react";
import reviewSectionCardData from "../../../../staticFiles/data/reviewSectionCardData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: "flex",
    justifyContent: "center",
    width: '100%',
    flexWrap: 'wrap',
    padding: '20px 0px',
  },
  card: {
    position: "relative",
    minWidth: "200px",
    flexGrow: 1,
    width: '360px',
    minHeight: "248px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
    background: "#0A0B1A",
    border: "2px solid #E5AF56",
    boxSizing: "border-box",
    borderRadius: "16px",
    margin: '20px',
    [theme.breakpoints.down('md')]: {
      margin: '20px'
    }, 
    [theme.breakpoints.down('xs')]: {
      margin: '10px'
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "9px",
      top: "-7px",
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
      padding: "25px",
      borderRadius: "16px",
      boxSizing: "border-box",
      "& div:nth-child(1)": {
        position: "relative",
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        padding: '0px',
        "& img": { position: "relative", width: "48px", height: "48px" },
        "& div": {
          position: "relative",
          margin: "0px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "& p:nth-child(1)": {
            fontFamily: "Quattrocento",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
          },
          "& p:nth-child(2)": {
            fontFamily: "Nunito",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#907D3F",
            position: 'relative',
            top: '7px'
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
        top: '22px',
        position: 'relative'
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
                <p>
                  <span class="us" />
                  {cardData.location}
                </p>
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
