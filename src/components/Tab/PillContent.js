import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
export const PillContent = steps => (
  <div className="row d-flex justify-content-center mt-5 mx-auto ">
    {steps.map(step => {
      let keys = Object.keys(step);

      return (
        <div className="card text-center px-3 py-5 col-8 col-md-4 col-lg-3 my-5 mx-5 border rounded">
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
