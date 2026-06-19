import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PaymentSuccess() {
  const { tranId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">পেমেন্ট সফল হয়েছে!</h1>
        <p className="text-gray-600 mb-4">আপনার অর্ডারের জন্য ধন্যবাদ।</p>
        <div className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-700 mb-6">
          Transaction ID: <span className="font-bold">{tranId}</span>
        </div>
        <Link to="/" className="inline-block bg-amber-500 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-600 transition">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
