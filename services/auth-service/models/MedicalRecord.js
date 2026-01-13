const mongoose = require('mongoose');

const medicalRecordSchema = mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    diagnosis: { type: String, required: true },
    prescription: [{
        medicineName: String,
        dosage: String,
        frequency: String,
        duration: String
    }],
    labReports: [{ type: String }], // URL or path to report
    notes: { type: String }
}, {
    timestamps: true
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;
