import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { fetchProfilesRequest } from '../store/slices/profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { userProfile, loading, error } = useSelector((state) => state.profile);
  const [isEditing, setIsEditing] = useState(false);

  const fetchProfile = useCallback(() => {
    dispatch(fetchProfilesRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // Refresh profile data every 5 minutes
  useEffect(() => {
    const interval = setInterval(fetchProfile, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchProfile]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg text-pink-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h2>
            <p className="text-gray-600">Unable to load your profile. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-pink-500 to-orange-500">
                <div className="absolute -bottom-16 left-8">
                  <div className="relative">
                    <img
                      src={userProfile.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                      alt={`${userProfile.firstName} ${userProfile.lastName}`}
                      className="w-32 h-32 rounded-full border-4 border-white object-cover"
                    />
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-20 pb-8 px-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {userProfile.firstName} {userProfile.lastName}, {userProfile.age}
                    </h1>
                    <p className="text-gray-600">{userProfile.gender}</p>
                    <p className="text-gray-600 mt-1">{userProfile.address}</p>
                  </div>
                  <button
                    onClick={handleEdit}
                    className="btn btn-outline btn-sm text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{userProfile.bio}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">{userProfile.email}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">{userProfile.phoneNumber}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{userProfile.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Settings */}
          <div className="space-y-8">
            {/* Account Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Account Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(userProfile.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(userProfile.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Account Status</span>
                  <span className={`font-semibold ${userProfile.isActive ? 'text-green-600' : 'text-red-600'}`}>
                    {userProfile.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Account Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Notification Preferences
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Privacy Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Subscription
                </button>
              </div>
            </div>

            {/* Premium Card */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Upgrade to Premium</h2>
              <p className="mb-6">Get unlimited matches, advanced filters, and more!</p>
              <button className="w-full bg-white text-pink-500 font-semibold py-2 rounded-lg hover:bg-gray-100">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 