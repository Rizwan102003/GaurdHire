import React from 'react';
import GuardList from './GuardList';

export default function ResidentDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Available Security Guards</h1>
        <p className="text-gray-600">Browse and contact verified security guards in your area</p>
      </div>
      <GuardList />
    </div>
  );
}