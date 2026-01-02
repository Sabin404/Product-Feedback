import { ArrowLeft, ChevronUp, MessageSquare } from 'lucide-react'
import React, { useState } from 'react'

const DetailView = ({
  feedback,
  comments,
  onBack,
  handleUpvotes,
  onAddComment,
  onEdit
}) => {

  const [newComment, setNewComment] = useState('')
  const handlePost = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      name: "Current User",
      username: '@curruser',
      avatar: "https://i.pravatar.cc/150?img=8",
      text: newComment,
      date: "Just now"
    }
    onAddComment(feedback.id, comment)
    setNewComment('')
  }
  return (
    <div className='max-w-3xl mx-auto space-y-6'>
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600">
          <ArrowLeft size={20} />Goback
        </button>
        <button
          onClick={onEdit}
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-semibold transition-all'>
          Edit Feedback
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-center gap-6">
          <button
            onClick={handleUpvotes}
            className={`flex
           ${feedback.upvoted ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-100"}
           flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all`}>
            <ChevronUp size={16} />
            <span className="font-bold text-sm">{feedback.upvotes}</span>
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-gray-600 text-xl mb-2">{feedback.title}</h2>
            <p className="text-gray-600 mb-3">{feedback.description}</p>
            <span className="inline-block text-blue-600">
              {feedback.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className='text-gray-400' size={18} />
            <span className="font-bold text-gray-800">{feedback.comment}</span>
          </div>
        </div>
      </div>
      {/* COnditional Rendering*/}
      {
        comments && comments.length > 0 && (
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-gray-800 text-lg mb-6">{comments.length}comments</h3>
            <div className="space-y-6">
              {
                comments.map((comment,idx)=>(
                  <div className="flex gap-4">
                <img src={comment.avatar} alt="" className='w-10 h-10 rounded-full' />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">
                        {comment.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{comment.username}</p>
                    </div>
                    <button className="text-blue-600 font-semibold text-sm hover:underline">Reply</button>
                  </div>
                  <p className='text-gray-600 text-sm leading leading-relaxed'>{comment.text}</p>
                </div>
                {
                  idx < comment.length -1 && 
                <div className="border-b border-gray-100 mt-6"></div>

                }
              </div>
              
                ))
              }

            </div>
          </div>
        )
      }
      <div className='bg-white rounded-xl p-6'>
        <h3 className="font-bold text-gray-600 text-lg mb-4">Add Comment</h3>
        <textarea 
        value={newComment}
        onChange={(e)=>setNewComment(e.target.value)}
        placeholder='Type your commmet......'
        className='w-full border border-gray-200 rounded-lg p-4 text-gray-800 resize-none focus:outline-none focus:ring-blue-50' rows={'4'} maxLength={250} />
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm " >{250-newComment.length}Character Left</span>
          <button
          onClick={handlePost}
          disabled={!newComment.trim()}
           className='bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all'>Post COmment</button>
        </div>
      </div>
    </div>
  )
}

export default DetailView
