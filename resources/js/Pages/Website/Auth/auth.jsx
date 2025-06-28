import React, { useState } from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import { useForm } from '@inertiajs/react';
import '@/Pages/Home/Home.css';

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => setIsSignIn(!isSignIn);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(isSignIn ? '/signin' : '/signup');
    };

    return (
        <FrontLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
                        {isSignIn ? 'Sign In with Phone' : 'Sign Up with Phone'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isSignIn && (
                            <div>
                                <label className="block font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Your Name"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                            </div>
                        )}

                        <div>
                            <label className="block font-medium text-gray-700">Phone Number</label>
                            <div className="flex items-center">
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    placeholder="9876543210"
                                    required
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    className="flex-1 mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                                required
                                minLength="6"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                        </div>

                        {!isSignIn && (
                            <div>
                                <label className="block font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition disabled:opacity-75"
                        >
                            {processing ? 'Processing...' : isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-4">
                        {isSignIn ? (
                            <>
                                Don't have an account?{' '}
                                <button onClick={toggleForm} className="text-blue-600 hover:underline focus:outline-none">
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={toggleForm} className="text-blue-600 hover:underline focus:outline-none">
                                    Sign In
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </FrontLayout>
    );
};

export default Auth;