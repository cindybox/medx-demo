import React from "react";
import { Link } from "react-router-dom";
const BannerText1 = () => (
  <div className="bannercontent mt-5 row text-capitalize ">
    <div className="col-9 mx-auto mx-sm-auto">
      <h1 className="mb-3 text-header1">No Insurance? No worries!</h1>
      <div className="row">
        <div className="col-12 col-md-7 col-lg-6 col-xl-5  ml-1 mx-sm-auto ml-md-0">
          <h2 className="text-mutedblue text-header2">
            We offer cash options that can be cheaper than insurance.
          </h2>
          <br />
          <h2 className="text-mutedblue text-header2">
            Check Our Discount Program for
            <span className="text-orange ">
              <Link to="/3dollar" style={{ color: "var(--brightOrange)" }}>
                {" "}
                $3 Prescriptions{" "}
              </Link>
            </span>
          </h2>
        </div>
      </div>

      <div className="d-flex align-items-center mt-5">
        <i class="fas fa-phone mr-3 p-3"></i>
        <div className=" text-capitalize  text-blue ">
          <h3 className="text-header3"> have questions?</h3>
          <h3 className="text-header3">
            call us at <strong> 281-506-2453</strong>
          </h3>
        </div>
      </div>
    </div>
  </div>
);
const BannerText2 = () => (
  <div className="bannercontent mt-5 row ">
    <div className="col-9 mx-auto mx-sm-auto">
      <h1 className="mb-3 text-header1">Same Day Delivery</h1>
      <div className="row">
        <div className="col-12 col-md-7 col-lg-6 col-xl-5  ml-1 mx-sm-auto ml-md-0">
          <h2 className="text-mutedblue text-header2">
            No More Waiting in Pharmacy Lines
          </h2>
          <br />
          <h2 className="text-mutedblue text-header2">
            Get Your Medication Delivered to Your Doorstep
          </h2>
          <h2 className="text-orange text-header2 mt-4 ">
            START NOW &emsp;
            <span>
              <a href="/#howtostart" className="arrowlink">
                <i class="fas fa-arrow-down"></i>
              </a>
            </span>
          </h2>
        </div>
      </div>{" "}
      <div className="d-flex align-items-center mt-5">
        <i class="fas fa-phone mr-3 p-3"></i>
        <div className="text-capitalize text-blue ">
          <h3 className="text-header3"> have questions?</h3>
          <h3 className="text-header3">
            call us at <strong> 281-506-2453</strong>
          </h3>
        </div>
      </div>
    </div>
  </div>
);
const BannerText3 = () => (
  <div className="bannercontent mt-5 row ">
    <div className=" col-9 mx-auto mt-sm-5 mx-sm-auto">
      <h1 className="mb-3 text-header1 ">Online Service 24/7</h1>
      <div className="row">
        <div className="col-12 col-md-7 col-lg-6 col-xl-5  ml-1 mx-sm-auto ml-md-0">
          <h2 className="text-header2 text-mutedblue">Our Care Stays Online</h2>
        </div>
      </div>
      <div className="d-flex mt-5 mx-auto clock-container">
        <img
          src={process.env.PUBLIC_URL + "/images/slider3-small3.png"}
          alt="img"
          className="banner-clocksm      mr-4"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/slider3-small2.png"}
          alt="img"
          className="banner-clocksm   mr-4  "
        />
        <img
          src={process.env.PUBLIC_URL + "/images/slider3-small1.png"}
          alt="img"
          className="banner-clocksm    mr-4 "
        />
      </div>
    </div>
  </div>
);

export default [<BannerText1 />, <BannerText2 />, <BannerText3 />];
