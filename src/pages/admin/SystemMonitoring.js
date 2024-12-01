import React, { useState, useEffect } from 'react';

function SystemMonitoring() {
  const [systemStatus] = useState({
    status: 'operational',
    uptime: '99.9%',
    responseTime: '250ms',
    activeUsers: 125,
    errors: []
  });

  // Dummy data for system metrics
  const [metrics, setMetrics] = useState({
    serverLoad: [45, 62, 58, 49, 55, 57, 60, 65, 58, 50],
    memoryUsage: [70, 72, 68, 75, 69, 73, 71, 74, 70, 72],
    apiCalls: [1200, 1350, 1100, 1400, 1250, 1300, 1450, 1200, 1350, 1300],
    errors: [
      { id: 1, type: 'API Error', message: 'Payment Gateway Timeout', timestamp: '2024-01-15 10:30:00' },
      { id: 2, type: 'Database Error', message: 'Connection Pool Exceeded', timestamp: '2024-01-15 11:15:00' }
    ]
  });

  const getStatusColor = (status) => {
    const colors = {
      operational: 'bg-green-100 text-green-800',
      degraded: 'bg-yellow-100 text-yellow-800',
      down: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        serverLoad: [...prev.serverLoad.slice(1), Math.floor(Math.random() * 30) + 40],
        memoryUsage: [...prev.memoryUsage.slice(1), Math.floor(Math.random() * 15) + 65],
        apiCalls: [...prev.apiCalls.slice(1), Math.floor(Math.random() * 400) + 1000]
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* System Status Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">System Status</h2>
          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(systemStatus.status)}`}>
            {systemStatus.status.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-sm text-gray-500 mb-2">Uptime</h3>
            <p className="text-2xl font-bold">{systemStatus.uptime}</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-sm text-gray-500 mb-2">Response Time</h3>
            <p className="text-2xl font-bold">{systemStatus.responseTime}</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-sm text-gray-500 mb-2">Active Users</h3>
            <p className="text-2xl font-bold">{systemStatus.activeUsers}</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">Performance Metrics</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Server Load</h3>
            <div className="h-24 flex items-end space-x-2">
              {metrics.serverLoad.map((value, index) => (
                <div
                  key={index}
                  style={{ height: `${value}%` }}
                  className="w-1/10 bg-green-500 rounded-t"
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Memory Usage</h3>
            <div className="h-24 flex items-end space-x-2">
              {metrics.memoryUsage.map((value, index) => (
                <div
                  key={index}
                  style={{ height: `${value}%` }}
                  className="w-1/10 bg-blue-500 rounded-t"
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">API Calls/Hour</h3>
            <div className="h-24 flex items-end space-x-2">
              {metrics.apiCalls.map((value, index) => (
                <div
                  key={index}
                  style={{ height: `${(value / 1500) * 100}%` }}
                  className="w-1/10 bg-purple-500 rounded-t"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Error Logs */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">Error Logs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {metrics.errors.map((error) => (
                <tr key={error.id}>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {error.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">{error.message}</td>
                  <td className="px-6 py-4">{error.timestamp}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700">
                      View Details
                    </button>
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

export default SystemMonitoring;