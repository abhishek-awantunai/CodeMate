import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { fetchPendingConnectionsRequest, acceptConnectionRequest, rejectConnectionRequest, clearConnectionMessage } from '../store/slices/connectionSlice';

const Connections = () => {
  const dispatch = useDispatch();
  const { pendingConnections, loading, error, message } = useSelector((state) => state.connection);

  const fetchPendingConnections = useCallback(() => {
    dispatch(fetchPendingConnectionsRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchPendingConnections();
  }, [fetchPendingConnections]);

  // Clear message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearConnectionMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  const handleAccept = (connection) => {
    dispatch(acceptConnectionRequest({ connectionId: connection._id }));
  };

  const handleReject = (connection) => {
    dispatch(rejectConnectionRequest({ connectionId: connection._id }));
  };

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

  if (!pendingConnections || pendingConnections.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <div className="mb-8">
              <svg
                className="w-24 h-24 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Pending Requests</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              You don't have any pending connection requests at the moment. When someone sends you a request, it will appear here.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">When someone sends you a request, you'll see it here</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">You can accept or reject each request</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Accepted connections will appear in your chat list</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Message Toast */}
        {message && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white rounded-lg shadow-lg px-6 py-3 border-l-4 border-pink-500">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">{message}</span>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Connection Requests</h2>
          </div>
          <div className="divide-y">
            {pendingConnections.map((connection) => (
              <div
                key={connection._id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={connection.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                      alt={`${connection.firstName} ${connection.lastName}`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {connection.firstName} {connection.lastName}
                      </h3>
                      <p className="text-gray-500">{connection.bio || 'No bio available'}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {connection.age} years old
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {connection.gender}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAccept(connection)}
                      className="btn btn-sm bg-gradient-to-r from-pink-500 to-orange-500 border-none text-white hover:from-pink-600 hover:to-orange-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(connection)}
                      className="btn btn-sm btn-outline text-gray-600 border-gray-300 hover:bg-gray-100"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections; 