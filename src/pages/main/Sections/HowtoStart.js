import React, { Component } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { PillTab } from "../../../components/Tab/PillTab";
import { PillContentContainer } from "../../../components/Tab/PillContentContainer";
import data from "../data.json";
const Steps = data.howtostart;

const PatientTypes = ["new", "refill", "transfer"];
const isActive = [true, false, false];

class HowtoStart extends Component {
  state = { isActive: [true, false, false] };
  toggleTab = type => {
    let index = PatientTypes.indexOf(type);
    let tempActive = [false, false, false];
    tempActive[index] = true;
    this.setState({ isActive: tempActive });
  };
  render() {
    return (
      <HowtoStartWrapper>
        <div className="container-fluid section-darkblue py-5">
          <div className="row  py-5">
            <div className="col-9 mx-auto section-title ">how to start </div>
            <div className="col-auto col-md-9 mx-auto ">
              <PillTab
                PatientTypes={PatientTypes}
                isActive={this.state.isActive}
                toggleTab={this.toggleTab}
                style={{
                  fontsize: "1.5rem",
                  width: "10rem",
                  background: "var(--mainWhite)"
                }}
              />

              <PillContentContainer
                PatientTypes={PatientTypes}
                Steps={Steps}
                isActive={this.state.isActive}
              />
            </div>
          </div>
        </div>{" "}
      </HowtoStartWrapper>
    );
  }
}

const HowtoStartWrapper = styled.div`
  .card {
    border-radius: 20px !important;
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.1);
  }

  .card a {
    color: var(--brightOrange);
    text-decoration: underline;
  }
`;
export default HowtoStart;
