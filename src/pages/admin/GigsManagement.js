import React, { useState } from 'react';

function GigsManagement() {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      title: "Professional Website Development",
      seller: "John Doe",
      category: "Web Development",
      price: 5000,
      status: "active",
      created: "2024-01-15",
      orders: 12
    },
    // Add more gigs...
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (gigId, newStatus) => {
    setGigs(gigs.map(gig =>
      gig.id === gigId ? { ...gig, status: newStatus } : gig
    ));
  };

  const filteredGigs = gigs.filter(gig => {
    const matchesStatus = filterStatus === 'all' || gig.status === filterStatus;
    const matchesSearch = gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gig.seller.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header with Search and Filters */}
      <div className="p-6 border-b">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-lg font-bold">Gigs Management</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search gigs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="paused">Paused</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Gigs Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seller</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price (KSh)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredGigs.map((gig) => (
              <tr key={gig.id}>
                <td className="px-6 py-4">{gig.title}</td>
                <td className="px-6 py-4">{gig.seller}</td>
                <td className="px-6 py-4">{gig.category}</td>
                <td className="px-6 py-4">{gig.price}</td>
                <td className="px-6 py-4">{gig.orders}</td>
                <td className="px-6 py-4">
                  <select
                    value={gig.status}
                    onChange={(e) => handleStatusChange(gig.id, e.target.value)}
                    className={`border rounded-md px-2 py-1 ${
                      gig.status === 'active' ? 'text-green-600' :
                      gig.status === 'pending' ? 'text-yellow-600' :
                      gig.status === 'rejected' ? 'text-red-600' :
                      'text-gray-600'
                    }`}
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="paused">Paused</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td className="px-6 py-4">{new Date(gig.created).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-700">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            Showing {filteredGigs.length} of {gigs.length} gigs
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

export default GigsManagement;