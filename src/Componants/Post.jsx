import React from "react";

function Post({ user, actions }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={user.image}
          alt={user.title}
          className="w-full sm:w-32 h-32 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{user.title}</h2>
          <p className="text-gray-600 text-sm mb-3">{user.description}</p>
          <div className="flex gap-2">
            {actions?.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-md text-sm"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
