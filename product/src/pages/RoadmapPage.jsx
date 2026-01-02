import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoadmapView from '../components/RoadmapView'
import { toggleUpvote } from '../store/feedbackSlice'

const RoadmapPage = () => {
  const suggestions = useSelector((s) => s.feedback.suggestion)
  // const comment = useSelector((s)=>s.feedback.comments)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpvote = (id) => dispatch(toggleUpvote)
  const handleview = (item) => navigate(`/feedback/${item.id}`)
  const openAdd = () => navigate('/add')

  // console.log(suggestions);
  
  return (
    <div className='max-w-6xl mx-auto'>
      <RoadmapView
        suggestions={suggestions}
        onview={handleview}
        onAdd={openAdd}
        onUpvote={handleUpvote}
      />
    </div>
  )
}

export default RoadmapPage