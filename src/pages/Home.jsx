import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../src/components/layout/AppLayout";
import Header from "../../src/components/layout/Header";

const Home = () => {
  return (
    <AppLayout>
      <Header />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <style>
          {`
            @keyframes moveBackground {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            @keyframes float {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0);
              }
            }
          `}
        </style>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-moveBackground"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-3xl w-full space-y-8 text-center z-10 text-white">
          <h1 className="text-4xl font-extrabold">Welcome to Inventory Pro</h1>
          <p className="text-lg">
            Your one-stop solution for managing requisitions, purchase orders,
            goods received notes, and issuance.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link
              to="/requisition-general"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Requisition
            </Link>
            <Link
              to="/purchase-orders"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Purchase Orders
            </Link>
            <Link
              to="/goods-received-notes"
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Goods Received Notes
            </Link>
            <Link
              to="/issuance"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Issuance
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Key Features
          </h2>
          <div className="mt-10 space-y-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/realtimeInventory.jpg"
                  alt="Real-time Inventory Tracking"
                  className="h-32 w-32 object-cover rounded-md animate-float"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Real-time Inventory Tracking
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Keep track of your inventory in real-time with our advanced
                  tracking system.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/purchaseOrders.jpg"
                  alt="Automated Purchase Orders"
                  className="h-32 w-32 object-cover rounded-md animate-float"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Automated Purchase Orders
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Generate purchase orders automatically based on inventory
                  levels and demand.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/comprehensivereport.png"
                  alt="Comprehensive Reporting"
                  className="h-32 w-32 object-cover rounded-md animate-float"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Comprehensive Reporting
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Access detailed reports on inventory levels, purchase orders,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Inventory Pro is a leading inventory management solution designed to
            help businesses streamline their operations and improve efficiency.
            Our platform offers real-time tracking, automated purchase orders,
            comprehensive reporting, and more.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Testimonials
          </h2>
          <div className="mt-10 space-y-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/user1.png"
                  alt="ALbert "
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  "Inventory Pro has transformed the way we manage our
                  inventory. The real-time tracking and automated purchase
                  orders have saved us countless hours."
                </p>
                <p className="mt-2 text-base text-gray-500">- John</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/user2.png"
                  alt="John"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  "The comprehensive reporting features have given us valuable
                  insights into our inventory levels and purchasing patterns."
                </p>
                <p className="mt-2 text-base text-gray-500">- John</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Sign up today and take control of your inventory management.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
