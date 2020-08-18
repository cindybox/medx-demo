import React, { Component } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { PillTab } from "../../components/Tab/PillTab";

import data from "./data.json";
const types = Object.keys(data);
let isActiveInit = types.map((t) => false);
isActiveInit[0] = true;

class Ingredient extends Component {
  state = { isActive: isActiveInit, tab: "", subtab: "" };

  toggleTab = (tab) => {
    let index = types.indexOf(tab);
    let tempActive = types.map((t) => false);
    tempActive[index] = true;
    this.setState({ isActive: tempActive });
  };

  toggleSubTab = (e, tab, subtab) => {
    e.preventDefault();
    this.setState({ tab: tab, subtab: subtab });
  };

  render() {
    return (
      <IngredientWrapper>
        <div className="container-fluid section-lightblue py-5">
          <div className="row  py-5">
            <div className="col-9 mx-auto section-title ">
              Compounding Ingredients
            </div>
            <div className="col-auto col-md-9 mx-auto ">
              <PillTab
                PatientTypes={types}
                isActive={this.state.isActive}
                toggleTab={this.toggleTab}
                style={{
                  fontsize: "1rem",
                  width: "12rem",
                  background: "var(--lightBlue)",
                }}
              />

              <div
                className="tab-content col-md-11 mx-auto"
                id="pills-tabContent"
              >
                {types.map((type, index) => (
                  <div
                    className={classNames("tab-pane", "pane", {
                      active: this.state.isActive[index],
                      show: this.state.isActive[index],
                    })}
                    id={`#pills-${type}`}
                    role="tabpanel"
                    aria-labelledby={`${type}-tab`}
                  >
                    <div className="card p-5">
                      <h5 className="text-blue py-3"> {data[type].desc}</h5>
                      <h4 className="text-darkblue mb-3">
                        <strong> Categories:</strong>
                      </h4>
                      <div className="row ">
                        {Object.keys(data[type].ingredients).map((k) => (
                          <h5
                            className="text-darkblue subsubtitle col-auto col-md-6 my-3 subtab"
                            onClick={(e) => {
                              this.toggleSubTab(e, type, k);
                            }}
                          >
                            {k}
                          </h5>
                        ))}
                      </div>{" "}
                    </div>
                  </div>
                ))}

                {/*ingredients */}
                <div className="card p-5 mt-3">
                  <h4 className="text-darkblue mb-3">
                    {" "}
                    <strong> Ingredients:</strong>
                  </h4>
                  <div className="d-flex justify-content-between">
                    {this.state.tab && this.state.subtab
                      ? data[this.state.tab].ingredients[
                          this.state.subtab
                        ].map((i) => (
                          <div className="text-darkblue subsubtitle  my-3 ">
                            {" "}
                            {i}
                          </div>
                        ))
                      : ""}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IngredientWrapper>
    );
  }
}

const IngredientWrapper = styled.div`
  a {
    width: 20rem;
    font-size: 1rem !important;
  }

  .card {
    border: 2px var(--darkBlue) solid;
    border-radius: 15px;
  }

  .subtab:hover {
    color: var(--brightGreen);
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default Ingredient;
