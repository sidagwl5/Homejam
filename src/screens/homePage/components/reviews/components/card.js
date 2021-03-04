import React from "react";
import reviewSectionCardData from "../../../../../staticFiles/data/reviewSectionCardData";
import { cardStyles } from "../styles";

const Card = () => {
  const classes = cardStyles();
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
                  <img src={cardData.flag} />
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
