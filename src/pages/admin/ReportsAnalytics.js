import React, { useState } from 'react';

function ReportsAnalytics() {
  const [timeRange, setTimeRange] = useState('weekly');
  
  // Dummy data - replace with real API data
  const analyticsData = {
    revenue: {
      total: 450000,
      growth: 12.5,
      weekly: [15000, 18000, 12000, 20000],
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    orders: {
      total: 156,
      growth: 8.3,
      completed: 142,
      cancelled: 14
    },
    users: {
      total: 1250,
      new: 45,
      active: 890
    },
    topCategories: [
      { name: 'Web Development', orders: 45, revenue: 125000 },
      { name: 'Digital Marketing', orders: 38, revenue: 95000 },
      { name: 'Content Writing', orders: 32, revenue: 64000 },
      { name: 'Graphic Design', orders: 28, revenue: 56000 }
    ],
    topSellers: [
      { name: 'John Doe', sales: 28, revenue: 84000, rating: 4.9 },
      { name: 'Jane Smith', sales: 24, revenue: 72000, rating: 4.8 },
      { name: 'Mike Johnson', sales: 20, revenue: 60000, rating: 4.7 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Analytics Overview</h2>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="weekly">Last 7 Days</option>
            <option value="monthly">Last 30 Days</option>
            <option value="yearly">Last 12 Months</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-500 mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold">KSh {analyticsData.revenue.total.toLocaleString()}</p>
          <span className={`text-sm ${analyticsData.revenue.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {analyticsData.revenue.growth >= 0 ? '↑' : '↓'} {Math.abs(analyticsData.revenue.growth)}%
          </span>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-500 mb-2">Total Orders</h3>
          <p className="text-2xl font-bold">{analyticsData.orders.total}</p>
          <span className={`text-sm ${analyticsData.orders.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {analyticsData.orders.growth >= 0 ? '↑' : '↓'} {Math.abs(analyticsData.orders.growth)}%
          </span>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-500 mb-2">Active Users</h3>
          <p className="text-2xl font-bold">{analyticsData.users.active}</p>
          <span className="text-sm text-gray-500">
            +{analyticsData.users.new} new users
          </span>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-500 mb-2">Completion Rate</h3>
          <p className="text-2xl font-bold">
            {((analyticsData.orders.completed / analyticsData.orders.total) * 100).toFixed(1)}%
          </p>
          <span className="text-sm text-gray-500">
            {analyticsData.orders.cancelled} cancelled orders
          </span>
        </div>
      </div>

      {/* Top Categories */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">Top Categories</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {analyticsData.topCategories.map((category, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{category.name}</td>
                  <td className="px-6 py-4">{category.orders}</td>
                  <td className="px-6 py-4">KSh {category.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Sellers */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">Top Performing Sellers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seller</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {analyticsData.topSellers.map((seller, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{seller.name}</td>
                  <td className="px-6 py-4">{seller.sales}</td>
                  <td className="px-6 py-4">KSh {seller.revenue.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      {seller.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportsAnalytics;