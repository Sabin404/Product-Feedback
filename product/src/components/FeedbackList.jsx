import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {

  //conditional Rendering
  // return (
  //   <div className='bg-white rounded-xl p-12 text-center'>
  //     <p className='text-gray-600'>No Suggestion Found. Add one</p>
  //   </div>
  // )

  return(
    <div className="space-y-4">
      <FeedbackItem/>
    </div>
  )
}

export default FeedbackList
