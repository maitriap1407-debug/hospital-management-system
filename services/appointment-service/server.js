const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const promClient = require('prom-client');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Prometheus Metrics
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ register: promClient.register });

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
});

app.get('/api/appointments/health', (req, res) => {
    res.json({ service: 'appointment-service', status: 'ok', uptime: process.uptime() });
});

app.use('/api/appointments', require('./routes/appointmentRoutes'));

// Error Middleware
app.use(errorHandler);

const PORT = 5004;

app.listen(PORT, () => {
    console.log(`Appointment Service running on port ${PORT}`);
});
