const express = require('express');
const router = express.Router();
const { getPatientProfile } = require('../controllers/patientController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/profile')
    .get(protect, authorize('patient'), getPatientProfile);

module.exports = router;
