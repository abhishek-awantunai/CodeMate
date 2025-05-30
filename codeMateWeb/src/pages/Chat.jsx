import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { fetchConnectionsRequest, selectConnection } from '../store/slices/chatSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const { connections, selectedConnection, loading, error } = useSelector((state) => state.chat);

  const fetchConnections = useCallback(() => {
    dispatch(fetchConnectionsRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  // Select first connection by default when connections are loaded
  useEffect(() => {
    if (connections && connections.length > 0 && !selectedConnection) {
      dispatch(selectConnection(connections[0]));
    }
  }, [connections, selectedConnection, dispatch]);

  const handleSelectConnection = (connection) => {
    dispatch(selectConnection(connection));
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

  if (!connections || connections.length === 0) {
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Connections Yet</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Start matching with people to see your connections here. Once you have accepted connections, you can chat with them here.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to get started?</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Browse through profiles in the Feed</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Send connection requests to people you're interested in</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Once they accept, you can start chatting here</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connections List */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Connections</h2>
            </div>
            <div className="divide-y max-h-[calc(100vh-12rem)] overflow-y-auto">
              {connections.map((connection) => (
                <div
                  key={connection._id}
                  onClick={() => handleSelectConnection(connection)}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    selectedConnection?._id === connection._id ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={connection.userId.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                      alt={`${connection.userId.firstName} ${connection.userId.lastName}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {connection.userId.firstName} {connection.userId.lastName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {connection.userId.bio || 'No bio available'}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {connection.userId.age} years
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {connection.userId.gender}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
            {selectedConnection ? (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedConnection.userId.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                      alt={`${selectedConnection.userId.firstName} ${selectedConnection.userId.lastName}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {selectedConnection.userId.firstName} {selectedConnection.userId.lastName}
                      </h2>
                      <p className="text-sm text-gray-500">Connected since {new Date(selectedConnection.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="text-center py-12">
                    <p className="text-gray-600">Start a conversation with {selectedConnection.userId.firstName}</p>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 input input-bordered focus:outline-none focus:border-pink-500"
                    />
                    <button className="btn bg-gradient-to-r from-pink-500 to-orange-500 border-none text-white hover:from-pink-600 hover:to-orange-600">
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <p className="text-gray-600">Select a connection to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 