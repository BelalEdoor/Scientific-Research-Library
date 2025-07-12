import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// بيانات وهمية لأبحاث متعددة في مجالات مختلفة
const papersData = [
  {
    id: 1,
    title: "The Impact of Artificial Intelligence on Scientific Research",
    author: "Dr. Jane Doe",
    field: "Computer Science",
    year: 2025,
    abstract:
      "This research explores how artificial intelligence technologies are being utilized to accelerate scientific discoveries, improve data analysis, and reshape research methodologies across multiple fields of science...",
    keywords: ["AI", "Machine Learning", "Scientific Method", "Data Analysis"],
    downloads: 1234,
    views: 5678,
  },
  {
    id: 2,
    title: "Quantum Entanglement and Its Applications",
    author: "Prof. Ali Ahmad",
    field: "Physics",
    year: 2024,
    abstract:
      "This paper investigates quantum entanglement phenomena and their potential applications in computing and communication...",
    keywords: ["Quantum Physics", "Entanglement", "Quantum Computing"],
    downloads: 890,
    views: 2300,
  },
  {
    id: 3,
    title: "Advances in Computational Biology",
    author: "Dr. Sarah Khan",
    field: "Biology",
    year: 2023,
    abstract:
      "Exploring novel algorithms for gene sequencing and biological data analysis using computational techniques...",
    keywords: ["Computational Biology", "Algorithms", "Gene Sequencing"],
    downloads: 540,
    views: 1100,
  },
  // أضف المزيد كما تريد
];

export default function ResearchDetails() {
  const { fieldName } = useParams();
  const decodedField = decodeURIComponent(fieldName);
  const navigate = useNavigate();

  // تصفية الأوراق حسب المجال
  const papers = papersData.filter((paper) => paper.field === decodedField);

  // حالة الورقة المختارة للعرض التفصيلي
  const [selectedPaper, setSelectedPaper] = useState(papers[0] || null);

  // إذا لا توجد أوراق في المجال
  if (papers.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            No research papers found in "{decodedField}"
          </h1>
          <button
            onClick={() => navigate("/categories")}
            className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition"
          >
            Back to Categories
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-8">
        {/* قائمة الأوراق */}
        <aside className="md:w-1/3 max-h-[80vh] overflow-y-auto border-r border-gray-300 dark:border-gray-700 pr-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Papers in "{decodedField}"
          </h2>
          <ul>
            {papers.map((paper) => (
              <li
                key={paper.id}
                onClick={() => setSelectedPaper(paper)}
                className={`cursor-pointer p-3 mb-2 rounded-md ${
                  selectedPaper?.id === paper.id
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {paper.title}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/categories")}
            className="mt-4 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md transition"
          >
            Back to Categories
          </button>
        </aside>

        {/* تفاصيل الورقة */}
        {selectedPaper && (
          <article className="md:w-2/3 overflow-y-auto max-h-[80vh] pr-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {selectedPaper.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 text-gray-700 dark:text-gray-400">
              <div className="mb-2 md:mb-0">
                <span className="font-medium">Author:</span>{" "}
                {selectedPaper.author}
              </div>
              <div>
                <span className="font-medium">Field:</span> {selectedPaper.field}{" "}
                | <span className="font-medium">Year:</span>{" "}
                {selectedPaper.year}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Abstract
              </h2>
              <p className="leading-relaxed text-gray-800 dark:text-gray-300">
                {selectedPaper.abstract}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Keywords
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedPaper.keywords.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="text-gray-700 dark:text-gray-400 mb-4 md:mb-0">
                <p>
                  Downloads:{" "}
                  <span className="font-medium">{selectedPaper.downloads}</span>
                </p>
                <p>
                  Views: <span className="font-medium">{selectedPaper.views}</span>
                </p>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition">
                Download PDF
              </button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
