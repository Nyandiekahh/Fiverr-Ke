import React from 'react';

function SearchFilters({ filters, setFilters }) {
  const categories = [
    'All Categories',
    'Web Development',
    'Digital Marketing',
    'Content Writing',
    'Graphic Design',
    'Video Editing',
    'Translation'
  ];

  const priceRanges = [
    { label: 'Any Price', value: '' },
    { label: 'Under KSh 1,000', value: '0-1000' },
    { label: 'KSh 1,000 - 5,000', value: '1000-5000' },
    { label: 'KSh 5,000 - 10,000', value: '5000-10000' },
    { label: 'Over KSh 10,000', value: '10000-plus' }
  ];

  const deliveryTimes = [
    { label: 'Any Time', value: '' },
    { label: 'Up to 24 hours', value: '24' },
    { label: 'Up to 3 days', value: '72' },
    { label: 'Up to 7 days', value: '168' },
    { label: 'Over 7 days', value: '168-plus' }
  ];

  const sellerLevels = [
    { label: 'Any Level', value: '' },
    { label: 'New Seller', value: 'new' },
    { label: 'Level 1', value: 'level_1' },
    { label: 'Level 2', value: 'level_2' },
    { label: 'Top Rated', value: 'top_rated' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full border rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            className="w-full border rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Time Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Time
          </label>
          <select
            value={filters.deliveryTime}
            onChange={(e) => setFilters({ ...filters, deliveryTime: e.target.value })}
            className="w-full border rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
          >
            {deliveryTimes.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>

        {/* Seller Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seller Level
          </label>
          <select
            value={filters.sellerLevel}
            onChange={(e) => setFilters({ ...filters, sellerLevel: e.target.value })}
            className="w-full border rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
          >
            {sellerLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (value && value !== 'All Categories') {
            return (
              <span
                key={key}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {value}
                <button
                  onClick={() => setFilters({ ...filters, [key]: '' })}
                  className="ml-2 focus:outline-none"
                >
                  ×
                </button>
              </span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default SearchFilters;