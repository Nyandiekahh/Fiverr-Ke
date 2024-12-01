import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import { useAuth } from '../context/AuthContext';

function OrderDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [message, setMessage] = useState('');

  // Dummy order data - replace with API call later
  const orderData = {
    id: 1,
    title: "Professional Website Design",
    seller: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/40",
      rating: 4.9
    },
    price: 5000,
    status: "in_progress",
    dueDate: "2024-12-10",
    orderDate: "2024-11-30",
    delivery: "3 days",
    revisions: 2,
    description: "Full website design including responsive layout, modern UI/UX, and basic SEO optimization.",
    requirements: "Please provide your brand colors, logo, and any specific design preferences.",
    timeline: [
      {
        date: "2024-11-30",
        status: "Order Placed",
        description: "Order was placed and payment confirmed"
      },
      {
        date: "2024-12-01",
        status: "Requirements Submitted",
        description: "Client provided project requirements"
      },
      {
        date: "2024-12-02",
        status: "In Progress",
        description: "Work started on the project"
      }
    ],
    deliverables: [
      {
        id: 1,
        name: "Initial Design Draft",
        date: "2024-12-02",
        type: "image/pdf",
        size: "2.5 MB"
      }
    ]
  };

  const getStatusBadgeColor = (status) => {
    const colors = {
      in_progress: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      revision: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  const handleDeliveryAccept = () => {
    console.log('Delivery accepted');
  };

  const handleRevisionRequest = () => {
    console.log('Revision requested');
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Order Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{orderData.title}</h1>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBadgeColor(orderData.status)}`}>
                      {orderData.status.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className="text-gray-500">
                      Order #{orderData.id}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">KSh {orderData.price}</p>
                  <p className="text-gray-500">Due: {new Date(orderData.dueDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Order Timeline</h2>
              <div className="space-y-6">
                {orderData.timeline.map((event, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-green-500 mt-2"></div>
                      {index !== orderData.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-green-200 ml-2"></div>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{event.status}</p>
                      <p className="text-sm text-gray-500">{event.description}</p>
                      <p className="text-sm text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Deliverables</h2>
              {orderData.deliverables.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="font-semibold">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {file.size} • {new Date(file.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button className="text-green-600 hover:text-green-700">
                    Download
                  </button>
                </div>
              ))}
            </div>

            {/* Message Box */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Message Seller</h2>
              <form onSubmit={handleMessageSubmit}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  rows="4"
                  placeholder="Type your message here..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-3 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex items-center mb-4">
                <img
                  src={orderData.seller.avatar}
                  alt={orderData.seller.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">{orderData.seller.name}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{orderData.seller.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t pt-4">
                <button
                  onClick={handleDeliveryAccept}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Accept Delivery
                </button>
                <button
                  onClick={handleRevisionRequest}
                  className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50"
                >
                  Request Revision
                </button>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery Time</span>
                  <span>{orderData.delivery}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Revisions Left</span>
                  <span>{orderData.revisions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;