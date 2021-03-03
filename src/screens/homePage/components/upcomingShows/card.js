import React from "react";
import upcomingShowsCardData from "../../../../staticFiles/data/upcomingShowsCardData";
import { cardStyles } from "./styles";

const Card = () => {
  const classes = cardStyles();
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
