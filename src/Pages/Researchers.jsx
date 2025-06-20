import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const researchers = [
  {
    id: 1,
    name: "Dr. Ahmad Al-Khatib",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    papers: [
      { id: 101, title: "AI for Healthcare", link: "/papers/101" },
      { id: 102, title: "Ethical Machine Learning", link: "/papers/102" },
    ],
  },
  {
    id: 2,
    name: "Prof. Sara Nasser",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    papers: [
      { id: 201, title: "Big Data Analysis in Retail", link: "/papers/201" },
      { id: 202, title: "Predictive Analytics Models", link: "/papers/202" },
    ],
  },
  {
    id: 3,
    name: "Dr. Youssef Mansour",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png",
    papers: [
      { id: 301, title: "Blockchain Technology Advances", link: "/papers/301" },
      { id: 302, title: "Cryptocurrency Security", link: "/papers/302" },
    ],
  },
  {
    id: 4,
    name: "Prof. Lina Haddad",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    papers: [
      { id: 401, title: "Cloud Computing Optimization", link: "/papers/401" },
      { id: 402, title: "Edge Computing in IoT", link: "/papers/402" },
    ],
  },
  {
    id: 5,
    name: "Dr. Omar Khalil",
    avatar: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    papers: [
      { id: 501, title: "Quantum Computing Basics", link: "/papers/501" },
      { id: 502, title: "Quantum Algorithms", link: "/papers/502" },
    ],
  },
  {
    id: 6,
    name: "Dr. Rania Suleiman",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
    papers: [
      { id: 601, title: "Natural Language Processing", link: "/papers/601" },
      { id: 602, title: "Chatbot Design Techniques", link: "/papers/602" },
    ],
  },
];

const ResearchersPage = () => {
  const [openResearcher, setOpenResearcher] = useState(null);
  const navigate = useNavigate();

  const togglePapers = (id) => {
    setOpenResearcher(openResearcher === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Researcher</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchers.map((researcher) => (
          <div
            key={researcher.id}
            className="bg-white rounded-xl shadow-md p-6 space-y-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={researcher.avatar}
                alt={researcher.name}
                className="w-14 h-14 rounded-full border"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {researcher.name}
              </h2>
            </div>

            <button
              onClick={() => togglePapers(researcher.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {openResearcher === researcher.id ? "Hide reserchs" : "list reserchs"}
            </button>

            {openResearcher === researcher.id && (
              <div className="space-y-2">
                {researcher.papers.map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-gray-50 p-3 rounded-md flex justify-between items-center border"
                  >
                    <p className="text-gray-800">{paper.title}</p>
                    <button
                      onClick={() => navigate(paper.link)}
                      className="text-sm px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                      Details
                    </button>
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchersPage;
