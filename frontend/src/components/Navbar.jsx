import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Activity } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-primary shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center text-white font-bold text-2xl">
                            {/* <Activity className="h-8 w-8 mr-2" /> */}
                            MediBook
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link to="/doctors" className="text-blue-100 hover:text-white font-medium transition">Find Doctors</Link>
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/dashboard" className="text-blue-100 hover:text-white font-medium">Dashboard</Link>
                                <span className="flex items-center text-blue-100">
                                    <User className="h-5 w-5 mr-1" />
                                    {user.firstName || user.name}
                                </span>
                                <button onClick={handleLogout} className="flex items-center text-white hover:text-red-200 transition">
                                    <LogOut className="h-5 w-5 mr-1" />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-white hover:text-blue-100 font-medium transition">Login</Link>
                                <Link to="/register" className="px-5 py-2 bg-secondary text-white rounded-md hover:bg-blue-800 transition font-medium shadow-sm">Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
