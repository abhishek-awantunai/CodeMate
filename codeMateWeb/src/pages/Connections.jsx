import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { fetchPendingConnectionsRequest, acceptConnectionRequest, rejectConnectionRequest } from '../store/slices/connectionSlice';

const Connections = () => {
  const dispatch = useDispatch();
  const { pendingConnections, loading, error } = useSelector((state) => state.connection);

  const fetchPendingConnections = useCallback(() => {
    dispatch(fetchPendingConnectionsRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchPendingConnections();
  }, [fetchPendingConnections]);

  const handleAccept = (connectionId) => {
    dispatch(acceptConnectionRequest(connectionId));
  };

  const handleReject = (connectionId) => {
    dispatch(rejectConnectionRequest(connectionId));
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
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Pending Requests</h2>
            <p className="text-gray-600">You don't have any pending connection requests.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {connection.address?.split(',')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAccept(connection._id)}
                      className="btn btn-success btn-sm"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(connection._id)}
                      className="btn btn-error btn-sm"
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