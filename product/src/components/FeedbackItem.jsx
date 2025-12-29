import { ChevronUp, MessageSquare } from 'lucide-react'
import React from 'react'

const FeedbackItem = () => {
  return (
    <div className='bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer shadow-md'>
      <div className="flex items-start gap-6">
        <button className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all`}>
          <ChevronUp size={16} />
          <span className='font-bold text-sm'>Suggestion upvotes</span>
        </button>

        <div className='flex-1'>
          <h3 className="font-bold text-gray-800 text-lg mb-1 hover:text-blue-600 transition-all">Suggestion title</h3>
          <p className='text-gray-600 mb-3'>Suggestion Description</p>
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-lg text-sm font-semibold">
            Suggestation Title
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className='text-gray-400' size={18} />
          <span className="font-bold text-gray-800">Suggestation Comment</span>
        </div>
      </div>
    </div>
  )
}

export default FeedbackItem
