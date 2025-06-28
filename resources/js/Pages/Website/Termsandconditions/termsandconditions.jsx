import React from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import '@/Pages/Home/Home.css';

const TermsAndConditions = () => {
  return (
    <FrontLayout>
      <Head title="Terms and Conditions" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center rounded-xl p-8">
          <h1 className="text-xl md:text-xl font-bold text-gray-900">Terms & Conditions</h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Introduction */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <p className="text-gray-700">
              Welcome to our website. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="divide-y divide-gray-100">
            <section className="p-6 md:p-6 pb-0">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Responsibility</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>You must be at least 18 years old to create an account</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>All activities under your account are your responsibility</li>
                    <li>We reserve the right to suspend or terminate accounts that violate our policies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="p-6 md:p-6 pb-0">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Orders & Purchases</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>All orders are subject to product availability</li>
                    <li>We reserve the right to refuse or cancel any order</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Orders will be processed only after payment confirmation</li>
                    <li>Delivery times are estimates and not guaranteed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="p-6 md:p-6 pb-0">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Payments</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>All prices are in Indian Rupees (INR)</li>
                    <li>We accept major credit/debit cards, UPI, and net banking</li>
                    <li>Payment must be completed before order processing</li>
                    <li>For failed transactions, refunds will be processed within 7-10 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="p-6 md:p-6 pb-0">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Limitation of Liability</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>We are not liable for any indirect, incidental, or consequential damages</li>
                    <li>Our total liability is limited to the purchase price of the product</li>
                    <li>We are not responsible for delays beyond our control (force majeure)</li>
                    <li>Products should be used as intended and according to manufacturer guidelines</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Closing Section */}
          <div className="p-6 md:p-8 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">General Provisions</h3>
            <p className="text-gray-700 mb-4">
              These terms shall be governed by Indian law. Any disputes will be subject to the exclusive jurisdiction of the courts in our jurisdiction.
            </p>
            <p className="text-gray-700">
              We may update these terms periodically. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>
    </FrontLayout>
  );
};

export default TermsAndConditions;