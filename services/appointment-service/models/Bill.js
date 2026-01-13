const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Unpaid', enum: ['Unpaid', 'Paid'] },
    paymentDate: { type: Date },
    paymentMethod: { type: String }, // e.g., 'Card', 'Cash'
    invoiceId: { type: String, unique: true }
}, {
    timestamps: true
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
