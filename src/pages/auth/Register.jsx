import React, { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Header from "../../components/layout/Header";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    picture: null,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture") {
      setFormData({ ...formData, picture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <AppLayout>
      <Header />
      <div
        className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/registration.jpg')" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-4 text-center text-2xl font-extrabold text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto   sm:w-full sm:max-w-md">
          <div className=" py-6 px-4 shadow-xl bg-white sm:rounded-lg sm:px-6 border border-gray-300">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-extrabold text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-extrabold text-gray-700"
                >
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    autoComplete="tel"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-extrabold text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-extrabold text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="picture"
                  className="block text-sm font-extrabold text-gray-700"
                >
                  Picture
                </label>
                <div className="mt-1">
                  <input
                    id="picture"
                    name="picture"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-extrabold text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm font-extrabold text-gray-700">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-extrabold font-sans text-green-600 hover:text-green-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Register;
