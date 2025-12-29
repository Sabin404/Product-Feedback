import FeedbackList from '../components/FeedbackList'
import FeedbackModel from '../components/FeedbackModel'
import Sidebar from '../components/Sidebar'
import React from 'react'

const HomePage = () => {
  return (
    <div className='max-w-6l ax-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar/>
        <div className="lg:col-span-3 spacce-y-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className='text-white font-bold'>Sugeestopm Length</span>
              <div className='flex items-center gap-2'>
                <select name="" id="" className='bg-transparent text-gray-400 text-sm border-none cursor-pointer'>
                  <option value="Most Upvotes">MostUpvotes</option>
                  <option value="Least Upvotes">MostUpvotes</option>
                  <option value="Most comments">Most Comment</option>
                  <option value="Least comments">Least Comment</option>
                </select>
              </div>
            </div>
            <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-normal'>+ Add Feedback</button>
          </div>
          <FeedbackList/>
        </div>
      </div>
      <FeedbackModel/>
    </div>
  )
}

export default HomePage
