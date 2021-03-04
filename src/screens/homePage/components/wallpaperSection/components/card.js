import React from "react";
import wallpaperSectionCardData from "../../../../../staticFiles/data/wallpaperSectionCardData";
import { cardStyles } from "../styles";

const CircularCard = () => {
  const classes = cardStyles();
  return (
    <div className={classes.root}>
      {wallpaperSectionCardData.map((card) => (
        <div className={classes.card}>
          {card.progress && card.progress()}
          <img
            alt="icon"
            style={{ width: "32px", height: "32px", position: "relative" }}
            src={card.url}
          />
          <p>{card.count}</p>
          <p>{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CircularCard;
