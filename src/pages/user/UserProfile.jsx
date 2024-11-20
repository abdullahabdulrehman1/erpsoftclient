import React, { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Header from "../../components/layout/Header";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    username: "abdullah",
    role: "User",
    email: "abdullah@example.com",
    location: "New York, USA",
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    alert("Forgot password functionality triggered");
  };

  return (
    <AppLayout>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          User Profile
        </h1>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-700">
              {userInfo.username}
            </h2>
            <p className="text-gray-600">{userInfo.role}</p>
            <p className="text-gray-600">{userInfo.email}</p>
            <p className="text-gray-600">{userInfo.location}</p>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={handleForgotPassword}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Forgot Password
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserProfile;
