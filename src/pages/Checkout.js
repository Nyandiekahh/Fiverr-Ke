import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

function Checkout() {
  const { id } = useParams();
  console.log('ID:', id);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  // Dummy order data - replace with API call later
  const orderData = {
    gig: {
      title: "Professional Website Design",
      seller: "John Doe",
      package: "Basic Package",
      delivery: "3 days",
      revisions: 2
    },
    price: 5000,
    serviceFee: 500,
    total: 5500
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Processing payment...');
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">{orderData.gig.title}</h3>
                  <p className="text-gray-600">by {orderData.gig.seller}</p>
                </div>
                <div className="flex justify-between py-2 border-t">
                  <span>Package</span>
                  <span>{orderData.gig.package}</span>
                </div>
                <div className="flex justify-between py-2 border-t">
                  <span>Delivery Time</span>
                  <span>{orderData.gig.delivery}</span>
                </div>
                <div className="flex justify-between py-2 border-t">
                  <span>Revisions</span>
                  <span>{orderData.gig.revisions}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="mpesa"
                      checked={paymentMethod === 'mpesa'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-green-600"
                    />
                    <span>M-PESA</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-green-600"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>

                {paymentMethod === 'mpesa' && (
                  <div className="mt-4">
                    <input
                      type="tel"
                      placeholder="Enter M-PESA Phone Number"
                      className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {orderData.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>KSh {orderData.serviceFee}</span>
                </div>
                <div className="flex justify-between pt-3 border-t font-bold">
                  <span>Total</span>
                  <span>KSh {orderData.total}</span>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
                  >
                    Confirm & Pay
                  </button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    You'll be redirected to complete the payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;