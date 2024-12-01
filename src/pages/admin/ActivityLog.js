import React, { useState } from 'react';

function ActivityLog() {
  const [dateRange, setDateRange] = useState('today');
  const [filterType, setFilterType] = useState('all');

  // Dummy activity data - replace with API call
  const activities = [
    {
      id: 1,
      admin: "John Admin",
      action: "user_ban",
      description: "Banned user 'spammer123' for violation of terms",
      timestamp: "2024-01-15T10:30:00",
      type: "user",
      details: { userId: "123", reason: "spam" }
    },
    {
      id: 2,
      admin: "Sarah Admin",
      action: "gig_removal",
      description: "Removed gig 'Fake Service Listing'",
      timestamp: "2024-01-15T11:15:00",
      type: "gig",
      details: { gigId: "456", reason: "fraudulent listing" }
    },
    {
      id: 3,
      admin: "Mike Admin",
      action: "payment_refund",
      description: "Processed refund for order #789",
      timestamp: "2024-01-15T12:00:00",
      type: "payment",
      details: { orderId: "789", amount: "5000" }
    },
    {
      id: 4,
      admin: "John Admin",
      action: "settings_update",
      description: "Updated system commission rate to 12%",
      timestamp: "2024-01-15T13:30:00",
      type: "settings",
      details: { setting: "commission", oldValue: "10", newValue: "12" }
    }
  ];

  const getActionColor = (action) => {
    const colors = {
      user_ban: 'bg-red-100 text-red-800',
      gig_removal: 'bg-yellow-100 text-yellow-800',
      payment_refund: 'bg-blue-100 text-blue-800',
      settings_update: 'bg-green-100 text-green-800'
    };
    return colors[action] || 'bg-gray-100 text-gray-800';
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-lg font-bold mb-4 md:mb-0">Activity Log</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="today">Today</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="custom">Custom Range</option>
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="all">All Actions</option>
              <option value="user">User Management</option>
              <option value="gig">Gig Management</option>
              <option value="payment">Payment Actions</option>
              <option value="settings">System Settings</option>
            </select>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="space-y-6">
          {activities
            .filter(activity => filterType === 'all' || activity.type === filterType)
            .map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="min-w-[150px] text-sm text-gray-500">
                  {formatTimestamp(activity.timestamp)}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{activity.admin}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getActionColor(activity.action)}`}>
                      {activity.action.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{activity.description}</p>
                  <div className="text-sm text-gray-500">
                    {Object.entries(activity.details).map(([key, value]) => (
                      <div key={key} className="inline-block mr-4">
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                  <button className="text-green-600 hover:text-green-700 text-sm mt-2">
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing {activities.length} activities
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityLog;