import React from "react";
import "./index.css";
import WallpaperSection from "./components/wallpaperSection";
import UpcomingShows from "./components/upcomingShows";
import Reviews from "./components/reviews";

const HomePage = () => (
  <>
    <WallpaperSection />
    <UpcomingShows />
    <Reviews />
  </>
);

export default HomePage;
