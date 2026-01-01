import { useDispatch, useSelector } from 'react-redux'
import FeedbackList from '../components/FeedbackList'
import FeedbackModel from '../components/FeedbackModel'
import Sidebar from '../components/Sidebar'
import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addSuggestion, toggleUpvote } from '../store/feedbackSlice'

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();

  //Redux

  const suggestions = useSelector((state) => state.feedback.suggestion)
  // console.log(suggestions);

  //UI state Local
  const [filterCategory, setFilterCateogry] = useState("All")
  const [sortBy, setSortBy] = useState("Most Upvotes")

  const modelOpen = location.pathname === '/add';
  const roadmapCounts = useMemo(() => ({
    Planned: suggestions.filter((s) => s.status === 'Planned').length,
    inProgress: suggestions.filter((s) => s.status === 'In-Progress').length,
    Live: suggestions.filter((s) => s.status === 'Live').length
  }), [suggestions])

  const openAdd = () => navigate('/add')
  const closeModel = () => navigate(-1) // back to previous

  const handleAdd = (payload) => {
    dispatch(addSuggestion)
    closeModel()
  }

  const handleUpvotes = (id) => dispatch(toggleUpvote(id))


  const handleView = (item) => {
    navigate(`/feedback/${item.id}`)
  }
  return (
    <div className='max-w-6l ax-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar
          filterCategory={filterCategory}
          setFilterCateogry={setFilterCateogry}
          roadmapCounts={roadmapCounts}
          openRoadmap={() => navigate('/roadmap')}
          openAdd={openAdd}

        />
        <div className="lg:col-span-3 spacce-y-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className='text-white font-bold'>{suggestions.length} Suggestion{" "}</span>
              <div className='flex items-center gap-2'>
                <select name=""
                value={sortBy}
                onClick={(e)=>setSortBy(e.target.value)}
                 id="" className='bg-transparent text-gray-400 text-sm border-none cursor-pointer'>
                  <option value="Most Upvotes">Most Upvotes</option>
                  <option value="Least Upvotes">Least Upvotes</option>
                  <option value="Most comments">Most Comment</option>
                  <option value="Least comments">Least Comment</option>
                </select>
              </div>
            </div>
            <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-normal'>+ Add Feedback</button>
          </div>
          <FeedbackList />
        </div>
      </div>
      {/* <FeedbackModel/> */}
    </div>
  )
}

export default HomePage
