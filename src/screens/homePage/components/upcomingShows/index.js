import React from "react";
import Container from "@material-ui/core/Container";
import CardSection from "./card";
import SectionFooter from "../../../../components/sectionFooter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "90vh",
    minHeight: '80vh',
    backgroundColor: "#0A0B1A",
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    overflow: "hidden",
    padding: "10px 20px"
  },
  SectionFooterPara: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    color: "#E5C558",
  },
}));

const UpcomingShows = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <SectionFooter
          title="Upcoming Shows"
          RightComponent={() => (
            <div className={classes.SectionFooterPara}>View All</div>
          )}
        />

        <CardSection />
      </Container>
    </div>
  );
};

export default UpcomingShows;
