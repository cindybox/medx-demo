import React from "react";

const BannerTextCompounding = () => (
  <div className="bannercontent mt-5 row text-capitalize ">
    <div className="col-9 mx-auto mx-sm-auto">
      <h1 className="mb-2 text-header1">Personalized Compounding</h1>
      <div className="row">
        <div className="col-12 col-md-7 col-lg-5 mt-5 ml-1 mx-sm-auto ml-md-0">
          <h2 className="text-orange text-header2">
            Custom made for you and your pets
          </h2>
          <br />
          <h2 className="text-mutedblue text-header3">
            Compounding can be life changing. <br /> <br />
            At MedX Pharmacy it is rewarding to help patients and physicians
            find a resolution to medication needs
          </h2>
        </div>
      </div>

      <div className="d-flex align-items-center mt-5">
        <i class="fas fa-phone mr-3 p-3"></i>
        <div className="text-capitalize text-blue text-header3">
          <h3> have questions?</h3>
          <h3>
            call us at <strong> 281-506-2453</strong>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default [<BannerTextCompounding />];
