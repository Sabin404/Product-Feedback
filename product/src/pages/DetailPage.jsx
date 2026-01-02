import React, { useMemo, useState } from 'react'
import DetailView from '../components/DetailView'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, deleteSuggestion, toggleUpvote, updateSuggestion } from '../store/feedbackSlice'
import FeedbackModal from '../components/FeedbackModel'

const DetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const suggestionId = Number(id)
  const location = useLocation()
  const dispatch = useDispatch()

  const suggestions = useSelector((s) => s.feedback.suggestion)
  const comments = useSelector((s) => s.feedback.comments)

  const feedback = useMemo(() => suggestions.find((s) => s.id === suggestionId), [suggestions, suggestionId])

  if (!feedback) {
    navigate('/')
    return null
  }

  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleUpvotes = () => dispatch(toggleUpvote(feedback.id))

  const handleComments = (suggestionId, comment) => {
    dispatch(addComment({ suggestionId, comment }))
  }

  const handleUpdate = (payload) => {
    dispatch(updateSuggestion(payload))
    closeModal()
  }

  const handleDelete = (id) => {
    dispatch(deleteSuggestion(id))
    navigate('/')
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <DetailView
        feedback={feedback}
        comments={comments[feedback.id] || []}
        handleUpvotes={handleUpvotes}
        onBack={() => navigate('/')}
        onEdit={openModal}        // Open modal instead of navigating
        onAddComment={handleComments}
      />

      <FeedbackModal
        isOpen={isOpen}
        onClose={closeModal}
        editingFeedback={isOpen ? feedback : null}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default DetailPage
