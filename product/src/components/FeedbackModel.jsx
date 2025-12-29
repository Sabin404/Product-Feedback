import React from 'react'
import { X } from 'lucide-react'

const FeedbackModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      
      {/* Modal Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Create New Feedback
          </h2>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Feedback Title
            </label>
            <input
              type="text"
              placeholder="Add a short, descriptive headline"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Feature</option>
              <option>UI</option>
              <option>UX</option>
              <option>Enhancement</option>
              <option>Bug</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Planned</option>
              <option>In Progress</option>
              <option>Live</option>
            </select>
          </div>

          {/* Details */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Feedback Details
            </label>
            <textarea
              rows="4"
              placeholder="Describe your feedback in detail..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 
                         py-3 rounded-lg font-semibold transition"
            >
              Cancel
            </button>

            <button
              type="button"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white 
                         py-3 rounded-lg font-semibold transition"
            >
              Delete
            </button>

            <button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white 
                         py-3 rounded-lg font-semibold transition"
            >
              Add Feedback
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default FeedbackModal
