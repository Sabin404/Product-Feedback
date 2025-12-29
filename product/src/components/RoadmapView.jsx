import { ArrowLeft, ChevronUp, MessageSquare } from 'lucide-react'
import React from 'react'

const RoadmapView = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="bg-gray-800 rounded-2xl p-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <button className="flex items-center gap-2 text-white/80 hover:text-white font-semibold transition">
            <ArrowLeft size={20} />
            Go back
          </button>
          <div className="ml-4">
            <h1 className="text-white font-bold text-2xl">Roadmap</h1>
          </div>
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm">
          + Add feedback
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <h2 className="font-bold text-gray-900 mb-1 text-lg">
            Category name and length
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Category Name
          </p>

          <div className="space-y-5">

            <div className="bg-white rounded-2xl p-6 border-t-4 border-purple-500 cursor-pointer 
                            hover:shadow-xl transition-all">

              <div className="mb-3 flex items-center gap-2">
                <div className="inline-block w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                <span className="text-gray-500 text-sm font-medium">
                  Category Name
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Item title
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Item Description
              </p>

              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-lg 
                               text-sm font-semibold mb-5">
                Item Category
              </span>

              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 
                                   hover:bg-gray-100 transition">
                  <ChevronUp size={17} />
                  <span className="font-bold text-sm">
                    Item-votes
                  </span>
                </button>

                <div className="flex items-center gap-2 text-gray-500">
                  <MessageSquare size={18} />
                  <span className="font-bold text-sm">
                    Item-Comments
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default RoadmapView
