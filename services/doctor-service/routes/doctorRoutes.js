const express = require('express');
const router = express.Router();
const { addDoctor, getAllDoctors, getDoctorById } = require('../controllers/doctorController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(getAllDoctors)
    .post(protect, authorize('admin'), addDoctor);

router.route('/:id')
    .get(getDoctorById);

module.exports = router;
