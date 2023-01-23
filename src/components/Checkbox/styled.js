import { bool } from "prop-types";
import styled from "styled-components";

export const CheckMark = styled.span`
  background-color: transparent;
  border: 2px solid #${({ disabled }) => (disabled ? "dadbe4" : "44c662")};
  border-radius: 4px;
  height: 20px;
  left: 0;
  position: absolute;
  top: -3px;
  transition: background-color 200ms linear;
  width: 20px;

  &::after {
    content: "";
    display: none;
    position: absolute;
  }
`;

export const HiddenInput = styled.input`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`;

export const Wrapper = styled.label`
  color: #444;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  padding-left: 32px;
  position: relative;
  user-select: none;

  input:checked ~ span {
    background-color: #${({ disabled }) => (disabled ? "dadbe4" : "44c662")};
    transition: background-color 200ms linear;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    border: solid white;
    border-width: 0 3px 3px 0;
    height: 13px;
    left: 6px;
    top: 0;
    transform: rotate(45deg);
    width: 5px;
  }
`;

CheckMark.propTypes = { disabled: bool.isRequired };
HiddenInput.propTypes = { disabled: bool.isRequired };
Wrapper.propTypes = { disabled: bool.isRequired };
