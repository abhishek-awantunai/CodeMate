import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Help Center</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to the CodeMate Help Center. Find answers to common questions and learn how to make the most of our platform.
            </p>

            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="input input-bordered w-full pl-12"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I create an account?</h3>
                    <p className="text-gray-600">
                      Click the "Sign Up" button on the login page and fill in your details. You'll need to provide your name, email, and create a password.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I complete my profile?</h3>
                    <p className="text-gray-600">
                      After signing up, go to your profile page and click "Edit Profile". Add your skills, experience, and a profile picture to get better matches.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding Matches</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How does the matching system work?</h3>
                    <p className="text-gray-600">
                      Our algorithm matches you with other developers based on your skills, interests, and project preferences. The more complete your profile, the better your matches will be.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I filter my matches?</h3>
                    <p className="text-gray-600">
                      Yes, you can filter matches by skills, location, experience level, and more. Use the filter options on the feed page to customize your results.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Communication</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I message other developers?</h3>
                    <p className="text-gray-600">
                      Once you've matched with someone, you can start a conversation by clicking the message icon on their profile or in your matches list.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a limit to messages?</h3>
                    <p className="text-gray-600">
                      Free users can send up to 50 messages per day. Premium users have unlimited messaging capabilities.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Support */}
            <div className="mt-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="mb-6">
                Our support team is here to help you with any questions or issues you might have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@codemate.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat Support (24/7)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 