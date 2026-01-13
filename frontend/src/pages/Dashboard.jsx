import React from 'react';
import { useAuth } from '../context/AuthContext';
import PatientDashboard from './patient/PatientDashboard';
import DoctorDashboard from './doctor/DoctorDashboard';
import AdminDashboard from './admin/AdminDashboard';
import Navbar from '../components/Navbar'; // Reuse navbar for now or a specific sidebar

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) return <div className="p-4">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
                {user.role === 'patient' && <PatientDashboard />}
                {user.role === 'doctor' && <DoctorDashboard />}
                {user.role === 'admin' && <AdminDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;
