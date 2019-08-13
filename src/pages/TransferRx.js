import { ButtonRound, ButtonSubmit } from "../components/globals/Button.js";
import React, { Component } from "react";

class TransferRX extends Component {
  state = { rxrows: 0 };
  addRxRows = e => {
    e.preventDefault();
    this.setState(prevState => ({ rxrows: prevState.rxrows + 1 }));
  };

  render() {
    return (
      <div className="container-fluid row py-5 ">
        <div className="col-9 mx-auto py-5">
          <h2 className="text-header2 text-darkblue my-4">
            Switch to Medx is Easy
          </h2>

          <form>
            <div className="form-group mb-5">
              <p>
                <strong className="text-capitalize text-blue form-title">
                  Who is This Medication For?
                </strong>
              </p>
              <div class="form-row">
                <div class=" col-6 mb-2">
                  <label for="firstname">First Name</label>
                  <input type="text" class="form-control" id="firstname" />
                </div>
                <div class="col-6 mb-2">
                  <label for="lastname">Last Name</label>
                  <input type="lastname" class="form-control" id="lastname" />
                </div>
                <div class="col-6 mb-2">
                  <label for="phone">Phone Number</label>
                  <input type="text" class="form-control" id="phone" />
                </div>
                <div class="col-6 mb-2">
                  <label for="dob">Date of Birth</label>
                  <input type="dob" class="form-control" id="dob" />
                </div>
                <div class="col-6 mb-2">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" />
                </div>
              </div>
            </div>

            <div className="form-group mb-5">
              <p>
                <strong className="text-capitalize text-blue form-title">
                  Which Pharamcy You are Currently Using?
                </strong>
              </p>
              <div class="form-row">
                <div class=" col-6 mb-2">
                  <label for="pharmname">Current Pharmacy Name</label>
                  <input type="text" class="form-control" id="pharmname" />
                </div>
                <div class="col-6 mb-2">
                  <label for="pharmnumber">Current Pharmacy Number</label>
                  <input
                    type="pharmnumber"
                    class="form-control"
                    id="pharmnumber"
                  />
                </div>
              </div>
            </div>

            <div class="form-group mb-5">
              <p>
                <strong className="text-capitalize text-blue form-title">
                  How do you want to receive your medication?
                </strong>
              </p>
              <div class="form-check-inline mr-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkdelivery"
                />
                <label class="form-check-label" for="checkdelivery">
                  Delivery
                </label>
              </div>
              <div class="form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkpickup"
                />
                <label class="form-check-label" for="checkpickup">
                  Pick Up
                </label>
              </div>
            </div>

            <div class="form-group mb-5">
              <p>
                <strong className="text-capitalize text-blue form-title">
                  Delivery Address
                </strong>
              </p>
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <ButtonSubmit>SUBMIT </ButtonSubmit>
            </div>
          </form>

          <div className="d-flex align-items-center mt-5">
            <i class="fas fa-phone mr-3 p-3"></i>
            <div className="text-capitalize text-blue">
              <h5> have questions?</h5>
              <h5>
                call us at <strong> 281-506-2453</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransferRX;
