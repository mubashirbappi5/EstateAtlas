'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://204.197.173.249:8014/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Failed to send OTP');
      } else {
        setSuccess('OTP sent to your email!');
        // Redirect to OTP verification page after short delay
        setTimeout(() => {
          router.push(`verify-otp?email=${encodeURIComponent(email)}`);
        }, 1500);
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className='min-h-screen flex items-center justify-center bg-gray-100'>
     <div className="max-w-xl mx-auto w-full mt-20 p-16 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-8 text-center">Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-gray-700 mb-2">Enter your registered email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email address"
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-[#0a1532] text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>
      </form>
    </div>
   </div>
  );
}
