import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import type { Guard } from '../types';

const mockGuards: Guard[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 35,
    experience: 8,
    aadharNumber: '****',
    panNumber: '****',
    voterIdNumber: '****',
    address: 'Mumbai, Maharashtra',
    phone: '+91 98765 43210',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.5,
    reviews: [],
    verified: true,
  },
  // Add more mock data as needed
];

export default function GuardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockGuards.map((guard) => (
        <div key={guard.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={guard.photo}
            alt={guard.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{guard.name}</h3>
                <p className="text-gray-600">{guard.address}</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{guard.rating}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-600">Experience: {guard.experience} years</p>
              <p className="text-gray-600">Age: {guard.age} years</p>
            </div>

            <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Guard
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}