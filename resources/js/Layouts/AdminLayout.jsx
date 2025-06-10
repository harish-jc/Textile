import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { url } = usePage();
    const { auth } = usePage().props;

    const isActive = (routeName) => url.startsWith(route(routeName));

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white">
                <div className="p-4 text-2xl font-bold border-b border-gray-700">
                    Admin Panel
                </div>
                <nav className="mt-6 px-4">
                    <ul className="space-y-3">
                        <li>
                            <Link
                                href={route('admin.dashboard')}
                                className={`block px-3 py-2 rounded ${isActive('admin.dashboard')
                                    ? 'bg-gray-700'
                                    : 'hover:bg-gray-700'
                                    }`}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
                                Vendors
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
                                Payments
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
                                Banners
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>


            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Textile</h1>
                    <div className="flex items-center space-x-4 relative">
                        {auth?.user?.profile_image ? (
                            <img
                                src={`/storage/${auth.user.profile_image}`}
                                alt="User profile"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-xs text-gray-600">
                                    {auth?.user?.name?.charAt(0).toUpperCase() || 'A'}
                                </span>
                            </div>
                        )}
                        <span className="text-sm text-gray-700"> {auth?.user?.name || 'Admin'}</span>
                        {/* Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100 focus:outline-none">
                                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10">
                                <Link
                                    href={route('admin.profile')}
                                    method="get"
                                    as="button"
                                    className="w-full text-left px-3 py-2 rounded hover:bg-red-600 hover:text-white"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route('admin.logout')}
                                    method="post"
                                    as="button"
                                    className="w-full text-left px-3 py-2 rounded hover:bg-red-600 hover:text-white"
                                >
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
