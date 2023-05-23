const CustomButton = ({ children, bg, disabled, width, color, handleClick, borderColor, style, border, fontSize }) => (
  <button
    type="button"
    className={`custom-button px-2 ${bg} ${width} ${border} ${color} ${borderColor}`}
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default CustomButton;
