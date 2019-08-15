import React from "react";
import data from "../data.json";
const ReviewData = data.review;

const Review = () => (
  <div className="container-fluid py-5 ">
    <div className="row section-lightblue py-5">
      <div className="col-9 mx-auto section-title mb-5">what do people say</div>
      <div className="col-9 mx-auto">
        <div className="row">
          {ReviewData.map(d => (
            <div className="col-auto mx-auto col-12 col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="card mx-1 mt-3 shadow p-4">
                <h6 className="subtitle text-darkblue mb-2">
                  <strong> {d.name}</strong>
                </h6>
                <h6
                  className="text-darkblue mb-4"
                  style={{ fontSize: "14px", fontWeight: "100" }}
                >
                  {" "}
                  Houston, TX
                </h6>
                <p> {d.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Review;
