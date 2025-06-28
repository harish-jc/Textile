import React from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import '@/Pages/Home/Home.css';

const PrivacyPolicy = () => {
  return (
    <FrontLayout>
      <Head title="Privacy Policy" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Your privacy is important to us. This document outlines how we collect, use, and protect your information.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              We are dedicated to protecting your personal information and being transparent about our data practices. This policy explains what information we collect and how it's used.
            </p>
          </div>

          <div className="space-y-8">
            <section className="group">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Information We Collect</h3>
                  <p className="text-gray-700">
                    We collect personal information such as your name, email address, phone number, shipping address, and payment details when you interact with our services. We also automatically collect certain technical data about your device and browsing behavior.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">How We Use Your Information</h3>
                  <p className="text-gray-700">
                    Your information is used to process orders, provide customer support, improve our products and services, communicate with you about your account, and send marketing communications (where permitted). We may also use aggregated data for analytics purposes.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Security</h3>
                  <p className="text-gray-700">
                    We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. All payment transactions are processed using PCI-compliant services and we never store full credit card details.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Policy Updates</h3>
                  <p className="text-gray-700">
                    We may update this privacy policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated through our website or via email. The "Last Updated" date at the bottom of this page indicates when the policy was last revised.
                  </p>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </FrontLayout>
  );
};

export default PrivacyPolicy;