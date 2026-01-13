const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const generateToken = require('../utils/generateToken');

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
    try {
        const { email, password, role } = req.body;

        let user;

        if (role === 'patient') {
            user = await Patient.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        } else if (role === 'admin') {
            user = await Admin.findOne({ email });
        } else {
            return res.status(400).json({ message: 'Invalid role' });
        }

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id, user.role),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Register a new patient
// @route   POST /api/auth/register
// @access  Public
const registerPatient = async (req, res, next) => {
    try {
        const { name, email, password, phone, age, gender } = req.body;

        const userExists = await Patient.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const patient = await Patient.create({
            name,
            email,
            password,
            phone,
            age,
            gender
        });

        if (patient) {
            res.status(201).json({
                _id: patient._id,
                name: patient.name,
                email: patient.email,
                role: 'patient',
                token: generateToken(patient._id, 'patient'),
            });
        } else {
            res.status(400).json({ message: 'Invalid patient data' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { login, registerPatient };
