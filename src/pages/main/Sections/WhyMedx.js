import React from "react";
import data from "../data.json";
const WhyMedxData = data.whymedx;

const WhyMedx = () => (
  <div className="container-fluid py-5 ">
    <div className="row section-lightblue py-5">
      <div className="col-9 mx-auto section-title ">why people choose medx</div>
      <div className="col-9 mx-auto">
        <div className="row">
          {WhyMedxData.map(d => (
            <div className="col-12 col-md-6 p-4 mx-auto  mt-4">
              <h3 className="subtitle text-orange mb-3"> {d.title}</h3>
              <h6> {d.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default WhyMedx;
