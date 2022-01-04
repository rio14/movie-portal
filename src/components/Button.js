import React from "react";
function Button({ action, color, title, children, type }) {
  return (
    <button
      className={`inline-flex items-center justify-center cursor-pointer text-white border-0 py-1 px-3 focus:outline-none rounded-lg text-base h-8 w-20 bg-${color}-500 hover:bg-${color}-700`}
      onClick={action}
    >
      {title}
    </button>
  );
}

export default Button;
