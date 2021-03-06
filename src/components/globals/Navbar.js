import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonOrange } from "./Button";
import { withRouter } from "react-router";
class Navbar extends Component {
  state = { collapsed: false };

  toggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <NavWrapper
        id="navwrapper"
        className="fixed-top"
        location={this.props.location.pathname.slice(1)}
      >
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="nav-brand ml-1 ml-md-4 ml-lg-5 my-2" to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo_b.png"}
              width="200rem"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler my-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerList"
            aria-controls="navbarTogglerList"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleCollapse}
          >
            <span>
              {this.state.collapsed ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-bars"></i>
              )}
            </span>
          </button>

          <div className="collapse navbar-collapse my-2" id="navbarTogglerList">
            <ul className="navbar-nav ml-lg-auto mr-lg-5 mt-2 mt-lg-0 d-flex align-items-center">
              <li className="nav-item ml-lg-1 ml-xl-3">
                <Link to="/aboutus" className="nav-link  text-center">
                  About Us
                </Link>
              </li>
              <li className="nav-item ml-lg-1 ml-xl-3 badge-colorsml-lg-3">
                <a href="/#howtostart" className="nav-link  text-center">
                  How to Start
                </a>
              </li>
              <li className="nav-item  ml-lg-1 ml-xl-3">
                <a href="/#service" className="nav-link  text-center">
                  Services
                </a>
              </li>
              <li className="nav-item  ml-lg-1 ml-xl-3">
                <Link to="/event" className="nav-link  text-center">
                  Events
                </Link>
              </li>
              <div className="function-buttons">
                <li className="nav-item  ml-lg-1 ml-xl-3 ">
                  <Link to="/refillrx" className="nav-link">
                    <ButtonOrange> Refill RX </ButtonOrange>
                  </Link>
                </li>
                <li className="nav-item  ml-lg-1 ml-xl-3 ">
                  <Link to="/transferrx" className="nav-link">
                    <ButtonOrange> Transfer RX </ButtonOrange>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  z-index: 6;
  background: ${(props) =>
    props.location === "aboutus" ? "var(--lightblue)" : "var(--lightestBlue)"};
  li:hover {
    cursor: pointer;
  }
  button,
  button:hover {
    border: none;
  }

  .function-buttons {
    display: flex;
  }
  @media (max-width: 1200px) {
    .function-buttons {
      display: block;
      // flex-flow: column wrap;
    }
  }
`;

export default withRouter(Navbar);
