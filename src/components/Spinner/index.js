import { bool, string } from "prop-types";
import styled from "styled-components";

const Spinner = styled.span`
  display: block;
  margin: ${({ margin }) => margin};
  width: ${({ little }) => (little ? "20" : "80")}px;

  :after {
    animation: lds-hourglass 1.2s infinite;
    border: ${({ little }) => (little ? "10" : "32")}px solid #2bb9c8;
    border-color: #2bb9c8 transparent #2bb9c8 transparent;
    border-radius: 50%;
    content: " ";
    display: block;
    margin: ${({ little }) => (little ? "0" : "8px")};
  }

  @keyframes lds-hourglass {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transform: rotate(0);
    }
    50% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(900deg);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

Spinner.propTypes = { little: bool, margin: string };
Spinner.defaultProps = { little: false, margin: "0 auto" };

export default Spinner;
