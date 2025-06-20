import React from "react";

const Tags = ({ btn }) => {
  console.log(btn);
  return (
    <div className="m-2">
      <button
        onClick={btn.action}
        className="bg-purple-800 text-white py-2 px-4 rounded-md w-32 hover:bg-purple-700"
      >
        {btn.label}
      </button>
    </div>
  );
};

export default Tags;
