'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../../public/logo.png';
export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://real-state-business-management-system-api/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Registration failed');
      } else {
        setSuccess('Registration successful! Please log in.');
      }
    } catch (err) {
      setError('Something went wrong.');
      console.log('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-2xl  mx-auto border overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-12 py-10">
        <div className="flex my-4 justify-center mx-auto">
          <Image className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white">Create an Account</h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">Fill in the form below to get started</p>

        {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-1/2 px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-1/2 px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 px-4 py-2 text-white font-semibold bg-[#0A1532] rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>

      <div className="py-4 text-center bg-gray-100 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>
        <a href="login" className="text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</a>
      </div>
    </div>
    </div>
  );
}
