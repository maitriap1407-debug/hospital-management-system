import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Lock, Stethoscope, ShieldAlert } from 'lucide-react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();
    const [role, setRole] = useState('patient');
    const [serverError, setServerError] = useState('');

    const onSubmit = async (data) => {
        try {
            setServerError('');
            await login(data.email, data.password, role);
            navigate('/dashboard');
        } catch (error) {
            setServerError(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
                </div>

                <div className="flex justify-center space-x-2 bg-gray-100 p-1 rounded-lg">
                    {['patient', 'doctor', 'admin'].map((r) => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${role === r
                                    ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {r === 'patient' && <User className="h-4 w-4 mr-2" />}
                            {r === 'doctor' && <Stethoscope className="h-4 w-4 mr-2" />}
                            {r === 'admin' && <ShieldAlert className="h-4 w-4 mr-2" />}
                            {r.charAt(0).toUpperCase() + r.slice(1)}
                        </button>
                    ))}
                </div>

                {serverError && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center">
                        <ShieldAlert className="h-4 w-4 mr-2" />
                        {serverError}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('email', { required: 'Email is required' })}
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm bg-gray-50 focus:bg-white transition"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('password', { required: 'Password is required' })}
                                    type="password"
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm bg-gray-50 focus:bg-white transition"
                                    placeholder="Enter your password"
                                />
                            </div>
                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                        Sign In
                    </button>

                    <div className="flex items-center justify-between text-sm">
                        <Link to="/" className="text-gray-500 hover:text-primary">Back to Home</Link>
                        <Link to="/register" className="font-medium text-primary hover:text-blue-700">
                            Create Patient Account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
