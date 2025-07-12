import React, { useState } from "react";

const papersData = [
  {
    id: 1,
    title: "Artificial Intelligence in Healthcare",
    author: "Dr. Jane Doe",
    field: "Computer Science",
    year: 2025,
  },
  {
    id: 2,
    title: "Quantum Mechanics Basics",
    author: "Prof. Ali Ahmad",
    field: "Physics",
    year: 2024,
  },
  {
    id: 3,
    title: "Advances in Biology",
    author: "Dr. Sarah Khan",
    field: "Biology",
    year: 2023,
  },
  {
    id: 4,
    title: "Machine Learning Trends",
    author: "Dr. Jane Doe",
    field: "Computer Science",
    year: 2024,
  },
  {
    id: 5,
    title: "Mathematical Modeling",
    author: "Prof. John Smith",
    field: "Mathematics",
    year: 2025,
  },
];

export default function Search() {
  // حالات البحث والفلاتر
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("All Fields");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");

  // دالة لتصفية الأوراق حسب المدخلات
  const filteredPapers = papersData.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesField =
      selectedField === "All Fields" || paper.field === selectedField;

    const matchesYear =
      selectedYear === "All Years" || paper.year.toString() === selectedYear;

    const matchesAuthor =
      selectedAuthor === "All Authors" || paper.author === selectedAuthor;

    return matchesSearch && matchesField && matchesYear && matchesAuthor;
  });

  // خيارات الفلاتر فريدة من بيانات الأوراق
  const uniqueFields = [
    "All Fields",
    ...Array.from(new Set(papersData.map((p) => p.field))),
  ];
  const uniqueYears = [
    "All Years",
    ...Array.from(new Set(papersData.map((p) => p.year.toString()))),
  ];
  const uniqueAuthors = [
    "All Authors",
    ...Array.from(new Set(papersData.map((p) => p.author))),
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
          Search Scientific Papers
        </h2>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by title or author"
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => {}}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition"
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {uniqueFields.map((field) => (
              <option key={field}>{field}</option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {uniqueYears.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>

          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {uniqueAuthors.map((author) => (
              <option key={author}>{author}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {paper.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Author: <span className="font-medium">{paper.author}</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Field: {paper.field} • Published: {paper.year}
                </p>
                <button className="text-blue-600 hover:underline dark:text-blue-400">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 dark:text-gray-300">
              No results found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
