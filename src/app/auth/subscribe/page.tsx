'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import logo from '../../../../public/logo.png';
import { useUser } from '@/app/context/UserContext';

export default function RegisterForm() {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();

  const plan = searchParams.get('plan') || 'premium';
  const isYearly = searchParams.get('isYearly') === 'true';
  const { setUser} = useUser();
   const router = useRouter();

  const PRICES: Record<string, { monthly: string; yearly: string }> = {
    low_basic: {
      monthly: 'price_1RdSQsDgYV6zJ17v5Qn2763Z',
      yearly: 'price_1RdSUGDgYV6zJ17v0tWmIYU2',
    },
    basic: {
      monthly: 'price_1RdSRcDgYV6zJ17vntUXtF7T',
      yearly: 'price_1RdSVGDgYV6zJ17v1jvsQHq7',
    },
    premium: {
      monthly: 'price_1RdSSzDgYV6zJ17v3Vcyyrxa',
      yearly: 'price_1RdSWIDgYV6zJ17vncazxwVJ',
    },
  };

  const selectedPriceId =
    PRICES[plan as keyof typeof PRICES]?.[isYearly ? 'yearly' : 'monthly'] || '';

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    price_id: selectedPriceId,
    affiliate_code: 'AFF685A30E951679',
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

    if (!stripe || !elements) {
      setError('Stripe is not loaded');
      return;
    }

    setLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement!,
        billing_details: {
          name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'Payment method creation failed');
        setLoading(false);
        return;
      }

      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirm_password,
        price_id: formData.price_id,
        payment_method: paymentMethod.id,
        affiliate_code: formData.affiliate_code,
        is_yearly: isYearly,
      };

      const res = await fetch('http://204.197.173.249:8014/api/register-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Registration failed');
      } else {
        setSuccess('Registration successful! Please check your email or log in.');
        console.log('Registration successful:', data);
         setUser(data.user); 
         router.push('/dashboard/Countries');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl mx-auto border overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-12 py-10">
          <div className="flex my-4 justify-center mx-auto">
            <Image className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white">Create an Account</h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">Fill in the form below to get started</p>

          {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
          {success && <p className="mt-4 text-sm text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex gap-4">
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required className="w-1/2 px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required className="w-1/2 px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
            </div>

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />

            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />

            <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder="Confirm Password" required className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />

            <div className="p-4 bg-gray-100 rounded dark:bg-gray-700">
              <label className="text-sm block mb-2 text-gray-700 dark:text-white">Card Information</label>
              <CardElement className="p-3 border rounded bg-white dark:bg-gray-800 dark:border-gray-600" />
            </div>

            <button type="submit" disabled={loading || !stripe || !elements} className="w-full mt-6 px-4 py-2 text-white font-semibold bg-[#0A1532] rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-blue-300">
              {loading ? 'Registering...' : 'Register & Pay'}
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
