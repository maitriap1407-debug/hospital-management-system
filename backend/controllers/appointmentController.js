const Appointment = require('../models/Appointment');

// @desc    Book an appointment
// @route   POST /api/appointments
// @access  Private/Patient
const bookAppointment = async (req, res, next) => {
    try {
        const { doctorId, date, reason } = req.body;

        const appointment = await Appointment.create({
            patient: req.user._id,
            doctor: doctorId,
            date,
            reason
        });

        if (appointment) {
            res.status(201).json(appointment);
        } else {
            res.status(400).json({ message: 'Invalid appointment data' });
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Get my appointments (Patient)
// @route   GET /api/appointments/my-appointments
// @access  Private/Patient
const getMyAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({ patient: req.user._id })
            .populate('doctor', 'name specialization')
            .sort({ date: -1 }); // Recently booked first
        res.json(appointments);
    } catch (error) {
        next(error);
    }
};

// @desc    Get doctor appointments (Doctor)
// @route   GET /api/appointments/doctor-appointments
// @access  Private/Doctor
const getDoctorAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({ doctor: req.user._id })
            .populate('patient', 'name')
            .sort({ date: 1 }); // Upcoming first
        res.json(appointments);
    } catch (error) {
        next(error);
    }
};

// @desc    Update appointment status
// @route   PUT /api/appointments/:id/status
// @access  Private/Doctor/Admin
const updateAppointmentStatus = async (req, res, next) => {
    try {
        const { status } = req.body; // 'Completed', 'Cancelled', 'Approved'

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Check if user is authorized (Doctor who owns it, or Admin)
        if (req.user.role === 'doctor' && appointment.doctor.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized to update this appointment' });
        }
        // Admin can update any

        appointment.status = status;
        const updatedAppointment = await appointment.save();
        res.json(updatedAppointment);
    } catch (error) {
        next(error);
    }
};

// @desc    Get all appointments (Admin)
// @route   GET /api/appointments
// @access  Private/Admin
const getAllAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({})
            .populate('patient', 'name')
            .populate('doctor', 'name');
        res.json(appointments);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    bookAppointment,
    getMyAppointments,
    getDoctorAppointments,
    updateAppointmentStatus,
    getAllAppointments
};
