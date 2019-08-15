import React, { Component } from "react";
// import BannerText from "./BannerText";
import classNames from "classnames";
import styled from "styled-components";

class Banner extends Component {
  renderIndicator = () => (
    <div>
      <ol class="carousel-indicators">
        {this.props.sliders.map((item, index) => (
          <li
            data-target="#medxcarousel"
            data-slide-to={index.toString()}
            className={classNames({ active: this.props.isClicked[index] })}
          ></li>
        ))}
      </ol>
    </div>
  );

  renderContent = () => (
    <div class="carousel-inner d-flex align-items-center">
      {this.props.sliders.map((item, index) => (
        <div
          className={classNames("carousel-item", {
            active: this.props.isClicked[index]
          })}
        >
          <div className="imagecontainer ">
            <img src={item} />
          </div>

          {this.props.BannerText[index]}
        </div>
      ))}
    </div>
  );

  render() {
    return (
      <BannerWrapper>
        <div
          id="medxcarousel"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {this.renderIndicator()}
          {this.renderContent()}
        </div>
      </BannerWrapper>
    );
  }
}

const BannerWrapper = styled.div`
  .slide {
    height: 100vh !important;
  }
  .arrowlink {
    color: var(--brightOrange);
  }
  .carousel-inner {
    height: 100% !important;
  }

  .carousel-indicators li {
    background-color: var(--darkBlue);
  }

  /* Older browser support - .no-cssanimations class added by modernizr */
  .no-cssanimations .slideshow li {
    opacity: 1;
  }
  .carousel-item {
    position: static;
  }
  .imagecontainer {
    position: absolute;
    height: 100%;
    top: 14%;
    left: 0;
    right: 0;
  }
  .banner-clocksm {
    width: 10%;
  }
  /*========================== media query ============================*/
  @media (min-width: 1680px) {
    .imagecontainer img {
      /* margin-top: 8%; */
      width: 100%;
    }
  }
  @media (min-width: 1281px) and (max-width: 1680px) {
    .imagecontainer img {
      margin-top: 12%;
      width: 105%;
    }
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    .imagecontainer img {
      margin-top: 20%;
      width: 105%;
    }
  }
  /*ipad*/
  @media (min-width: 768px) and (max-width: 1024px) {
    i {
      font-size: 2.8rem;
    }
    .imagecontainer img {
      margin-top: 40%;
      width: 110%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .imagecontainer img {
      margin-top: 25%;
      width: 110%;
    }

    i {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .imagecontainer img {
      margin-top: 40%;
      width: 120%;
    }

    /* .bannercontent {
      text-align: center;
    } */

    i {
      font-size: 2rem;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .bannercontent {
      text-align: center;
    }
    .clock-container,
    d-flex {
      justify-content: center !important;
    }

    i {
      font-size: 2rem;
    }

    .imagecontainer img {
      width: 130%;
    }
  }
`;

export default Banner;
