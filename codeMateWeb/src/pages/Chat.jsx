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
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Connections Yet</h2>
            <p className="text-gray-600">Start matching with people to see your connections here.</p>
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
            <div className="divide-y">
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
                      src={connection.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                      alt={`${connection.firstName} ${connection.lastName}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {connection.firstName} {connection.lastName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {connection.lastMessage || 'No messages yet'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            {selectedConnection ? (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedConnection.profilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
                      alt={`${selectedConnection.firstName} ${selectedConnection.lastName}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {selectedConnection.firstName} {selectedConnection.lastName}
                      </h2>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center py-12">
                    <p className="text-gray-600">Start a conversation with {selectedConnection.firstName}</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-4">
                <div className="text-center py-12">
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