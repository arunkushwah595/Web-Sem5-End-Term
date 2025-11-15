import React from 'react'

function MemeCard({ meme }) {
  if (!meme) return null

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-64">
      <div className="p-3">
        <img
          className="w-full h-56 object-cover rounded-md"
          src={meme?.url}
          alt={meme?.name}
        />
      </div>
      <div className="px-3 pb-3">
        <h2 className="font-semibold text-sm text-gray-700 text-center line-clamp-2">
          {meme?.name}
        </h2>
      </div>
    </div>
  )
}

export default MemeCard