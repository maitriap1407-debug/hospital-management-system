const Doctor = require('../models/Doctor');

// @desc    Add a new doctor
// @route   POST /api/doctors
// @access  Private/Admin
const addDoctor = async (req, res, next) => {
    try {
        const { name, email, password, specialization, fees, availability, department } = req.body;

        const doctorExists = await Doctor.findOne({ email });

        if (doctorExists) {
            return res.status(400).json({ message: 'Doctor already exists' });
        }

        const doctor = await Doctor.create({
            name,
            email,
            password,
            specialization,
            fees,
            availability: availability || [
                { day: 'Monday', startTime: '09:00', endTime: '17:00' },
                { day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
                { day: 'Friday', startTime: '09:00', endTime: '13:00' }
            ],
            department: department || undefined
        });

        res.status(201).json({
            _id: doctor._id,
            name: doctor.name,
            email: doctor.email,
            specialization: doctor.specialization
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
const getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find({}).populate('department', 'name');
        res.json(doctors);
    } catch (error) {
        next(error);
    }
};

// @desc    Get doctor by ID
// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = async (req, res, next) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('department', 'name');

        if (doctor) {
            res.json(doctor);
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { addDoctor, getAllDoctors, getDoctorById };
