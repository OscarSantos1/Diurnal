import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ color: color }}
      className="border border-slate-500 py-1 px-5 rounded-2xl"
    >
      {text}
    </button>
  );
};

export default Button;
