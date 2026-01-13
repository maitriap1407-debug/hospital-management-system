const express = require('express');
const router = express.Router();
const {
    bookAppointment,
    getMyAppointments,
    getDoctorAppointments,
    updateAppointmentStatus,
    getAllAppointments
} = require('../controllers/appointmentController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, authorize('patient'), bookAppointment)
    .get(protect, authorize('admin'), getAllAppointments);

router.get('/my-appointments', protect, authorize('patient'), getMyAppointments);
router.get('/doctor-appointments', protect, authorize('doctor'), getDoctorAppointments);
router.put('/:id/status', protect, authorize('doctor', 'admin'), updateAppointmentStatus);

module.exports = router;
