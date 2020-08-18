import React from "react";

import ReactHtmlParser from "react-html-parser";

export const PillContent = (steps) => (
  <div className="row d-flex justify-content-center mt-5 mx-auto ">
    {steps.map((step) => {
      let keys = Object.keys(step);

      return (
        <div className="card text-center px-3 py-2 py-md-3 py-lg-5 col-10 col-md-9 col-lg-3 mb-5 mx-1 mx-md-2 mx-lg-3 border rounded">
          <h3 className="text-uppercase subtitle text-orange ">
            <strong> step {step[keys[0]]}</strong>
          </h3>
          <h6 className="text-capitalize form-title text-darkblue my-4">
            <strong>{step[keys[1]]} </strong>
          </h6>
          <p className="text-capitalize"> {ReactHtmlParser(step[keys[2]])} </p>
        </div>
      );
    })}
  </div>
);
