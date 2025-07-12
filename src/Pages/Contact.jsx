import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}
