import { Link } from 'react-router-dom';

const Feed = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/feed" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                CodeMate
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-pink-500 transition-colors">
                Privacy
              </Link>
              <Link to="/help" className="text-gray-600 hover:text-pink-500 transition-colors">
                Help
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-pink-500 transition-colors">
                Profile
              </Link>
              <button className="btn btn-outline btn-sm text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">Sarah Johnson, 28</h2>
                <p className="text-white/90 mt-2">Full-stack developer | Coffee enthusiast</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-pink-500/20 text-white rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-white rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-white rounded-full text-sm">
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600">
                Full-stack developer passionate about creating beautiful and functional web applications. 
                Love working with React, Node.js, and Python.
              </p>
            </div>

            {/* Experience Section */}
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Senior Developer</h4>
                  <p className="text-gray-600">TechCorp • 2020 - Present</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Full Stack Developer</h4>
                  <p className="text-gray-600">WebSolutions • 2018 - 2020</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                  AWS
                </span>
                <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                  Docker
                </span>
                <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                  GraphQL
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-8 p-6">
              <button className="btn btn-circle btn-lg bg-white shadow-lg hover:bg-gray-100">
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
              <button className="btn btn-circle btn-lg bg-white shadow-lg hover:bg-gray-100">
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

          {/* Profile Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Bio Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600">
                Full-stack developer passionate about creating beautiful and functional web applications. 
                Love working with React, Node.js, and Python. Based in San Francisco.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Senior Developer</h4>
                  <p className="text-gray-600">TechCorp</p>
                  <p className="text-gray-500 text-sm">2020 - Present</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Full Stack Developer</h4>
                  <p className="text-gray-600">WebSolutions</p>
                  <p className="text-gray-500 text-sm">2018 - 2020</p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900">B.S. Computer Science</h4>
                <p className="text-gray-600">Stanford University</p>
                <p className="text-gray-500 text-sm">2018</p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                  AWS
                </span>
                <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                  Docker
                </span>
                <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                  GraphQL
                </span>
              </div>
            </div>

            {/* Looking For Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Looking For</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  Seeking collaboration opportunities on innovative web projects. 
                  Interested in working with teams that value clean code and user experience.
                </p>
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-full btn btn-primary bg-gradient-to-r from-pink-500 to-orange-500 border-none hover:from-pink-600 hover:to-orange-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed; 