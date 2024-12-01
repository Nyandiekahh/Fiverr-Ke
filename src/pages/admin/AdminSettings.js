import React, { useState } from 'react';

function AdminSettings() {
  const [settings, setSettings] = useState({
    general: {
      siteName: 'Fiverr Ke',
      siteDescription: 'Kenyan Freelance Services Marketplace',
      supportEmail: 'support@fiverrke.com',
      commission: 10,
      minimumWithdrawal: 1000
    },
    security: {
      requiredPasswordLength: 8,
      twoFactorAuth: false,
      sessionTimeout: 60,
      maxLoginAttempts: 5
    },
    notifications: {
      newOrderEmail: true,
      newUserEmail: true,
      reportEmail: true,
      disputeEmail: true
    },
    payments: {
      mpesaEnabled: true,
      bankTransferEnabled: true,
      paypalEnabled: false,
      minimumOrderAmount: 500
    }
  });

  const handleGeneralSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      general: {
        ...prev.general,
        [name]: value
      }
    }));
  };

  const handleSecuritySettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [name]: type === 'checkbox' ? checked : value
      }
    }));
  };

  const handleNotificationSettingsChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };

  const handlePaymentSettingsChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings(prev => ({
      ...prev,
      payments: {
        ...prev.payments,
        [name]: type === 'checkbox' ? checked : value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving settings:', settings);
    // Handle settings update
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit}>
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Name
              </label>
              <input
                type="text"
                name="siteName"
                value={settings.general.siteName}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Description
              </label>
              <textarea
                name="siteDescription"
                value={settings.general.siteDescription}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border rounded-md"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Support Email
              </label>
              <input
                type="email"
                name="supportEmail"
                value={settings.general.supportEmail}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Commission Rate (%)
              </label>
              <input
                type="number"
                name="commission"
                value={settings.general.commission}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Password Length
              </label>
              <input
                type="number"
                name="requiredPasswordLength"
                value={settings.security.requiredPasswordLength}
                onChange={handleSecuritySettingsChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={settings.security.twoFactorAuth}
                onChange={handleSecuritySettingsChange}
                className="h-4 w-4 text-green-600 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">
                Enable Two-Factor Authentication
              </label>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleNotificationSettingsChange}
                  className="h-4 w-4 text-green-600 rounded"
                />
                <label className="ml-2 text-sm text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">Payment Settings</h2>
          <div className="space-y-4">
            {Object.entries(settings.payments)
              .filter(([key]) => typeof settings.payments[key] === 'boolean')
              .map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handlePaymentSettingsChange}
                    className="h-4 w-4 text-green-600 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                </div>
              ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Order Amount (KSh)
              </label>
              <input
                type="number"
                name="minimumOrderAmount"
                value={settings.payments.minimumOrderAmount}
                onChange={handlePaymentSettingsChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;