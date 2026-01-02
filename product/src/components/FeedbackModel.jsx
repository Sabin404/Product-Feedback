import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const FeedbackModal = ({ isOpen, onClose, onAdd, editingFeedback, handleUpdate, handleDelete }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Feature',
    status: 'Planned',
    description: ''
  })

  // Populate form when editingFeedback changes or modal opens
  useEffect(() => {
    if (editingFeedback) {
      setFormData({
        title: editingFeedback.title || '',
        category: editingFeedback.category || 'Feature',
        status: editingFeedback.status || 'Planned',
        description: editingFeedback.description || '',
      })
    } else {
      setFormData({
        title: '',
        category: 'Feature',
        status: 'Planned',
        description: ''
      })
    }
  }, [editingFeedback, isOpen])

  if (!isOpen) return null

  // Submit handler for Add/Edit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingFeedback) {
      handleUpdate && handleUpdate({ ...editingFeedback, ...formData });
    } else {
      onAdd && onAdd(formData)
    }
    onClose() // Close modal after submit
  }

  // Delete handler
  const handleDeleteClick = () => {
    if (!editingFeedback) return;
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      handleDelete && handleDelete(editingFeedback.id)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* Modal Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 md:p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {editingFeedback ? "Edit Feedback" : "Create a New Feedback"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Feedback Title
            </label>
            <input
              type="text"
              placeholder="Add a short, descriptive headline"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Planned</option>
              <option>In Progress</option>
              <option>Live</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Feedback Details
            </label>
            <textarea
              rows="4"
              placeholder="Describe your feedback in detail..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition"
            >
              Cancel
            </button>

            {/* Delete (only show if editing) */}
            {editingFeedback && (
              <button
                type="button"
                onClick={handleDeleteClick}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Delete
              </button>
            )}

            {/* Add/Edit */}
            <button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
            >
              {editingFeedback ? "Save Changes" : "Add Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedbackModal
