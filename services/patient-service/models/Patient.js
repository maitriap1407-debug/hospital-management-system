const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    bloodGroup: { type: String },
    address: { type: String },
    medicalHistory: [{
        condition: String,
        description: String,
        date: Date
    }],
    role: { type: String, default: 'patient', enum: ['patient'] }
}, {
    timestamps: true
});

// Match user entered password to hashed password in database
patientSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
patientSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
