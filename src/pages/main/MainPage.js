import ScrollableAnchor from "react-scrollable-anchor";
import React, { Component } from "react";
import Banner from "../../components/Banner";
import HowtoStart from "./Sections/HowtoStart";
import WhyMedx from "./Sections/WhyMedx";
import Services from "./Sections/Services";
import BannerText from "./BannerText";
const sliders = [
  "images/slider1.png",
  "images/slider2.png",
  "images/slider3.png"
];

class MainPage extends Component {
  state = {
    isClicked: [true, false, false]
  };

  render() {
    return (
      <div>
        <Banner
          isClicked={this.state.isClicked}
          sliders={sliders}
          BannerText={BannerText}
        />
        <ScrollableAnchor id={"howtostart"}>
          <HowtoStart />
        </ScrollableAnchor>
        <WhyMedx />
        <ScrollableAnchor id={"service"}>
          <Services />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default MainPage;
