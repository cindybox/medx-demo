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
        <div className="card text-center p-5 col-8 col-md-3 my-5 mx-5 border rounded">
          <h3 className="text-uppercase subtitle text-orange">
            step {step[keys[0]]}
          </h3>
          <h5 className="text-capitalize subsubtitle text-darkblue">
            {step[keys[1]]}
          </h5>
          <p className="text-capitalize"> {ReactHtmlParser(step[keys[2]])} </p>
        </div>
      );
    })}
  </div>
);
