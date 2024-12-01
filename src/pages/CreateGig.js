import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

function CreateGig() {
  const [gigData, setGigData] = useState({
    title: '',
    category: '',
    description: '',
    packages: {
      basic: {
        name: 'Basic Package',
        price: '',
        delivery: '',
        revisions: '',
        features: []
      },
      standard: {
        name: 'Standard Package',
        price: '',
        delivery: '',
        revisions: '',
        features: []
      },
      premium: {
        name: 'Premium Package',
        price: '',
        delivery: '',
        revisions: '',
        features: []
      }
    }
  });

  const categories = [
    'Web Development',
    'Digital Marketing',
    'Content Writing',
    'Graphic Design',
    'Video Editing',
    'Translation'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gig Data:', gigData);
    // Handle form submission
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Create a New Gig</h1>

        <form onSubmit={handleSubmit}>
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Gig Overview</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gig Title
                </label>
                <input
                  type="text"
                  value={gigData.title}
                  onChange={(e) => setGigData({...gigData, title: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="I will..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={gigData.category}
                  onChange={(e) => setGigData({...gigData, category: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={gigData.description}
                  onChange={(e) => setGigData({...gigData, description: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  rows="6"
                  placeholder="Describe your gig in detail..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Pricing Packages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(gigData.packages).map((pkg) => (
                <div key={pkg} className="border rounded-lg p-4">
                  <h3 className="font-bold mb-3 capitalize">{pkg} Package</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price (KSh)
                      </label>
                      <input
                        type="number"
                        value={gigData.packages[pkg].price}
                        onChange={(e) => setGigData({
                          ...gigData,
                          packages: {
                            ...gigData.packages,
                            [pkg]: {
                              ...gigData.packages[pkg],
                              price: e.target.value
                            }
                          }
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Time (Days)
                      </label>
                      <input
                        type="number"
                        value={gigData.packages[pkg].delivery}
                        onChange={(e) => setGigData({
                          ...gigData,
                          packages: {
                            ...gigData.packages,
                            [pkg]: {
                              ...gigData.packages[pkg],
                              delivery: e.target.value
                            }
                          }
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Revisions
                      </label>
                      <input
                        type="number"
                        value={gigData.packages[pkg].revisions}
                        onChange={(e) => setGigData({
                          ...gigData,
                          packages: {
                            ...gigData.packages,
                            [pkg]: {
                              ...gigData.packages[pkg],
                              revisions: e.target.value
                            }
                          }
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
            >
              Create Gig
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGig;