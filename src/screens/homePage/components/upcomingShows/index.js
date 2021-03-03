import React from "react";
import Container from "@material-ui/core/Container";
import CardSection from "./card";
import SectionFooter from "../../../../components/sectionFooter";
import { mainStyles } from "./styles";



const UpcomingShows = () => {
  const classes = mainStyles();
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
