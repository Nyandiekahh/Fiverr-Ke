import React, { useState } from 'react';

function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy reviews data - replace with API call later
  const reviews = [
    {
      id: 1,
      user: "Jane Smith",
      avatar: "https://via.placeholder.com/40",
      rating: 5,
      date: "2024-11-25",
      comment: "Excellent work! Delivered the project ahead of schedule and exceeded my expectations.",
      helpful: 12
    },
    {
      id: 2,
      user: "Mike Johnson",
      avatar: "https://via.placeholder.com/40",
      rating: 4,
      date: "2024-11-20",
      comment: "Great communication and quality work. Would recommend!",
      helpful: 8
    },
    {
      id: 3,
      user: "Sarah Williams",
      avatar: "https://via.placeholder.com/40",
      rating: 5,
      date: "2024-11-15",
      comment: "Very professional and responsive. The end result was exactly what I wanted.",
      helpful: 15
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>

      {/* Reviews Summary */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold">4.8</span>
            <div className="flex">{renderStars(5)}</div>
            <span className="text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center mb-3">
              <img 
                src={review.avatar} 
                alt={review.user} 
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">{review.user}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{review.comment}</p>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <svg 
                className="w-4 h-4 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" 
                />
              </svg>
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-3 py-1 border rounded-md bg-green-50 text-green-600">
            {currentPage}
          </span>
          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Reviews;