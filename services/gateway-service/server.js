const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));

// Service URLs (will use K8s service names when deployed)
const AUTH_SERVICE = process.env.AUTH_SERVICE_URL || 'http://localhost:5001';
const DOCTOR_SERVICE = process.env.DOCTOR_SERVICE_URL || 'http://localhost:5002';
const PATIENT_SERVICE = process.env.PATIENT_SERVICE_URL || 'http://localhost:5003';
const APPOINTMENT_SERVICE = process.env.APPOINTMENT_SERVICE_URL || 'http://localhost:5004';

// Proxy routes
app.use('/api/auth', proxy(AUTH_SERVICE, {
    proxyReqPathResolver: (req) => `/api/auth${req.url}`
}));

app.use('/api/doctors', proxy(DOCTOR_SERVICE, {
    proxyReqPathResolver: (req) => `/api/doctors${req.url}`
}));

app.use('/api/admin', proxy(DOCTOR_SERVICE, {
    proxyReqPathResolver: (req) => `/api/admin${req.url}`
}));

app.use('/api/patients', proxy(PATIENT_SERVICE, {
    proxyReqPathResolver: (req) => `/api/patients${req.url}`
}));

app.use('/api/appointments', proxy(APPOINTMENT_SERVICE, {
    proxyReqPathResolver: (req) => `/api/appointments${req.url}`
}));

app.get('/health', (req, res) => {
    res.json({ service: 'api-gateway', status: 'ok' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
