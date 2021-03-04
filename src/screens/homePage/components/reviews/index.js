import React from "react";
import Container from "@material-ui/core/Container";
import SectionFooter from "../../../../components/sectionFooter";
import CardSection from "./components/card";
import { mainStyles } from "./styles";
import Arrow from "./components/arrow";

const pagination = (
  <>
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
  </>
);

const UpcomingShows = () => {
  const classes = mainStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <SectionFooter
          title="Reviews"
          RightComponent={() => (
            <div
              style={{ flexDirection: "row", alignItems: "center" }}
              className={classes["review-header-right"]}
            >
              {pagination}
              <Arrow left={true} />
              <Arrow />
            </div>
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
