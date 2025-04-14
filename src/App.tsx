import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import UserTypeSelection from './components/UserTypeSelection';
import GuardList from './components/GuardList';
import GuardRegistration from './components/GuardRegistration';
import ResidentDashboard from './components/ResidentDashboard';
import GuardDashboard from './components/GuardDashboard';

function App() {
  const [userType, setUserType] = useState<'guard' | 'resident' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!userType) {
    return <UserTypeSelection onSelect={setUserType} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">SecureHire</span>
          </div>
          {isLoggedIn && (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-400"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {!isLoggedIn ? (
          userType === 'guard' ? (
            <GuardRegistration onSuccess={() => setIsLoggedIn(true)} />
          ) : (
            <div className="max-w-md mx-auto">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500"
              >
                Continue with Gmail
              </button>
            </div>
          )
        ) : userType === 'guard' ? (
          <GuardDashboard />
        ) : (
          <ResidentDashboard />
        )}
      </main>
    </div>
  );
}

export default App;