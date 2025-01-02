import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Farm House Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Farm House</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>123 Export Avenue</p>
                  <p>Business District</p>
                  <p>Los Angeles, CA 90001</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <p>contact@freshexports.com</p>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-white/90">
              Farm House is a leading exporter of premium fruits and vegetables, committed to 
              delivering fresh, high-quality produce to customers worldwide. With years of 
              experience in the industry, we ensure the finest selection and reliable service for all 
              your agricultural needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <Link to="/" className="hover:text-white/80 transition-colors">→ Home</Link>
              </div>
              <div>
                <Link to="/about" className="hover:text-white/80 transition-colors">→ About</Link>
              </div>
              <div>
                <Link to="/products" className="hover:text-white/80 transition-colors">→ Products</Link>
              </div>
              <div>
                <Link to="/contact" className="hover:text-white/80 transition-colors">→ Contact</Link>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.2673626!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1625145123456!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="bg-green-700 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>All Rights Reserved by Farm Export</p>
          <p>Managed by Farm Export</p>
        </div>
      </div>
    </>
  );
}