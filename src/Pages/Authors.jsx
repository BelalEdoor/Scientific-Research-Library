import React, { useState } from "react";

const authors = [
  {
    name: "Dr. Jane Doe",
    field: "AI & Computer Science",
    papers: 12,
    papersList: [
      {
        id: 1,
        title: "AI for Healthcare",
        year: 2023,
      },
      {
        id: 2,
        title: "Machine Learning Advances",
        year: 2024,
      },
      // المزيد من الأوراق ...
    ],
  },
  {
    name: "Prof. Ali Ahmad",
    field: "Physics",
    papers: 8,
    papersList: [
      { id: 3, title: "Quantum Mechanics Simplified", year: 2022 },
      { id: 4, title: "Particle Physics Today", year: 2023 },
    ],
  },
  {
    name: "Dr. Sarah Khan",
    field: "Biology",
    papers: 10,
    papersList: [
      { id: 5, title: "Genetic Research Trends", year: 2024 },
      { id: 6, title: "Marine Biology Studies", year: 2023 },
    ],
  },
  {
    name: "Prof. John Smith",
    field: "Mathematics",
    papers: 7,
    papersList: [
      { id: 7, title: "Topology and You", year: 2023 },
      { id: 8, title: "Advanced Calculus", year: 2022 },
    ],
  },
  {
    name: "Dr. Amina Youssef",
    field: "Chemistry",
    papers: 9,
    papersList: [
      { id: 9, title: "Organic Chemistry Innovations", year: 2023 },
      { id: 10, title: "Chemical Bonding Theories", year: 2024 },
    ],
  },
];

export default function Authors() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Meet Our Researchers
        </h2>

        {!selectedAuthor && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {authors.map((author, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                    {author.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{author.field}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {author.papers} published papers
                  </p>
                </div>
                <button
                  className="mt-auto bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition"
                  onClick={() => setSelectedAuthor(author)}
                >
                  View Papers
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedAuthor && (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedAuthor(null)}
              className="mb-4 text-blue-700 hover:underline dark:text-blue-400"
            >
              ← Back to Researchers
            </button>

            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Papers by {selectedAuthor.name}
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{selectedAuthor.field}</p>

            <ul className="list-disc list-inside space-y-2">
              {selectedAuthor.papersList.map((paper) => (
                <li key={paper.id} className="text-gray-800 dark:text-gray-200">
                  {paper.title} ({paper.year})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
