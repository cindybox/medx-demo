import React, { Component } from "react";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";
import { ButtonOrange } from "../../../components/globals/Button";
const ServiceData = data.service;

class Services extends Component {
  render() {
    return (
      <ServiceContainer>
        <div className="container-fluid section-darkblue py-5">
          <div className="row section-lightblue py-5">
            <div className="col-9 mx-auto section-title ">what do we do</div>
            <div className="col-9 mx-auto">
              <div className=" row col-lg-12 col-xl-10 mx-auto d-flex justify-content-between  mt-5 ">
                {ServiceData.map(service => (
                  <div className="flip-card  mx-auto col-12 col-sm-10 col-md-6 col-lg-6 col-xl-4 my-3 ">
                    <div className="flip-card-inner  ">
                      <div className="flip-card-front p-lg-5 p-md-3 p-sm-2 d-flex flex-column align-items-center  justify-content-center ">
                        <img
                          src={service.icon}
                          alt=""
                          className="w-75 service-icon"
                        />

                        <h5 className="text-capitalize subsubtitle text-darkblue my-auto ">
                          <strong> {service.title}</strong>
                        </h5>
                      </div>
                      <div className="flip-card-back text-capitalize p-lg-4 p-md-2 p-sm-1 d-flex flex-column align-items-stretch justify-content-center">
                        <p className="">{service.content.replace(/(\n)/g)}</p>
                        <div className="mt-3">
                          {service.link.length > 0 ? (
                            <Link to={service.link}>
                              <ButtonOrange>
                                <h6>Know More</h6>
                              </ButtonOrange>
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ServiceContainer>
    );
  }
}

const ServiceContainer = styled.div`
  .flip-card {
    height: 20rem;

    perspective: 60rem;
    background: transparent;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    border-radius: 5%;
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.1);
  }
  a {
    font-size: 1.4rem !important;

    color: var(--brightOrange);
  }

  .flip-card-front {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    background-color: var(--mainWhite);
    color: black;
  }
  .flip-card-back {
    width: 100% !important;
    height: 100% !important;
    background-color: var(--brightBlue);
    color: var(--mainWhite);
    font-weight: 100 !important;
    border-radius: 5%;
    transform: rotateY(180deg);
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  /* .card:hover .card-content {
    curser: pointer;
    display: block !important;
  } */

  @media (min-width: 768px) and (max-width: 1024px) {
    .flip-card-back {
      padding: 5%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }

  @media (min-width: 481px) and (max-width: 767px) {
  }

  /*
      ##Device = Most of the Smartphones Mobiles (Portrait)

    */

  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
export default Services;
