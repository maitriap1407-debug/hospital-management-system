import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PlusCircle, FileText } from 'lucide-react';

const PatientDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-6 text-gray-900">My Health Portal</h1>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">Manage your appointments and view medical records.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Link to="/book-appointment" className="bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-shadow cursor-pointer border border-transparent hover:border-primary/20 group">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition">
                                <PlusCircle className="h-8 w-8 text-primary" />
                            </div>
                            <div className="ml-5">
                                <h3 className="text-lg font-medium text-gray-900">Book Appointment</h3>
                                <p className="mt-1 text-sm text-gray-500">Schedule a visit with a doctor</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-shadow cursor-pointer border border-transparent hover:border-green-500/20 group">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-green-100 rounded-lg p-3 group-hover:bg-green-200 transition">
                                <FileText className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="ml-5">
                                <h3 className="text-lg font-medium text-gray-900">Medical Records</h3>
                                <p className="mt-1 text-sm text-gray-500">View your history and prescriptions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                        Upcoming Appointments
                    </h3>
                </div>
                <div className="p-6 text-center text-gray-500">
                    <p>No upcoming appointments scheduled.</p>
                    <button className="mt-4 px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50 transition">
                        Find a Doctor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
