import React from "react";
import styled from "styled-components";
const Banner = () => (
  <div className="container-fluid section-lightblue py-5">
    <div className="row col-9 mx-auto py-5">
      <div className="col-md-5 my-5">
        <img src="images/aboutus.png" alt="" className="w-100" />
      </div>
      <div className="col-md-7 my-5">
        <h5 className="text-header1"> We Care About the Seniors</h5>

        <h5>
          Medx provides you with the comprehensive and personalized care needed
          for your family. This provides the patient and their family full
          support in dealing with their health condition. It is a program that
          focuses on giving the best possible care during the remaining days.
        </h5>
      </div>
    </div>
  </div>
);

const Hospice = () => (
  <HospiceWrapper>
    <div>
      <Banner />
      <div className="container-fluid section-darkblue py-5">
        <div className="col-9 mx-auto py-5 mt-5">
          <h2 className="text-header2 text-darkblue mb-4">Hospice Program</h2>
          <div className="row d-flex align-items-top">
            <div className="col-auto col-md-6">
              <h5>
                When a loved one is suffering from a terminal illness and is no
                longer responding to medications and treatments, he or she often
                prefers to be discharged and taken care of at home or a
                specialized facility. Hospice is a program specifically created
                for individuals who choose palliative care over medical
                treatment.
                <br /> <br />
                MedX Pharmacy provides you with the comprehensive and
                personalized care needed for your family. This provides the
                patient and their family full support in dealing with their
                health condition. It is a program that focuses on giving the
                best possible care during the remaining days.
              </h5>
            </div>
            <div className="col-auto d-sm-none d-md-inline-block col-md-6">
              <img src="images/icons/senior.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section-lightblue py-5">
        <div className="col-9 mx-auto py-5 mt-5">
          <h2 className="text-header2 text-darkblue my-4">Assisted Living</h2>
          <div className="row">
            <div className="col-auto d-sm-none d-md-inline-block col-md-6">
              <img src="images/icons/senior.png" alt="" />
            </div>
            <div className="col-auto col-md-6">
              <h5>
                We have been serving individual patients as well as healthcare
                providers for many years. We pay particular attention to
                healthcare providers such as assisted living facilities. We work
                with your company to ensure the best health of your residents.
                <br /> <br />
                <strong>We offering the following medical equipments</strong>
                <br />
                <br />
                <ul>
                  <li>Durable Medical Equipment (bulk orders and retail) </li>
                  <li>Diabetic Care Supplies</li>
                  <li>Health Monitoring Devices</li>
                  <li>Wheelchairs</li>
                  <li>Walkers </li>
                  <li>Crutches</li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HospiceWrapper>
);

const HospiceWrapper = styled.div`
  h5 {
    line-height: 1.6;
  }
`;
export default Hospice;
