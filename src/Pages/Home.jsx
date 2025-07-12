// src/pages/Home.jsx
import React from 'react'

export default function Home() {
  return (
<section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">
      Welcome to the Scientific Research Library
    </h1>
    <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
      Discover, read, and share academic research papers from various scientific fields.
    </p>
    <a
      href="#"
      className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800 transition"
    >
      Start Exploring
    </a>
  </div>
</section>

  )
}
