
// import React, { useState } from 'react';
// import { ArrowUpRight } from 'lucide-react';

// function CardFour() {
//   // Dummy data
//   const cardData = {
//     title: 'About Macbook',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
//     tags: ['#Macbook', '#Apple', '#Laptop'],
//     author: {
//       name: 'Dan Abromov',
//       username: '@dan_abromov',
//       profilePic:
//         'https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg',
//     },
//   };

//   const [filter, setFilter] = useState('All'); // Default filter is set to 'All'

//   // Filter logic based on the selected filter
//   const filteredTags =
//     filter === 'All'
//       ? cardData.tags
//       : cardData.tags.filter(tag => tag.toLowerCase().includes(filter.toLowerCase()));

//   return (
//     <div className="relative">
//       {/* Title */}
//       <h2 className="text-2xl font-bold mb-4 mt-8">Purchase Orders</h2>

//       {/* Filter dropdown */}
//       <div className="absolute top-0 right-0 mt-2 mr-2">
//         <label htmlFor="filter" className="text-sm font-medium text-gray-700">
//           Filter by:
//         </label>
//         <select
//           id="filter"
//           name="filter"
//           className="ml-2 p-1 border border-gray-300 rounded-md"
//           value={filter}
//           onChange={e => setFilter(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Recent">Recent</option>
//           <option value="Popular">Popular</option>
//         </select>
//       </div>

//       {/* Card content */}
//       <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
//         <div className="h-full w-full md:h-[200px] md:w-[300px]">
//           <img
//             src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//             alt="Laptop"
//             className="h-full w-full rounded-md object-cover"
//           />
//         </div>
//         <div>
//           <div className="p-4">
//             <h1 className="inline-flex items-center text-lg font-semibold">
//               {cardData.title} <ArrowUpRight className="ml-2 h-4 w-4" />
//             </h1>
//             <p className="mt-3 text-sm text-gray-600">{cardData.description}</p>
//             <div className="mt-4">
//               {filteredTags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="mt-3 flex items-center space-x-2">
//               <img
//                 className="inline-block h-8 w-8 rounded-full"
//                 src={cardData.author.profilePic}
//                 alt={cardData.author.name}
//               />
//               <span className="flex flex-col">
//                 <span className="text-[10px] font-medium text-gray-900">
//                   {cardData.author.name}
//                 </span>
//                 <span className="text-[8px] font-medium text-gray-500">
//                   {cardData.author.username}
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardFour;
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

function CardFour() {
  // Dummy data
  const cardData = {
    title: 'About Macbook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Macbook', '#Apple', '#Laptop'],
    author: {
      name: 'Dan Abromov',
      username: '@dan_abromov',
      profilePic:
        'https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg',
    },
  };

  const [filter, setFilter] = useState('All'); // Default filter is set to 'All'

  // Filter logic based on the selected filter
  const filteredTags =
    filter === 'All'
      ? cardData.tags
      : cardData.tags.filter(tag => tag.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="relative">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 mt-8">My Trainings</h2>

      {/* Filter dropdown */}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <label htmlFor="filter" className="text-sm font-medium text-gray-700">
          Filter by:
        </label>
        <select
          id="filter"
          name="filter"
          className="ml-2 p-1 border border-gray-300 rounded-md"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Recent">Recent</option>
          <option value="Popular">Popular</option>
        </select>
      </div>

      {/* Card content */}
      <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {cardData.title} <ArrowUpRight className="ml-2 h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-gray-600">{cardData.description}</p>
            <div className="mt-4">
              {filteredTags.map((tag, index) => (
                <span
                  key={index}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src={cardData.author.profilePic}
                alt={cardData.author.name}
              />
              <span className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-900">
                  {cardData.author.name}
                </span>
                <span className="text-[8px] font-medium text-gray-500">
                  {cardData.author.username}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination at the bottom */}
        <div className="flex items-center mt-64">
        <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
          &larr; Previous
        </a>
        {[1, 2, 3, 4].map(page => (
          <a
            key={page}
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            {page}
          </a>
        ))}
        <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
          Next &rarr;
        </a>
      </div>
    </div>
  );
}

export default CardFour;
