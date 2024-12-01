import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  // Dummy chat data - replace with API call later
  const chats = [
    {
      id: 1,
      user: "John Smith",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Thank you for the quick delivery!",
      timestamp: "10:30 AM",
      unread: true
    },
    {
      id: 2,
      user: "Mary Johnson",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Can you make the revisions by tomorrow?",
      timestamp: "Yesterday",
      unread: false
    },
    {
      id: 3,
      user: "David Wilson",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "The design looks perfect!",
      timestamp: "2 days ago",
      unread: false
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chat List */}
          <div className="md:col-span-1 border rounded-lg overflow-hidden">
            <div className="bg-white divide-y">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedChat?.id === chat.id ? 'bg-green-50' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <img
                      src={chat.avatar}
                      alt={chat.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{chat.user}</h3>
                        <span className="text-sm text-gray-500">{chat.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="md:col-span-2 border rounded-lg overflow-hidden bg-white">
            {selectedChat ? (
              <div className="h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center">
                    <img
                      src={selectedChat.avatar}
                      alt={selectedChat.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <h3 className="font-semibold">{selectedChat.user}</h3>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[70%]">
                      <p>Hello! How can I help you today?</p>
                      <span className="text-xs text-gray-500">10:30 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-green-100 rounded-lg px-4 py-2 max-w-[70%]">
                      <p>Hi! I wanted to discuss the project timeline.</p>
                      <span className="text-xs text-gray-500">10:31 AM</span>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                    <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[600px] flex items-center justify-center text-gray-500">
                Select a chat to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;