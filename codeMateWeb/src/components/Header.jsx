import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import api from '../services/api';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await api.get('/auth/logout');
      dispatch(logout());
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
      // Still logout locally even if API call fails
      dispatch(logout());
      navigate('/login', { replace: true });
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/feed" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              CodeMate
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/feed" 
              className={`${isActive('/feed') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              Feed
            </Link>
            <Link 
              to="/chat" 
              className={`${isActive('/chat') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              Chat
            </Link>
            <Link 
              to="/connections" 
              className={`${isActive('/connections') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              Connections
            </Link>
            <Link 
              to="/profile" 
              className={`${isActive('/profile') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              Profile
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/privacy" 
              className={`${isActive('/privacy') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              Privacy
            </Link>
            <Link 
              to="/help" 
              className={`${isActive('/help') ? 'text-pink-500 font-medium' : 'text-gray-600 hover:text-pink-500'} transition-colors`}
            >
              Help
            </Link>
            <button 
              onClick={handleLogout}
              className="btn btn-outline btn-sm text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 