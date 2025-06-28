'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyOtpForm() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleVerify = async () => {
    setLoading(true);
    setError('');

    if (!email) {
      setError('Please enter your email.');
      setLoading(false);
      return;
    }

    if (!otp) {
      setError('Please enter the OTP.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://204.197.173.249:8014/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Invalid OTP or email');
      } else {
        // On success, navigate to reset password page passing email in query param
        router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className='min-h-screen flex items-center justify-center bg-gray-100'>
     <div className="max-w-xl w-full mx-auto mt-10 p-16 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-8 text-center">Verify OTP</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={e => setOtp(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleVerify}
        disabled={loading}
        className="w-full bg-[#0A1532] text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>
    </div>
   </div>
  );
}
