import React from "react";
import Container from "@material-ui/core/Container";
import SectionFooter from "../../../../components/sectionFooter";
import rightArrow from "../../../../staticFiles/images/rightArrow.svg";
import CardSection from "./card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    minHeight: "70vh",
    backgroundColor: "#0A0B1A",
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    overflow: "hidden",
    padding: "10px 20px",
     [theme.breakpoints.down('xs')]: {
      padding: '10px'
    },
  },
  "review-header-right": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.5)",
    width: "200px",
    height: "100%",
    [theme.breakpoints.down('xs')]: {
      display: 'none !important',
      backgroundColor: 'yellow'
    }
  },
}));

const UpcomingShows = () => {
  const classes = useStyles();
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
                  style={{ cursor: "pointer" }}
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

        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "calc(100% - 250px)"
          }}
        >
          <CardSection />
        </div>
      </Container>
    </div>
  );
};

export default UpcomingShows;
