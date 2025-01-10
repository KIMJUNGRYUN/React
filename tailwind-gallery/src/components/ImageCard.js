import React from 'react'

const ImageCard = ({image}) => {
    const tags = image.tags.split(', '); //, 빈칸 공백 제거 
    //console.log(tags)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
       <div className="h-64 overflow-hidden">
      <img 
        src={image.largeImageURL} 
        alt="" 
        className="w-full" />
        </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, idx) => (
               <span 
                    key={idx} 
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
               >
                    #{tag}
                </span>
        ))}
      </div>
    </div>
  )
};

export default ImageCard
