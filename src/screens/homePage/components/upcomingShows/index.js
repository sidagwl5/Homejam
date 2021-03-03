import React from "react";
import Container from "@material-ui/core/Container";
import CardSection from "./card";
import SectionFooter from "../../../../components/sectionFooter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    minHeight: "50vh",
    backgroundColor: "#0A0B1A",
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "60px 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px",
    },
  },
  container_child: {
    width: "100%",
    overflowX: "auto",
    minHeight: '387px',
    padding: '20px 0px',
    top: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
      left: '-10px'
    },
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

        <div className={classes.container_child}>
          <CardSection />
        </div>
      </Container>
    </div>
  );
};

export default UpcomingShows;
