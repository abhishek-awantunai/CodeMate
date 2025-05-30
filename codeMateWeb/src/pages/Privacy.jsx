import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              At CodeMate, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Profile Information</h3>
                <p className="text-gray-600">
                  • Name, email address, and profile picture<br />
                  • Professional information (skills, experience, education)<br />
                  • Location and timezone
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                <p className="text-gray-600">
                  • Interaction with other users<br />
                  • Messages and communications<br />
                  • Platform activity and preferences
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Platform Features</h3>
                <p className="text-gray-600">
                  • Matching you with other developers<br />
                  • Facilitating communication<br />
                  • Personalizing your experience
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Improving Our Service</h3>
                <p className="text-gray-600">
                  • Analyzing usage patterns<br />
                  • Enhancing platform features<br />
                  • Ensuring platform security
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-600">
                You have the right to:<br />
                • Access your personal information<br />
                • Update or correct your data<br />
                • Delete your account<br />
                • Export your data<br />
                • Opt-out of communications
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our Privacy Policy or how we handle your data, please contact us at privacy@codemate.com
            </p>

            <div className="mt-8 text-sm text-gray-500">
              Last updated: March 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 