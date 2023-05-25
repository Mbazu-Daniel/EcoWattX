import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ padding, backgroundColor, textColor, borderColor, children, onClick }) => {
  const buttonStyle = {
    padding: padding,
    backgroundColor: backgroundColor,
    color: textColor,
    border: borderColor,
  };

  return (
    <button
      style={buttonStyle}
      className='inline-flex items-center justify-center h-12 font-medium tracking-wide transition duration-200 rounded shadow-md md:text-sm lg:text-[1rem] focus:outline-none capitalize'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  textColor: "white",
  borderColor: "none",
  onClick: () => {},
};

export default CustomButton;
