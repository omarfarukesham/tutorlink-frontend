'use client'
import  { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // TODO: Implement your subscription logic here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 mb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with our latest tutorials, teaching tips, and educational resources.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              required
              className="block w-full px-4 py-3 text-base rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className={`block w-full px-8 py-3 text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 ${
                status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-center text-green-600">
            Thanks for subscribing! Please check your email to confirm.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-600">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}