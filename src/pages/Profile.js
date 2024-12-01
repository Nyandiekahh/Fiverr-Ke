import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy user data - replace with API call later
  const userData = {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    level: "Level 2 Seller",
    joinedDate: "January 2024",
    rating: 4.8,
    completedOrders: 145,
    description: "Professional web developer with 5 years of experience.",
    skills: ["Web Development", "React", "Node.js", "UI/UX Design"],
    languages: ["English", "Swahili"],
    education: "Bachelor in Computer Science",
    gigs: [
      {
        id: 1,
        title: "I will design a professional website",
        orders: 24,
        rating: 4.9
      },
      {
        id: 2,
        title: "I will develop a MERN stack application",
        orders: 18,
        rating: 4.7
      }
    ],
    orders: [
      {
        id: 1,
        title: "Logo Design",
        buyer: "Jane Smith",
        status: "In Progress",
        dueDate: "2024-12-05"
      },
      {
        id: 2,
        title: "Website Development",
        buyer: "Mike Johnson",
        status: "Completed",
        dueDate: "2024-11-30"
      }
    ]
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center">
            <img 
              src={userData.image} 
              alt={userData.name} 
              className="w-32 h-32 rounded-full mb-4 md:mb-0"
            />
            <div className="md:ml-6 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
              <p className="text-gray-600 mb-2">{userData.level}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <span className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  {userData.rating}
                </span>
                <span>{userData.completedOrders} Orders</span>
                <span>Member since {userData.joinedDate}</span>
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b mb-6">
          <nav className="flex space-x-8">
            {['Overview', 'Gigs', 'Orders', 'Reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 px-2 ${
                  activeTab === tab.toLowerCase()
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-700">{userData.description}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Languages</h2>
                <ul className="space-y-2">
                  {userData.languages.map((language, index) => (
                    <li key={index} className="text-gray-700">{language}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <p className="text-gray-700">{userData.education}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gigs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.gigs.map((gig) => (
              <div key={gig.id} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-2">{gig.title}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{gig.orders} Orders</span>
                  <span>★ {gig.rating}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userData.orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4">{order.title}</td>
                    <td className="px-6 py-4">{order.buyer}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{order.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;