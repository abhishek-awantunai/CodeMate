import { Link } from 'react-router-dom';
import { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    age: 28,
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about creating beautiful and functional web applications. Love working with React, Node.js, and Python.',
    skills: ['React', 'Node.js', 'Python', 'TypeScript', 'AWS'],
    experience: [
      {
        title: 'Senior Developer',
        company: 'TechCorp',
        duration: '2020 - Present'
      },
      {
        title: 'Full Stack Developer',
        company: 'WebSolutions',
        duration: '2018 - 2020'
      }
    ],
    education: [
      {
        degree: 'B.S. Computer Science',
        school: 'Stanford University',
        year: '2018'
      }
    ]
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

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
              <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-pink-500 transition-colors">
                Privacy
              </Link>
              <Link to="/help" className="text-gray-600 hover:text-pink-500 transition-colors">
                Help
              </Link>
              <Link to="/profile" className="text-pink-500 font-medium">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-pink-500 to-orange-500">
                <div className="absolute -bottom-16 left-8">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt="Profile"
                      className="w-32 h-32 rounded-full border-4 border-white object-cover"
                    />
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-20 pb-8 px-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                    <p className="text-gray-600">{profileData.location}</p>
                  </div>
                  <button
                    onClick={handleEdit}
                    className="btn btn-outline btn-sm text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{profileData.bio}</p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {isEditing && (
                  <button className="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-500 rounded-full text-sm hover:border-pink-500 hover:text-pink-500">
                    + Add Skill
                  </button>
                )}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
              <div className="space-y-6">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500">{exp.duration}</span>
                  </div>
                ))}
                {isEditing && (
                  <button className="text-pink-500 hover:text-pink-600">
                    + Add Experience
                  </button>
                )}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                    </div>
                    <span className="text-gray-500">{edu.year}</span>
                  </div>
                ))}
                {isEditing && (
                  <button className="text-pink-500 hover:text-pink-600">
                    + Add Education
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Settings */}
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-semibold text-gray-900">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Matches</span>
                  <span className="font-semibold text-gray-900">56</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Messages</span>
                  <span className="font-semibold text-gray-900">89</span>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Account Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Notification Preferences
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Privacy Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  Subscription
                </button>
              </div>
            </div>

            {/* Premium Card */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Upgrade to Premium</h2>
              <p className="mb-6">Get unlimited matches, advanced filters, and more!</p>
              <button className="w-full bg-white text-pink-500 font-semibold py-2 rounded-lg hover:bg-gray-100">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 