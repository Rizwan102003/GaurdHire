import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface Props {
  onSuccess: () => void;
}

export default function GuardRegistration({ onSuccess }: Props) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Security Guard Registration</h2>
      
      <div className="mb-8 flex justify-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <Camera className="h-12 w-12 text-gray-400" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Aadhar Number</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">PAN Number</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Voter ID Number</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500"
              >
                Complete Registration
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}