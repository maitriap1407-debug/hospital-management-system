import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerPatient } = useAuth();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState('');

    const onSubmit = async (data) => {
        try {
            setServerError('');
            await registerPatient(data);
            navigate('/dashboard');
        } catch (error) {
            setServerError(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Create Patient Account</h2>
                    <p className="mt-2 text-sm text-gray-600">Join MediBook to manage your health</p>
                </div>

                {serverError && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{serverError}</div>}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input {...register('name', { required: 'Name is required' })} type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input {...register('email', { required: 'Email is required' })} type="email" className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input {...register('password', { required: 'Password is required' })} type="password" className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input {...register('phone', { required: 'Phone is required' })} type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Age</label>
                            <input {...register('age', { required: 'Age is required' })} type="number" className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                            {errors.age && <span className="text-red-500 text-xs">{errors.age.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <select {...register('gender', { required: 'Gender is required' })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <span className="text-red-500 text-xs">{errors.gender.message}</span>}
                        </div>
                    </div>

                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                        Create Account
                    </button>
                    <div className="text-center">
                        <Link to="/login" className="text-sm text-primary hover:underline font-medium">Already have an account? Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
