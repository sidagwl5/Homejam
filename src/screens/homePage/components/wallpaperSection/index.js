import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../../../../components/navbar";
import CardSection from "./circularCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "115vh",
    color: "white",
    "& img": {
      position: "relative",
      width: "100%",
      height: "85%",
      objectFit: "cover",
      objectPosition: "top center",
      [theme.breakpoints.down("xs")]: {
        height: "80%",
        objectPosition: "54% 50%",
      },
    },
  },
  root_child1: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    color: "white",
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%)",
  },
  container: { 
    position: "relative",
    padding: "10px 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    }, 
  },
  root_child1_part2: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 258px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      padding: '0px 10px'
    }, 
    "& h1": {
      position: "relative",
      top: "-15px",
      fontFamily: "Libre Baskerville",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "80px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "45px",
        top: "20px",
      },
    },
    "& p": {
      position: "relative",
      top: "-35px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "24px",
      opacity: "0.6",
      width: "611px",
      height: "64px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14.5px",
        width: "331px",
        height: "48px",
        top: "-10px",
      },
    },
  },
}));

const WallpaperSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={require("../../../../staticFiles/images/wallpaper.png").default}
      />
      <div className={classes.root_child1}>
        <Container className={classes.container}>
          <Navbar />
          <div className={classes.root_child1_part2}>
            <h1>Cari Cari</h1>
            <p>
              Live from their sofa to yours. Get closer to your favorite
              artists, and never miss out.
            </p>
          </div>
          <div style={{ width: "100%", overflowX: "auto" }}>
            <CardSection />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WallpaperSection;
