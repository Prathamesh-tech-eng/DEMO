import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-yellow-100 to-orange-50 py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Break Language Barriers with AI
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Enabling inclusive, real-time multilingual communication for a connected Maharashtra.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/sign-up">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full cursor-pointer transition-colors duration-300 shadow-md hover:shadow-lg">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className="bg-transparent hover:bg-orange-100 text-orange-700 font-semibold py-3 px-8 rounded-full border border-orange-500 hover:border-orange-700 cursor-pointer transition-colors duration-300 shadow-md hover:shadow-lg">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/2 bg-orange-50 bg-opacity-50 hidden md:block" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                <img
                    src="https://utsystem-edu.com/wp-content/uploads/2023/02/2023-735x400.jpg"
                    alt="Translation AI Illustration"
                    className="absolute top-1/4 right-1/4 transform translate-x-1/4 -translate-y-1/4 rounded-lg shadow-xl"
                    style={{ opacity: 0.8, width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </section>
    );
}

export default HeroSection;