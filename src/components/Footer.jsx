import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              EventSphere
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              EventSphere is your gateway to unforgettable experiences. Discover
              concerts, shows, sports, and cultural events happening near you.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Explore
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-700 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/events" className="hover:text-indigo-700 transition">
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/checkout"
                  className="hover:text-indigo-700 transition"
                >
                  Checkout
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-700 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* EVENT TYPES */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Event Types
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-indigo-700 cursor-pointer">🎵 Music</li>
              <li className="hover:text-indigo-700 cursor-pointer">🎨 Art</li>
              <li className="hover:text-indigo-700 cursor-pointer">
                ⚽ Sports
              </li>
              <li className="hover:text-indigo-700 cursor-pointer">🎭 Shows</li>
            </ul>
          </div>

          {/* INFO */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              How We Work
            </h4>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>Discover new events</li>
              <li>Browse event details clearly</li>
              <li>Book securely</li>
              <li>Enjoy unforgettable moments — we handle the rest.</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t my-12"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EventSphere. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">
            <span className="hover:text-indigo-700 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-indigo-700 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-indigo-700 cursor-pointer">Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
