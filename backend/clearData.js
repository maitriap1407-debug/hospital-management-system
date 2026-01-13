const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');
const Admin = require('./models/Admin');
const Patient = require('./models/Patient');
const Appointment = require('./models/Appointment');
const MedicalRecord = require('./models/MedicalRecord');
const Bill = require('./models/Bill');

dotenv.config();

const clearData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        // Delete all data
        await Admin.deleteMany({});
        console.log('Admins cleared');

        await Doctor.deleteMany({});
        console.log('Doctors cleared');

        await Patient.deleteMany({});
        console.log('Patients cleared');

        await Appointment.deleteMany({});
        console.log('Appointments cleared');

        await MedicalRecord.deleteMany({});
        console.log('Medical Records cleared');

        await Bill.deleteMany({});
        console.log('Bills cleared');

        console.log('All data cleared successfully');
        process.exit();
    } catch (error) {
        console.error('Error clearing data:', error);
        process.exit(1);
    }
};

clearData();
