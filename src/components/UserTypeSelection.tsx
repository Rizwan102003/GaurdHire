import React from 'react';
import { Shield, Home } from 'lucide-react';

interface Props {
  onSelect: (type: 'guard' | 'resident') => void;
}

export default function UserTypeSelection({ onSelect }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome to SecureHire</h1>
        <div className="space-y-4">
          <button
            onClick={() => onSelect('guard')}
            className="w-full flex items-center justify-center space-x-3 bg-indigo-600 text-white px-6 py-4 rounded-lg hover:bg-indigo-500 transition"
          >
            <Shield className="h-6 w-6" />
            <span>I'm a Security Guard</span>
          </button>
          <button
            onClick={() => onSelect('resident')}
            className="w-full flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-500 transition"
          >
            <Home className="h-6 w-6" />
            <span>I'm Looking to Hire</span>
          </button>
        </div>
      </div>
    </div>
  );
}