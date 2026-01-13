const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const Department = require('../models/Department');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Admin.deleteMany();
        await Doctor.deleteMany();
        await Department.deleteMany();

        const createdAdmin = await Admin.create({
            name: 'Admin User',
            email: 'admin@hospital.com',
            password: 'adminpassword123',
            role: 'admin'
        });

        const dept = await Department.create({
            name: 'Cardiology',
            description: 'Heart related issues'
        });

        const doctor = await Doctor.create({
            name: 'Dr. Smith',
            email: 'doctor@hospital.com',
            password: 'doctorpassword123',
            specialization: 'Cardiologist',
            department: dept._id,
            fees: 500,
            availability: [
                { day: 'Monday', startTime: '09:00', endTime: '17:00' }
            ],
            role: 'doctor'
        });

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    // destroyData();
} else {
    importData();
}
