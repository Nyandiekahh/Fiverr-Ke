import React from 'react';
import { Link } from 'react-router-dom';

function GigCard({ gig }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img 
        src={gig.image || "https://via.placeholder.com/300x200"} 
        alt={gig.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img 
            src={gig.sellerImage || "https://via.placeholder.com/40x40"} 
            alt="seller" 
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <p className="font-semibold">{gig.sellerName}</p>
            <p className="text-sm text-gray-500">{gig.sellerLevel}</p>
          </div>
        </div>
        <Link to={`/gigs/${gig.id}`}>
          <h3 className="font-semibold mb-2 hover:text-green-600">{gig.title}</h3>
        </Link>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">★</span>
          <span className="ml-1">{gig.rating}</span>
          <span className="text-gray-400 ml-1">({gig.reviews})</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t">
          <p className="text-sm text-gray-500">Starting at</p>
          <p className="font-bold text-lg">KSh {gig.price}</p>
        </div>
      </div>
    </div>
  );
}

export default GigCard;