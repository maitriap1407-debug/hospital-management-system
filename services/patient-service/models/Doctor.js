const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    specialization: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    fees: { type: Number, required: true },
    availability: [{
        day: { type: String, required: true }, // e.g. Monday
        startTime: { type: String, required: true }, // e.g. 09:00
        endTime: { type: String, required: true } // e.g. 17:00
    }],
    role: { type: String, default: 'doctor', enum: ['doctor'] }
}, {
    timestamps: true
});

doctorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

doctorSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
