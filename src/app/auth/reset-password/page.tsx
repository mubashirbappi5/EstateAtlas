'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const handleReset = async () => {
    if (!email) {
      setError('Invalid email');
      return;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://204.197.173.249:8014/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, password, password_confirmation: passwordConfirmation }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Reset failed');
      } else {
        alert('Password reset successful! Please login.');
        router.push('login');
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className='min-h-screen flex items-center justify-center bg-gray-100'>
     <div className="max-w-xl mx-auto w-full mt-20 p-16 space-y-4 bg-white rounded shadow-md">
      <h2 className='text-2xl font-semibold mb-8 text-center'>Reset Password for </h2>
      <p className='text-center text-gray-300'>{email}</p>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
           className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
         className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleReset} disabled={loading} className="w-full bg-[#0A1532] text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50">
        {loading ? 'Resetting...' : 'Reset Password'}
      </button>
    </div>
   </div>
  );
}
