# Hospital Management System

A production-ready Full-Stack Hospital Management System built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- **Role-Based Access Control**: Separate portals for Admin, Doctors, and Patients.
- **Patient Management**: Registration, profile, and medical history.
- **Appointment System**: Booking, rescheduling, and status tracking.
- **Doctor Management**: Availability, specialization, and appointments.
- **Admin Dashboard**: System overview and statistics.

## 🛠 Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: JWT & BCrypt.
- **Containerization**: Docker & Docker Compose.

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or URI) OR Docker Desktop

### 1. clone the repo (or use the provided folder)

### 2. Method A: Docker (Easiest)
Run the entire stack with one command:
```bash
docker-compose up --build
```
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5000](http://localhost:5000)

### 3. Method B: Manual Setup

#### Backend
```bash
cd backend
npm install
npm run seed  # Seeds the database with Admin and Doctor accounts
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🔑 Default Login Credentials

| Role    | Email                | Password           |
|---------|----------------------|--------------------|
| **Admin** | `admin@hospital.com` | `adminpassword123` |
| **Doctor**| `doctor@hospital.com`| `doctorpassword123`|
| **Patient**| (Register new)      | (User defined)     |

## 📂 Project Structure
```
hospital-management-system/
├── backend/            # Express API
│   ├── config/        # DB connection
│   ├── controllers/   # Logic
│   ├── models/        # Mongoose Schemas
│   ├── routes/        # API Routes
│   └── utils/         # Seeder, Tokens
├── frontend/           # React App
│   ├── src/
│   │   ├── components/# Reusable UI
│   │   ├── context/   # Auth Context
│   │   ├── pages/     # Views
│   │   └── api/       # Axios setup
└── docker-compose.yml
```
