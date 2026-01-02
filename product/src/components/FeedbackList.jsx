import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({
  suggestion,
  filterCategory,
  sortBy,
  handleView,
  onUpvote
}) => {

  const filtered = suggestion.filter((s) => filterCategory === 'All' || s.category === filterCategory);

  const sorted = [...filtered].sort((a, b) => {
  if (sortBy === 'Most Upvotes') return b.upvotes - a.upvotes;
  if (sortBy === 'Least Upvotes') return a.upvotes - b.upvotes;
  if (sortBy === 'Most Comment') return b.comments - a.comments;
  if (sortBy === 'Least Comment') return a.comments - b.comments;
  return 0;
});


  //conditional Rendering
  if (filtered.length === 0) {
    return (
      <div className='bg-white rounded-xl p-12 text-center'>
        <p className='text-gray-600'>No Suggestion Found. Add one</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {
        sorted.map((s) => (
          <FeedbackItem
            key={s.id}
            suggestions={s}
            onUpvote={onUpvote}
            handleView={handleView}  
          />
        ))
      }
    </div>
  )
}

export default FeedbackList
