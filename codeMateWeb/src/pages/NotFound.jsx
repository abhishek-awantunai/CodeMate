import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-[#FF385C]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <h1 className="text-8xl font-bold text-[#FF385C] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like this profile is no longer available. Let's find you a better match!
        </p>
        <Link
          to="/"
          className="inline-block bg-[#FF385C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#E31C5F] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Find New Matches
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 