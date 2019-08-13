import styled from "styled-components";

export const ButtonOrange = styled.button`
  background: var(--brightOrange) !important;
  padding: 3px;
  border: none !important;
  color: var(--mainWhite) !important;
  border-radius: 99999px !important;
  text-transform: capitalize;
  width: 10rem;
  &:hover {
    background: var(--darkBlue) !important;
  }
`;

export const ButtonSubmit = styled.button`
  background: transparent;
  padding: 5px;
  border: 2px var(--brightBlue) solid;
  font-weight: 700;
  color: var(--brightBlue) !important;
  border-radius: 99999px !important;
  text-transform: capitalize;
  width: 7rem;
  &:hover {
    background: var(--brightBlue) !important;
    color: var(--mainWhite) !important;
  }
`;

export const ButtonStep = styled.button`
  background: ${props =>
    props.isActive ? "var(--brightOrange)" : props.background};
  font-size: ${props => props.fontsize};
  width: ${props => props.width};
  padding: 10%;
  border: ${props =>
    props.isActive
      ? "1px var(--brightOrange) solid"
      : "1px var(--darkBlue) solid"};

  position: relative;
  border-radius: 5px !important;
  text-transform: capitalize;

  a {
    positioin: relative;
    color: ${props =>
      props.isActive ? "var(--mainWhite)" : "var(--darkBlue)"};
    &:hover {
      text-decoration: none !important;
    }
  }

  &:focus {
    border: none !important;
  }
  &:hover {
    background: ${props =>
      props.isActive ? "var(--brightOrange)" : "var(--mutedOrange)"};
    border: none !important;
  }

  &:hover a {
    color: var(--mainWhite);
    border-color: var(--mutedOrange) !important;
  }
  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 42%;
    border-top: ${props =>
      props.isActive
        ? "1rem var(--brightOrange) solid"
        : "1rem transparent solid"};
    border-left: 1rem transparent solid;
    border-right: 1rem transparent solid;
    clear: both;
  }

  @media (max-width: 767px) {
    width: 5rem;
    font-size: 1rem;
  }
`;

export const ButtonRound = styled.button`
  background: var(--darkBlue);
  height: 2rem;
  width: 2rem;
  border: none;
  color: var(--mainWhite);
  border-radius: 100%;
`;
