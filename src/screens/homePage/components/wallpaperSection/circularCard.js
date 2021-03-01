import React from "react";
import wallpaperSectionCardData from "../../../../staticFiles/data/wallpaperSectionCardData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    minWidth: "900px",
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
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: 'rgba(8, 14, 30, 0.5)'  
    },
    "& p:nth-child(2)": {
      fontFamily: "Libre Baskerville",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      margin: '5px 0px'
    },
    "& p:nth-child(3)": {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      color: "rgba(255, 255, 255, 0.5)",
    },
  },
}));

const CircularCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {wallpaperSectionCardData.map((card) => (
        <div className={classes.card}>
          <img style={{ width: "32px", height: "32px" }} src={card.url} />
          <p>{card.count}</p>
          <p>{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CircularCard;
