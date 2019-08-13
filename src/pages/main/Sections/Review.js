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
            <div className="col-auto mx-auto col-md-4">
              <div
                className="card mx-1 my-3 shadow px-5 pt-5"
                style={{ height: "22rem" }}
              >
                <h6 className="subtitle text-darkblue mb-4">
                  <strong> {d.name}</strong>
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
