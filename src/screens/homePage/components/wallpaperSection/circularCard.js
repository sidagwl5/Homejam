import React from "react";
import wallpaperSectionCardData from "../../../../staticFiles/data/wallpaperSectionCardData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

const CircularCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {wallpaperSectionCardData.map((card) => (
          <div className={classes.card}>
            {/* {card.progress && <img style={{
              position: 'absolute', width: '100%', height: '100%', backgroundSize: 'contain'
            }} src={card.progress} />} */}
            <img style={{ width: "32px", height: "32px" }} src={card.url} />
            <p>{card.count}</p>
            <p>{card.label}</p>
          </div>
      ))}
    </div>
  );
};

export default CircularCard;
