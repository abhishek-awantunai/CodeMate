import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/feed" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                CodeMate
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/about" className="text-pink-500 font-medium">
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About CodeMate</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              CodeMate is a platform designed to connect developers and tech professionals, making it easier to find collaboration opportunities, share knowledge, and build meaningful professional relationships.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe in the power of collaboration and community in the tech industry. Our mission is to create a space where developers can connect, learn from each other, and build amazing things together.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer Matching</h3>
                <p className="text-gray-600">
                  Find developers with complementary skills and interests for your next project.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Sharing</h3>
                <p className="text-gray-600">
                  Learn from other developers and share your expertise with the community.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Collaboration</h3>
                <p className="text-gray-600">
                  Connect with developers to work on exciting projects together.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Events</h3>
                <p className="text-gray-600">
                  Participate in virtual meetups, hackathons, and coding challenges.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              We're a team of passionate developers and tech enthusiasts who understand the importance of community in the tech industry. Our diverse backgrounds and experiences help us create a platform that serves the needs of developers worldwide.
            </p>

            <div className="mt-8">
              <Link
                to="/feed"
                className="btn btn-primary bg-gradient-to-r from-pink-500 to-orange-500 border-none hover:from-pink-600 hover:to-orange-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 