const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');
const Admin = require('./models/Admin');
const Patient = require('./models/Patient');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        // Check and create Admin
        const adminExists = await Admin.findOne({ email: 'admin@medibook.com' });
        if (!adminExists) {
            await Admin.create({
                name: 'Super Admin',
                email: 'admin@medibook.com',
                password: 'password123',
                role: 'admin'
            });
            console.log('Admin created: admin@medibook.com / password123');
        } else {
            console.log('Admin already exists');
        }

        // Check and create Doctor
        const doctorExists = await Doctor.findOne({ email: 'doctor@medibook.com' });
        if (!doctorExists) {
            await Doctor.create({
                name: 'Dr. Sarah Wilson',
                email: 'doctor@medibook.com',
                password: 'password123',
                specialization: 'Cardiology',
                fees: 150,
                availability: [
                    { day: 'Monday', startTime: '09:00', endTime: '17:00' },
                    { day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
                    { day: 'Friday', startTime: '09:00', endTime: '13:00' }
                ],
                role: 'doctor'
            });
            console.log('Doctor created: doctor@medibook.com / password123');
        } else {
            console.log('Doctor already exists');
        }

        console.log('Seeding completed');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
