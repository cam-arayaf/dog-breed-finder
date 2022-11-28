import React from "react";
import { bool, func, node } from "prop-types";
import { CheckMark, HiddenInput, Wrapper } from "./styled";

const Checkbox = ({ checked, children, disabled, setChecked }) => (
  <Wrapper disabled={disabled}>
    {children}
    <HiddenInput
      checked={checked}
      disabled={disabled}
      onChange={() => setChecked(!checked)}
      type="checkbox"
    />
    <CheckMark disabled={disabled} />
  </Wrapper>
);

Checkbox.propTypes = {
  checked: bool.isRequired,
  children: node.isRequired,
  setChecked: func.isRequired,
};

Checkbox.defaultProps = { disabled: false };

export default Checkbox;
