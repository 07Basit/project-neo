import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-green-600 mr-4" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-600">123 Export Street, Business District, City, Country</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-green-600 mr-4" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-green-600 mr-4" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">info@freshexports.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}