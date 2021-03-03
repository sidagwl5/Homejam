import React from "react";
import Container from "@material-ui/core/Container";
import SectionFooter from "../../../../components/sectionFooter";
import CardSection from "./card";
import { mainStyles } from "./styles";

const UpcomingShows = () => {
  const classes = mainStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <SectionFooter
          title="Reviews"
          RightComponent={() => {
            return (
              <div
                style={{ flexDirection: "row", alignItems: "center" }}
                className={classes["review-header-right"]}
              >
                <p
                  style={{
                    fontFamily: "Nunito",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  1 <span style={{ opacity: "0.5" }}>/12</span>
                </p>
                <svg
                  style={{
                    transform: "rotate(-180deg)",
                    cursor: "pointer",
                    opacity: "0.8",
                  }}
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 0.25L11.2 1.3L16.075 6.25H0.25V7.75H16.075L11.2 12.7L12.25 13.75L19 7L12.25 0.25Z"
                    fill="white"
                  />
                </svg>
                <svg
                  style={{ cursor: "pointer", opacity: "0.8" }}
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 0.25L11.2 1.3L16.075 6.25H0.25V7.75H16.075L11.2 12.7L12.25 13.75L19 7L12.25 0.25Z"
                    fill="white"
                  />
                </svg>
              </div>
            );
          }}
        />

        <div className={classes.container_child}>
          <CardSection />
        </div>
      </Container>
    </div>
  );
};

export default UpcomingShows;
