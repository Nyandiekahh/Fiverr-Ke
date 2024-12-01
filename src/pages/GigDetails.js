import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Reviews from '../components/gigs/Reviews';

function GigDetails() {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState('basic');

  // Dummy data - replace with API call later
  const gigData = {
    id: 1,
    title: "I will design a professional website",
    sellerName: "John Doe",
    sellerImage: "https://via.placeholder.com/100x100",
    sellerLevel: "Level 2 Seller",
    rating: 4.9,
    reviews: 182,
    description: "I will create a professional, responsive website for your business using modern technologies. The website will be fast, secure, and optimized for search engines.",
    packages: {
      basic: {
        name: "Basic Package",
        price: 5000,
        delivery: "3 days",
        revisions: 1,
        features: [
          "1 Page",
          "Responsive Design",
          "Source Code",
          "Basic SEO"
        ]
      },
      standard: {
        name: "Standard Package",
        price: 10000,
        delivery: "5 days",
        revisions: 3,
        features: [
          "3 Pages",
          "Responsive Design",
          "Source Code",
          "Advanced SEO",
          "Social Media Integration"
        ]
      },
      premium: {
        name: "Premium Package",
        price: 20000,
        delivery: "7 days",
        revisions: 5,
        features: [
          "5 Pages",
          "Responsive Design",
          "Source Code",
          "Advanced SEO",
          "Social Media Integration",
          "E-commerce Integration",
          "Admin Dashboard"
        ]
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gig Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{gigData.title}</h1>
            
            {/* Seller Info */}
            <div className="flex items-center mb-6">
              <img 
                src={gigData.sellerImage} 
                alt={gigData.sellerName} 
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">{gigData.sellerName}</p>
                <p className="text-sm text-gray-500">{gigData.sellerLevel}</p>
              </div>

              <div className="lg:col-span-2 mt-8">
  <Reviews />
</div>
              <div className="ml-6 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{gigData.rating}</span>
                <span className="text-gray-400 ml-1">({gigData.reviews})</span>
              </div>
            </div>

            {/* Gig Images */}
            <div className="mb-8">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="gig preview" 
                className="w-full rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-700">{gigData.description}</p>
            </div>
          </div>

          {/* Right Column - Pricing Packages */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 sticky top-4">
              <div className="flex space-x-2 mb-6">
                {Object.keys(gigData.packages).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`flex-1 py-2 px-4 rounded ${
                      selectedPackage === pkg 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {pkg.charAt(0).toUpperCase() + pkg.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">
                    {gigData.packages[selectedPackage].name}
                  </h3>
                  <p className="text-2xl font-bold">
                    KSh {gigData.packages[selectedPackage].price}
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  {gigData.packages[selectedPackage].description}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Delivery Time</span>
                  <span>{gigData.packages[selectedPackage].delivery}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Revisions</span>
                  <span>{gigData.packages[selectedPackage].revisions}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">What's Included:</h4>
                <ul className="space-y-2">
                  {gigData.packages[selectedPackage].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                Continue (KSh {gigData.packages[selectedPackage].price})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GigDetails;