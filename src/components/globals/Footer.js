import React, { Component } from "react";
import styled from "styled-components";
import { ButtonRound } from "./Button";
import { goToTop } from "react-scrollable-anchor";
class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div className="container-fluid py-5 px-5 row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-3 mx-auto">
                <img
                  src={process.env.PUBLIC_URL + "/logo_w.png"}
                  width="200rem"
                  alt="logo"
                />
              </div>
              <div className="col-md-3 mx-auto pt-3">
                <div className="footer-header text-capitalize mb-3">
                  contact us
                </div>
                <p>
                  Tel: 281-506-2453 <br /> Fax: 281-506-2454 <br />
                  Email: service@medxpharm.com
                </p>
                <p>
                  6302 Broadway Street,Suite 100 <br />
                  Pearland, TX 77581
                </p>
              </div>
              <div className="col-md-3 mx-auto pt-3">
                <div className="footer-header text-capitalize  mb-3">
                  main menu
                </div>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#howtostart">How to Start</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
              </div>
              <div className="col-md-3 mx-auto pt-3">
                <div className="col-12 col-md-8 ">
                  <a
                    href="https://www.facebook.com/medxpharm"
                    className="social-icon pr-3"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/medx_pharma"
                    className="social-icon px-3 "
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/pub/medx-pharmacy-compounding/56/782/b99"
                    className="social-icon px-3 "
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/medx_pharma/"
                    className=" social-icon px-3 "
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end ">
              <ButtonRound
                className="border"
                onClick={e => {
                  e.preventDefault();
                  goToTop();
                }}
              >
                <i class="fas fa-arrow-up"></i>
              </ButtonRound>
            </div>
          </div>
        </div>
      </FooterWrapper>
    );
  }
}
const FooterWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  height: 100%;
  background: var(--darkBlue);
  font-size: 1rem;
  color: var(--mainWhite) !important;
  .footer-header {
    font-family: "Playfair Display, sans-serif";
    font-size: 1.3rem;
    color: var(--mainWhite);
  }
  p,
  a {
    color: var(--lightBlue);
  }

  a:hover {
    text-decoration: none;
    color: var(--brightGreen);
  }

  i {
    /* width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px var(--mainWhite) solid; */
  }
`;
export default Footer;
