import React from "react";
import Banner from "../components/Banner";
import BannerText from "./BannerText";
const sliders = ["images/compounding.png"];
const isClicked = [true];
const AboutUs = () => (
  <div>
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
            requirements. Establishing a connection with customers and health
            care professional clients has made us the most preferred pharmacy in
            the area. <br />
            <br />
            It brings us fulfillment to know that we made a significant
            difference in your health or the well-being of your patients{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="container-fluid section-lightblue py-5">
      <div className="col-9 mx-auto py-5">
        <h2 className="section-title text-darkblue my-4">Our Team</h2>

        <div className="col-md-9 mx-auto ">
          <div className="d-flex justify-content-between text-center">
            <div>
              <img src="images/slider3-small1.png" alt="" /> <h5> Title</h5>
            </div>
            <div>
              <img src="images/slider3-small1.png" alt="" /> <h5> Title</h5>
            </div>
            <div>
              <img src="images/slider3-small1.png" alt="" /> <h5> Title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
