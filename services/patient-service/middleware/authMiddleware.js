const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check which role and find user
            if (decoded.role === 'patient') {
                req.user = await Patient.findById(decoded.id).select('-password');
            } else if (decoded.role === 'doctor') {
                req.user = await Doctor.findById(decoded.id).select('-password');
            } else if (decoded.role === 'admin') {
                req.user = await Admin.findById(decoded.id).select('-password');
            }

            if (!req.user) {
                res.status(401);
                return next(new Error('Not authorized, user not found'));
            }

            // Attach role to request for easier access
            req.user.role = decoded.role;

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            return next(new Error('Not authorized, token failed'));
        }
    }

    if (!token) {
        res.status(401);
        return next(new Error('Not authorized, no token'));
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403);
            return next(new Error('Not authorized as ' + (req.user ? req.user.role : 'unknown')));
        }
        next();
    };
};

module.exports = { protect, authorize };
