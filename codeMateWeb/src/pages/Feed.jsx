import { Link } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { fetchFeedRequest, nextProfile } from '../store/slices/feedSlice';
import { sendConnectionRequest, clearConnectionMessage } from '../store/slices/connectionSlice';

const Feed = () => {
  const dispatch = useDispatch();
  const { users, currentUserIndex, loading, error, hasMore } = useSelector((state) => state.feed);
  const { message, error: connectionError } = useSelector((state) => state.connection);
  const [isFading, setIsFading] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  const fetchProfile = useCallback(() => {
    dispatch(fetchFeedRequest());
  }, [dispatch]);

  useEffect(() => {
    if (users.length === 0) {
      fetchProfile();
    }
  }, [fetchProfile, users.length]);

  // Clear connection message after 3 seconds
  useEffect(() => {
    if (message || connectionError) {
      const timer = setTimeout(() => {
        dispatch(clearConnectionMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, connectionError, dispatch]);

  const handleConnection = (status) => {
    const currentUser = users[currentUserIndex];
    dispatch(sendConnectionRequest({ status, connectionId: currentUser._id }));
  };

  const handleNextProfile = () => {
    setIsFading(true);
    setSlideDirection('right');
    setTimeout(() => {
      if (currentUserIndex === users.length - 1 && hasMore) {
        fetchProfile();
      } else {
        dispatch(nextProfile());
      }
      setIsFading(false);
    }, 300);
  };

  if (loading && users.length === 0) {
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

  if (!users.length) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Profiles Found</h2>
            <p className="text-gray-600">Try adjusting your preferences or check back later for new matches.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentUser = users[currentUserIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Message Toast */}
      {(message || connectionError) && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className={`px-6 py-3 rounded-lg shadow-lg ${
            message ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {message || connectionError}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform ${
              isFading 
                ? slideDirection === 'right' 
                  ? 'translate-x-full opacity-0' 
                  : '-translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative">
              <img
                src={currentUser.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                alt={`${currentUser.firstName} ${currentUser.lastName}`}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">
                  {currentUser.firstName} {currentUser.lastName}, {currentUser.age}
                </h2>
                <p className="text-white/90 mt-2">{currentUser.gender}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-pink-500/20 text-white rounded-full text-sm">
                    {currentUser.address?.split(',')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600">
                {currentUser.bio || 'No bio available'}
              </p>
            </div>

            {/* Contact Section */}
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">{currentUser.email}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">{currentUser.phoneNumber}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{currentUser.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg p-8 space-y-8 transition-all duration-300 transform ${
              isFading 
                ? slideDirection === 'right' 
                  ? 'translate-x-full opacity-0' 
                  : '-translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            {/* Bio Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600">
                {currentUser.bio || 'No bio available'}
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">{currentUser.email}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">{currentUser.phoneNumber}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">{currentUser.address}</p>
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Account Information</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-medium text-gray-900">
                      {new Date(currentUser.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-medium text-gray-900">
                      {new Date(currentUser.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Status</span>
                    <span className={`font-medium ${currentUser.isActive ? 'text-green-600' : 'text-red-600'}`}>
                      {currentUser.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-12 z-50">
        <button 
          onClick={() => {
            handleConnection('ignored');
            handleNextProfile();
          }}
          className="btn btn-circle btn-lg bg-white shadow-lg hover:bg-gray-100 transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button 
          onClick={() => {
            handleConnection('interested');
            handleNextProfile();
          }}
          className="btn btn-circle btn-lg bg-white shadow-lg hover:bg-gray-100 transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Feed; 