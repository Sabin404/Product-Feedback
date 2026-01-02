import { ArrowLeft, ChevronUp, MessageSquare } from 'lucide-react'
import React from 'react'

const RoadmapView = ({
  suggestions = [],
  onview,
  onAdd,
  onUpvote,
}) => {

  const statusCategories = [
    {
      name: 'Planned',
      color: 'border-orange-400',
      dot: 'bg-orange-400',
      items: suggestions.filter((s) => s.status === 'Planned'),
    },
    {
      name: 'In-Progress',
      color: 'border-purple-400',
      dot: 'bg-purple-400',
      items: suggestions.filter((s) => s.status === 'In-Progress'),
    },
    {
      name: 'Live',
      color: 'border-cyan-400',
      dot: 'bg-cyan-400',
      items: suggestions.filter((s) => s.status === 'Live'),
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4">

      {/* Header */}
      <div className="bg-gray-800 rounded-2xl p-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onview && onview(null)}
            className="flex items-center gap-2 text-white/80 hover:text-white font-semibold transition"
          >
            <ArrowLeft size={20} />
            Go back
          </button>
          <h1 className="text-white font-bold text-2xl">Roadmap</h1>
        </div>

        <button
          onClick={onAdd}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm"
        >
          + Add feedback
        </button>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {statusCategories.map((category) => (
          <div key={category.name} className="space-y-5">

            {/* Column Header */}
            <div>
              <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${category.dot}`} />
                {category.name}
                <span className="text-gray-400 font-semibold">
                  ({category.items.length})
                </span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Feedback currently {category.name.toLowerCase()}
              </p>
            </div>

            {/* Empty State */}
            {category.items.length === 0 && (
              <div className="text-center text-gray-400 text-sm py-10 border-2 border-dashed rounded-xl">
                No feedback yet
              </div>
            )}

            {/* Cards */}
            {category.items.map((item) => (
              <div
                key={item.id}
                onClick={() => onview && onview(item)}
                className={`bg-white rounded-2xl p-6 border-t-4 ${category.color}
                            cursor-pointer shadow-sm hover:shadow-xl 
                            hover:-translate-y-1 transition-all duration-200`}
              >
                {/* Status */}
                <div className="mb-3 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${category.dot}`} />
                  <span className="text-gray-500 text-xs font-semibold uppercase">
                    {category.name}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Category Tag */}
                <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full 
                                 text-xs font-semibold mb-5">
                  {item.category}
                </span>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onUpvote && onUpvote(item.id)
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg 
                               bg-gray-50 hover:bg-purple-100 
                               text-gray-700 hover:text-purple-700 
                               transition font-semibold text-sm"
                  >
                    <ChevronUp size={16} />
                    {item.upvotes}
                  </button>

                  <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                    <MessageSquare size={16} />
                    {item.comment || 0}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapView
