import React from "react";
import upcomingShowsCardData from "../../../../../staticFiles/data/upcomingShowsCardData";
import arrow from "../../../../../staticFiles/images/rightArrow.svg";
import union from "../../../../../staticFiles/images/Union.svg";
import { cardStyles } from "../styles";

const Card = () => {
  const classes = cardStyles();
  return (
    <div className={classes.root}>
      {upcomingShowsCardData.map((cardData) => (
        <div className={classes.card}>
          <img alt="display picture" src={cardData.url} />
          <div>
            <span>{cardData.genre}</span>
            <p>{cardData.name}</p>
            <div>
              <div>
                <p>More Info</p>
                <img alt="arrow" src={arrow} />
              </div>
              {cardData.fill ? (
                <img
                  alt="unsave"
                  style={{ width: "18.88px", cursor: "pointer" }}
                  src={cardData.fill}
                />
              ) : (
                <img
                  alt="save"
                  style={{ width: "18.88px", cursor: "pointer" }}
                  src={union}
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
