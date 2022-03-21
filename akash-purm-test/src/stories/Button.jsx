import React, { State } from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick, ...props }) => {
  return (
    <button type="button" onClick={onClick} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onCLick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
