import React from 'react';
import { FaHeart, FaCode, FaUserFriends, FaLightbulb } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-100 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Welcome to CodeMate
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Where passionate developers connect, collaborate, and create amazing projects together.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <FeatureCard
                        icon={<FaCode className="w-8 h-8 text-rose-500" />}
                        title="Smart Matching"
                        description="Find developers who complement your skills and share your interests"
                    />
                    <FeatureCard
                        icon={<FaUserFriends className="w-8 h-8 text-rose-500" />}
                        title="Collaboration"
                        description="Connect instantly with developers around the world"
                    />
                    <FeatureCard
                        icon={<FaLightbulb className="w-8 h-8 text-rose-500" />}
                        title="Project Ideas"
                        description="Share and discover exciting project opportunities"
                    />
                    <FeatureCard
                        icon={<FaHeart className="w-8 h-8 text-rose-500" />}
                        title="Community"
                        description="Join a thriving community of passionate developers"
                    />
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
                        CodeMate is revolutionizing how developers connect and collaborate. 
                        We believe great things happen when passionate developers come together. 
                        Our platform makes it easy to find the perfect coding partner for your next project.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        Start Matching Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default About;
