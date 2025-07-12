import React, { useState } from 'react'

export default function SubmitResearch() {
  // حالة البيانات للنموذج
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    field: '',
    year: '',
    keywords: '',
    abstract: '',
   
  })

  // حالة الخطأ أو رسالة التأكيد
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  // تحديث بيانات النموذج عند التغيير
  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'file') {
      setFormData((prev) => ({ ...prev, file: files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // التحقق من صحة البيانات عند الإرسال
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    // تحقق بسيط: تأكد من أن الحقول الأساسية معبأة
    if (
      !formData.title.trim() ||
      !formData.authors.trim() ||
      !formData.field ||
      !formData.year.trim() ||
      !formData.abstract.trim() 
 
    ) {
      setError('Please fill in all required fields and upload a PDF file.')
      return
    }

    // تحقق من صيغة السنة (مثلاً بين 1900 و 2100)
    const yearNum = Number(formData.year)
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > 2100) {
      setError('Please enter a valid year between 1900 and 2100.')
      return
    }

   
    // هنا يمكنك تنفيذ أي منطق بعد الإرسال، مثل رفع الملف أو تخزين البيانات
    // حاليا فقط نعرض رسالة تأكيد
    setMessage('Research paper submitted successfully! Thank you.')
    // إعادة تعيين النموذج
    setFormData({
      title: '',
      authors: '',
      field: '',
      year: '',
      keywords: '',
      abstract: '',
      
    })

    // إذا كان لديك مدخل input type file، فبعض المتصفحات لا تسمح إعادة تعيين القيمة يدوياً، يمكن استخدام ref أو إعادة تحميل الصفحة حسب الحاجة.
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Submit Your Research Paper
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* رسالة الخطأ */}
          {error && (
            <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>
          )}
          {/* رسالة النجاح */}
          {message && (
            <div className="mb-4 text-green-600 font-semibold text-center">{message}</div>
          )}

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Title</label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter research title"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Authors</label>
            <input
              name="authors"
              type="text"
              value={formData.authors}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="E.g. Dr. Jane Doe, Prof. Ali Ahmad"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Field</label>
              <select
                name="field"
                value={formData.field}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="">Select field</option>
                <option>Computer Science</option>
                <option>Physics</option>
                <option>Biology</option>
                <option>Chemistry</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Year</label>
              <input
                name="year"
                type="number"
                value={formData.year}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="e.g. 2025"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Keywords</label>
            <input
              name="keywords"
              type="text"
              value={formData.keywords}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="E.g. AI, Data Science, Algorithms"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Abstract</label>
            <textarea
              name="abstract"
              rows="5"
              value={formData.abstract}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Write a short abstract..."
            ></textarea>
          </div>

    

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md transition"
            >
              Submit Research
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
