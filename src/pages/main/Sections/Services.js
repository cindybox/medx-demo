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
              <div className=" row d-flex justify-content-center  mt-5 ">
                {ServiceData.map(service => (
                  <div className="flip-card text-center col-12 col-md-3 mx-4 my-4 ">
                    <div className="flip-card-inner ">
                      <div className="flip-card-front p-5 d-flex-column align-items-center   ">
                        <div>
                          <img src={service.icon} alt="" className="w-75" />
                        </div>
                        <h5 className="text-capitalize subsubtitle text-darkblue my-auto ">
                          <strong> {service.title}</strong>
                        </h5>
                      </div>
                      <div className="flip-card-back text-capitalize p-5 d-flex flex-column align-items-stretch justify-content-center">
                        <p className="">{service.content.replace(/(\n)/g)}</p>
                        <div className="mt-3">
                          {service.link.length > 0 ? (
                            <Link to={service.link}>
                              {" "}
                              <ButtonOrange>Know More </ButtonOrange>
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
`;
export default Services;
