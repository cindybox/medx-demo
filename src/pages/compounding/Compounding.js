import React from "react";
import Banner from "../../components/Banner";
import BannerText from "./BannerText";
import WhyCompounding from "./WhyCompounding";
import Ingredient from "./Ingredient";

const sliders = ["images/compounding.png"];
const isClicked = [true];

const Compounding = () => (
  <div>
    <Banner isClicked={isClicked} sliders={sliders} BannerText={BannerText} />
    <WhyCompounding />
    <Ingredient />
  </div>
);

export default Compounding;
