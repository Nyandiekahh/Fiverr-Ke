import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import GigCard from '../components/gigs/GigCard';
import SearchFilters from '../components/gigs/SearchFilters';

function Gigs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All Categories',
    priceRange: '',
    deliveryTime: '',
    sellerLevel: ''
  });

  // Dummy gigs data - replace with API call later
  const gigs = [
    {
      id: 1,
      title: "Professional Website Development",
      sellerName: "John Doe",
      sellerLevel: "Level 2",
      rating: 4.9,
      reviews: 182,
      price: 5000,
      category: "Web Development",
      deliveryTime: "72"
    },
    // ... add more gig data
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement search logic
  };

  // Filter gigs based on selected filters
  const filteredGigs = gigs.filter(gig => {
    let matches = true;

    if (filters.category !== 'All Categories') {
      matches = matches && gig.category === filters.category;
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      if (max === 'plus') {
        matches = matches && gig.price >= parseInt(min);
      } else {
        matches = matches && gig.price >= parseInt(min) && gig.price <= parseInt(max);
      }
    }

    if (filters.deliveryTime) {
      matches = matches && gig.deliveryTime <= filters.deliveryTime;
    }

    if (filters.sellerLevel) {
      matches = matches && gig.sellerLevel.toLowerCase() === filters.sellerLevel;
    }

    if (searchTerm) {
      matches = matches && gig.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return matches;
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <form onSubmit={handleSearch}>
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for services..."
                className="flex-1 px-4 py-2 border rounded-l-md focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-r-md hover:bg-green-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Filters */}
        <SearchFilters filters={filters} setFilters={setFilters} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredGigs.length} services available
          </p>
        </div>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.map(gig => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>

        {filteredGigs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No results found</h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gigs;