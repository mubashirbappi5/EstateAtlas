'use client';
import logo from '../../../public/logo.png'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUser } from '@/app/context/UserContext';

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useUser();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://204.197.173.249:8014/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        console.log('Login successful:', data);
 
          localStorage.setItem('token', data.data.token);
    console.log('Stored token:', localStorage.getItem('token'));

        setUser(data.data.user); 
        console.log('User data:', data.data.user.first_name);
        
        router.push('/dashboard/globaldata');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto border overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-12 py-10">
        <div className="flex justify-center mx-auto">
          <Image className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>
        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login Here</p>

        {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="w-full mt-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>
            
          </div>
          <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 w-full mt-4 cursor-pointer text-sm font-medium text-white bg-[#0A1532] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Dont have an account?</span>
        <a href="register" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
      </div>
    </div>
  );
}
