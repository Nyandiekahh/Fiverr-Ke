import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import { useAuth } from '../context/AuthContext';

function Orders() {
  const [activeTab, setActiveTab] = useState('active');
  const { user } = useAuth();
  console.log('Current user:', user);

  // Dummy orders data - replace with API call later
  const orders = [
    {
      id: 1,
      title: "Professional Website Design",
      seller: "John Doe",
      price: 5000,
      status: "in_progress",
      dueDate: "2024-12-10",
      orderDate: "2024-11-30",
    },
    {
      id: 2,
      title: "Logo Design",
      seller: "Jane Smith",
      price: 3000,
      status: "completed",
      dueDate: "2024-11-25",
      orderDate: "2024-11-20",
    },
    {
      id: 3,
      title: "Content Writing",
      seller: "Mike Wilson",
      price: 2000,
      status: "revision",
      dueDate: "2024-12-05",
      orderDate: "2024-11-28",
    }
  ];

  const getStatusBadgeColor = (status) => {
    const colors = {
      in_progress: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      revision: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'active') {
      return ['in_progress', 'revision'].includes(order.status);
    } else if (activeTab === 'completed') {
      return order.status === 'completed';
    }
    return true;
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        {/* Tab Navigation */}
        <div className="mb-6 border-b">
          <nav className="flex space-x-8">
            {['active', 'completed', 'all'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 capitalize ${
                  activeTab === tab
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab} Orders
              </button>
            ))}
          </nav>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seller</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium">{order.title}</span>
                      <span className="text-sm text-gray-500">
                        Ordered: {formatDate(order.orderDate)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{order.seller}</td>
                  <td className="px-6 py-4">{formatDate(order.dueDate)}</td>
                  <td className="px-6 py-4">KSh {order.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(order.status)}`}>
                      {order.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/orders/${order.id}`}
                      className="text-green-600 hover:text-green-900"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500">
              Browse our marketplace to find services you need
            </p>
            <Link
              to="/gigs"
              className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Browse Gigs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;