"use client";
import React from 'react';
import { useUser } from '../context/UserContext';

const Page = () => {
    const { user } = useUser();

    return (
        <div>
           
            <div className="w-full max-w-4xl mx-auto p-6 bg-white border rounded-lg shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>
                <h1>Welcome, {user?.id || 'Guest'}!</h1>
                <p className="text-gray-600">Welcome to your dashboard! Here you can manage your data, view reports, and more.</p>
            </div>
        </div>
    );
};

export default Page;