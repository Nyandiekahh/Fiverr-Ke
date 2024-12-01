import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import GigsManagement from './GigsManagement';
import OrdersManagement from './OrdersManagement';
import ReportsAnalytics from './ReportsAnalytics';
import AdminSettings from './AdminSettings';
import SystemMonitoring from './SystemMonitoring';
import ActivityLog from './ActivityLog';
import UsersManagement from './UsersManagement';


function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();

  // Dummy data - replace with API calls
  const statistics = {
    totalUsers: 1250,
    totalGigs: 450,
    activeOrders: 89,
    totalRevenue: 250000,
    recentOrders: [
      {
        id: 1,
        buyer: "John Doe",
        service: "Website Development",
        amount: 5000,
        status: "in_progress"
      },
      // Add more orders...
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">Welcome, {user?.name}</span>
              <Link to="/" className="text-green-600 hover:text-green-700">
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <nav className="space-y-1">
                {[
                  'overview',
                  'users',
                  'gigs',
                  'orders',
                  'reports',
                  'settings',
                  'monitoring',
                  'activity'
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full px-4 py-3 text-left capitalize ${
                      activeTab === tab
                        ? 'bg-green-50 text-green-600 border-l-4 border-green-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
          {activeTab === 'gigs' && <GigsManagement />}
          {activeTab === 'orders' && <OrdersManagement />}
          {activeTab === 'reports' && <ReportsAnalytics />}
          {activeTab === 'settings' && <AdminSettings />}
          {activeTab === 'monitoring' && <SystemMonitoring />}
          {activeTab === 'activity' && <ActivityLog />}
          {activeTab === 'users' && <UsersManagement />}



            {/* Statistics Cards */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm">Total Users</h3>
                    <p className="text-2xl font-bold">{statistics.totalUsers}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm">Total Gigs</h3>
                    <p className="text-2xl font-bold">{statistics.totalGigs}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm">Active Orders</h3>
                    <p className="text-2xl font-bold">{statistics.activeOrders}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm">Total Revenue</h3>
                    <p className="text-2xl font-bold">KSh {statistics.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-bold">Recent Orders</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {statistics.recentOrders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4">{order.id}</td>
                            <td className="px-6 py-4">{order.buyer}</td>
                            <td className="px-6 py-4">{order.service}</td>
                            <td className="px-6 py-4">KSh {order.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                order.status === 'completed' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status.replace('_', ' ').toUpperCase()}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab Content */}
            {activeTab === 'users' && (
              <div className="bg-white rounded-lg shadow">
                {/* Add users management content */}
              </div>
            )}

            {/* Gigs Tab Content */}
            {activeTab === 'gigs' && (
              <div className="bg-white rounded-lg shadow">
                {/* Add gigs management content */}
              </div>
            )}

            {/* Add other tab contents... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;