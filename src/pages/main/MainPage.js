import ScrollableAnchor from "react-scrollable-anchor";
import React, { Component } from "react";
import Banner from "../../components/Banner";
import HowtoStart from "./Sections/HowtoStart";
import WhyMedx from "./Sections/WhyMedx";
import Services from "./Sections/Services";
import Review from "./Sections/Review";
import Coupon from "./Sections/Coupon";
import BannerText from "./BannerText";
import styled from "styled-components";

const sliders = [
  "images/slider1.png",
  "images/slider2.png",
  "images/slider3.png",
];

class MainPage extends Component {
  state = {
    isClicked: [true, false, false],
  };

  render() {
    return (
      <div>
        <MainPageWrapper>
          <Banner
            isClicked={this.state.isClicked}
            sliders={sliders}
            BannerText={BannerText}
          />
          {/* <Coupon /> */}
          <ScrollableAnchor id={"howtostart"}>
            <HowtoStart />
          </ScrollableAnchor>
          <WhyMedx />
          <ScrollableAnchor id={"service"}>
            <Services />
          </ScrollableAnchor>
          <Review />{" "}
        </MainPageWrapper>
      </div>
    );
  }
}

const MainPageWrapper = styled.div`
  .coupon-section {
    position: absolute;
    border-radius: 100%;
    top: 90vh;
    width: 20rem;
    height: 20rem;
    left: 70%;
    border: 1px red solid;
  }
`;

export default MainPage;
