import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        const userData = localStorage.getItem('user'); // Storing basic user info

        if (token && role) {
            // In a real app, verify token validity with backend here
            setUser({ token, role, ...JSON.parse(userData || '{}') });
        }
        setLoading(false);
    }, []);

    const login = async (email, password, role) => {
        const response = await api.post('/auth/login', { email, password, role });
        const { token, role: userRole, ...rest } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);
        localStorage.setItem('user', JSON.stringify(rest));

        setUser({ token, role: userRole, ...rest });
        return response.data;
    };

    const registerPatient = async (data) => {
        const response = await api.post('/auth/register', data);
        const { token, role, ...rest } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('user', JSON.stringify(rest));

        setUser({ token, role, ...rest });
        return response.data;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, registerPatient, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
