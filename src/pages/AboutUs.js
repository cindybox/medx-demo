import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const staff = [
  { link: "images/avatar/1.jpg", title: "pharmaicst" },
  { link: "images/avatar/2.jpg", title: "staff pharmaicst" },
  { link: "images/avatar/5.jpg", title: "store manager" },
  { link: "images/avatar/3.jpg", title: "pharmaicst" },
  { link: "images/avatar/4.jpg", title: "pharmaicst" },
  { link: "images/avatar/6.jpg", title: "pharmaicst" }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Banner = () => (
  <div className="container-fluid section-darkblue py-5">
    <div className="row col-9 mx-auto py-5">
      <div className="col-md-5 my-5">
        <img src="images/aboutus.png" alt="" className="w-100" />{" "}
      </div>
      <div className="col-md-7 my-5">
        <h5 className="text-header1"> Medx is About People</h5>
        <p className="text-header3 text-blue py-2">
          We genuinely care about your health and recovery
        </p>

        <p>
          We take the time to get to know you by name and your health
          requirements. Establishing a connection with customers and health care
          professional clients has made us the most preferred pharmacy in the
          area. <br />
          <br />
          It brings us fulfillment to know that we made a significant difference
          in your health or the well-being of your patients{" "}
        </p>
      </div>
    </div>
  </div>
);

const OurTeam = () => (
  <div className="container-fluid section-lightblue py-5">
    <div className="col-9 mx-auto py-5">
      <h2 className="section-title text-darkblue my-4 pb-5">Our Team</h2>

      <div className="col-md-9 mx-auto ">
        <Slider {...settings}>
          {staff.map(l => (
            <div className="d-flex flex-column align-items-center">
              <img src={l.link} alt="" />
              <h5>{l.title}</h5>{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
);
const AboutUs = () => (
  <div>
    <AboutUsWrapper>
      <Banner />
      <OurTeam />
    </AboutUsWrapper>
  </div>
);

const AboutUsWrapper = styled.div`
  .d-flex img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
  }
`;
export default AboutUs;
