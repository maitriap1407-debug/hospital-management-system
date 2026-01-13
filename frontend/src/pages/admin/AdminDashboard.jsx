import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Activity, Settings, UserPlus } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
            <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 rounded-md ${color}`}>
                    <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                    <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                        <dd className="text-lg font-medium text-gray-900">{value}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-6 text-gray-900">Admin Dashboard</h1>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">System overview and management.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard icon={Users} title="Total Patients" value="1,234" color="bg-blue-500" />
                <StatCard icon={Activity} title="Active Doctors" value="45" color="bg-green-500" />
                <StatCard icon={Calendar} title="Total Appointments" value="128" color="bg-purple-500" />
                <StatCard icon={Settings} title="System Load" value="24%" color="bg-yellow-500" />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Link to="/admin/add-doctor" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition group">
                        <span className="font-medium text-gray-900 block flex items-center">
                            <UserPlus className="h-5 w-5 mr-2 text-primary" />
                            Add Doctor
                        </span>
                        <span className="text-sm text-gray-500 block mt-1">Create new doctor account</span>
                    </Link>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition">
                        <span className="font-medium text-gray-900 block">Department Settings</span>
                        <span className="text-sm text-gray-500 block">Configure hospital departments</span>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition">
                        <span className="font-medium text-gray-900 block">System Logs</span>
                        <span className="text-sm text-gray-500 block">View activity logs</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
