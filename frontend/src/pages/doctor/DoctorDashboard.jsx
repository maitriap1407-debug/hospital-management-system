import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const DoctorDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-6 text-gray-900">Doctor Dashboard</h1>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">Manage your schedule and patients.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg p-5 flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-5">
                        <p className="text-sm font-medium text-gray-500">Today's Appointments</p>
                        <p className="text-2xl font-semibold text-gray-900">8</p>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg p-5 flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                        <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-5">
                        <p className="text-sm font-medium text-gray-500">Total Patients</p>
                        <p className="text-2xl font-semibold text-gray-900">142</p>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg p-5 flex items-center">
                    <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                        <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-5">
                        <p className="text-sm font-medium text-gray-500">Pending Reviews</p>
                        <p className="text-2xl font-semibold text-gray-900">3</p>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Appointments</h3>
                </div>
                <ul className="divide-y divide-gray-200">
                    {[1, 2, 3].map((i) => (
                        <li key={i} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-primary truncate">Patient Name {i}</p>
                                    <p className="flex items-center text-sm text-gray-500">
                                        General Checkup
                                    </p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-sm text-gray-900">10:00 AM</p>
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Confirmed
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DoctorDashboard;
