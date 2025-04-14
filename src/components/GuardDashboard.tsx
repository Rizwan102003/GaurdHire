import React from 'react';
import { Mail, Star } from 'lucide-react';
import type { Message } from '../types';

const mockMessages: Message[] = [
  {
    id: '1',
    guardId: '1',
    residentId: '1',
    content: 'Hi, I am interested in hiring you for my apartment complex.',
    createdAt: '2024-03-15T10:00:00Z',
    read: false,
  },
  // Add more mock messages as needed
];

export default function GuardDashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <div className="flex items-center mt-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1">4.5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-6">Messages</h3>
        <div className="space-y-4">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.read ? 'bg-gray-50' : 'bg-indigo-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">New Message</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(message.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}