import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  return (
    <AdminLayout>
      <Head title="Admin Dashboard" />

        <div className="p-6 rounded-md">
          <h1 className="text-3xl font-bold mb-6">Welcome, {auth.user.name} 👋</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-100 p-4 rounded shadow text-center">
              <p className="text-xl font-semibold">10</p>
              <p className="text-sm text-gray-600">Vendors</p>
            </div>
            <div className="bg-green-100 p-4 rounded shadow text-center">
              <p className="text-xl font-semibold">52</p>
              <p className="text-sm text-gray-600">Products</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded shadow text-center">
              <p className="text-xl font-semibold">130</p>
              <p className="text-sm text-gray-600">Orders</p>
            </div>
            <div className="bg-red-100 p-4 rounded shadow text-center">
              <p className="text-xl font-semibold">₹50,000</p>
              <p className="text-sm text-gray-600">Revenue</p>
            </div>
          </div>
        </div>
    </AdminLayout>
  );
}
