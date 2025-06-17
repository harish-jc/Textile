import React from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';

const Contact = () => {
  return (
    <FrontLayout>
      <section className="py-16 px-4 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

          <p className="text-center text-gray-600 mb-8 sm:text-base">
            We'd love to hear from you! Fill out the form below or reach us at our contact details.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 text-gray-700">
            <h3 className="text-lg font-semibold mb-2">Our Office</h3>
            <p>123 Fabric Street, Textile City, India</p>
            <p>Email: support@yourdomain.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </section>
    </FrontLayout>
  );
};

export default Contact;
