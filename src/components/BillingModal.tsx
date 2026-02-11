import React, { useState } from 'react';
import BillingForm from './BillingForm';

interface BillingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BillingModal: React.FC<BillingModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authKey, setAuthKey] = useState('');
  const [authError, setAuthError] = useState('');

  const ADMIN_KEY = '9876';

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (authKey === ADMIN_KEY) {
      setIsAuthenticated(true);
      setAuthKey('');
    } else {
      setAuthError('Invalid secret key. Please try again.');
      setAuthKey('');
    }
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setAuthKey('');
    setAuthError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gray-900 border-2 border-neon-purple rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isAuthenticated ? (
          // Authentication View
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-neon-purple/20 p-4 rounded-full mb-4">
                <svg className="w-12 h-12 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 glow-purple">Admin Access Required</h2>
              <p className="text-gray-400">Please enter the 4-digit secret key to access the billing system</p>
            </div>

            <form onSubmit={handleAuthSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 text-center">Secret Key</label>
                <input
                  type="password"
                  value={authKey}
                  onChange={(e) => {
                    setAuthKey(e.target.value.replace(/\D/g, '').slice(0, 4));
                    setAuthError('');
                  }}
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-6 py-4 text-2xl text-center tracking-widest text-white focus:border-neon-purple focus:outline-none font-mono"
                  placeholder="••••"
                  maxLength={4}
                  autoFocus
                />
                {authError && (
                  <p className="text-red-400 text-sm mt-2 text-center">{authError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-purple-blue text-white px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity box-glow-purple"
              >
                Verify & Access
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                Only authorized administrators can access this section
              </p>
            </div>
          </div>
        ) : (
          // Billing Form View
          <BillingForm onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default BillingModal;

