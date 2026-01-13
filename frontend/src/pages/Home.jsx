import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, UserPlus, Shield } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-primary text-white py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">MediBook - Medical Appointment System</h1>
                    <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">Book appointments with doctors easily and securely. Manage your health records with our platform.</p>
                    <div className="flex justify-center space-x-6">
                        <Link to="/register" className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">Register Now</Link>
                        <Link to="/login" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">Login</Link>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="flex justify-center mb-4">
                            <Calendar className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Easy Scheduling</h3>
                        <p className="text-gray-600">Book appointments online with your preferred doctors instantly.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="flex justify-center mb-4">
                            <UserPlus className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Patient Records</h3>
                        <p className="text-gray-600">Securely access and manage your medical history and prescriptions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="flex justify-center mb-4">
                            <Shield className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
                        <p className="text-gray-600">Your data is protected with enterprise-grade security and role-based access.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
