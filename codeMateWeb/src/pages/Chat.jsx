import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchConnectionsRequest,
  fetchMessagesRequest,
  sendMessageRequest,
  selectConnection,
} from '../store/slices/chatSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const { connections, selectedConnection, messages, loading } = useSelector((state) => state.chat);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    dispatch(fetchConnectionsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectedConnection) {
      dispatch(fetchMessagesRequest({ connectionId: selectedConnection.id }));
    }
  }, [dispatch, selectedConnection]);

  const handleConnectionSelect = (connection) => {
    dispatch(selectConnection(connection));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim() && selectedConnection) {
      dispatch(sendMessageRequest({
        connectionId: selectedConnection.id,
        content: messageInput.trim(),
      }));
      setMessageInput('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Connections List */}
      <div className="w-1/4 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Connections</h2>
        </div>
        {loading ? (
          <div className="p-4 text-center">Loading...</div>
        ) : connections.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No connections found</div>
        ) : (
          <div className="overflow-y-auto h-[calc(100vh-4rem)]">
            {connections.map((connection) => (
              <div
                key={connection.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedConnection?.id === connection.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleConnectionSelect(connection)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {connection.avatar && (
                      <img
                        src={connection.avatar}
                        alt={connection.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{connection.name}</h3>
                    <p className="text-sm text-gray-500">{connection.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedConnection ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  {selectedConnection.avatar && (
                    <img
                      src={selectedConnection.avatar}
                      alt={selectedConnection.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h2 className="text-xl font-semibold">{selectedConnection.name}</h2>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[selectedConnection.id]?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isOwn ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.isOwn
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a connection to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat; 