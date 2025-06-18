import React, { useState } from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css'; // Importing CSS for styling

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => setIsSignIn(!isSignIn);

    return (
        <FrontLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </h2>

                    <form className="space-y-4">
                        {!isSignIn && (
                            <div>
                                <label className="block font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="10-digit number"
                                required
                                pattern="[0-9]{10}"
                                maxLength="10"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {!isSignIn && (
                            <div>
                                <label className="block font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                        >
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-4">
                        {isSignIn ? (
                            <>
                                Don't have an account?{' '}
                                <button onClick={toggleForm} className="text-blue-600 hover:underline">
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={toggleForm} className="text-blue-600 hover:underline">
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
