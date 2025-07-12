import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const fields = [
    { name: "Computer Science", count: 120 },
    { name: "Physics", count: 85 },
    { name: "Biology", count: 97 },
    { name: "Mathematics", count: 60 },
    { name: "Chemistry", count: 72 },
    { name: "Engineering", count: 88 },
  ];

  const handleViewPapers = (fieldName) => {
    navigate(`/details/${encodeURIComponent(fieldName)}`);
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Explore Research by Scientific Field
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fields.map((field, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {field.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {field.count} research papers
                </p>
              </div>
              <button
                onClick={() => handleViewPapers(field.name)}
                className="mt-auto bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition"
              >
                View Papers
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
