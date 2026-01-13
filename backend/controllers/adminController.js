const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const Department = require('../models/Department');

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = async (req, res, next) => {
    try {
        const patientCount = await Patient.countDocuments();
        const doctorCount = await Doctor.countDocuments();
        const appointmentCount = await Appointment.countDocuments();
        const departmentCount = await Department.countDocuments();

        res.json({
            patients: patientCount,
            doctors: doctorCount,
            appointments: appointmentCount,
            departments: departmentCount
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getDashboardStats };
