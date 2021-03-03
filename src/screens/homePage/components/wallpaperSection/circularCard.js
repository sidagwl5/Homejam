import React from "react";
import wallpaperSectionCardData from "../../../../staticFiles/data/wallpaperSectionCardData";
import { cardStyles } from "./styles";

const CircularCard = () => {
  const classes = cardStyles();
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
