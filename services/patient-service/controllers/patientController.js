const Patient = require('../models/Patient');

// @desc    Get patient profile
// @route   GET /api/patients/profile
// @access  Private/Patient
const getPatientProfile = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.user._id);

        if (patient) {
            res.json({
                _id: patient._id,
                name: patient.name,
                email: patient.email,
                phone: patient.phone,
                medicalHistory: patient.medicalHistory,
                // ...other fields
            });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getPatientProfile };
