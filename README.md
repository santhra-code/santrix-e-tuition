# 🎓 Santrix E-Tuitions Platform

**A full-stack online tuition platform built with React.js, Node.js, Express, and MongoDB**

![Platform](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18.2-blue)
![Node.js](https://img.shields.io/badge/Node-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Features

✅ **Responsive Hero Banner** - Eye-catching landing page with CTAs
✅ **Course Categories** - Browse courses by subject area
✅ **Teacher Listings** - Find expert tutors with ratings
✅ **Free Demo Booking** - Schedule demo sessions easily
✅ **User Authentication** - Secure login/signup with JWT
✅ **Student Dashboard** - Track enrolled courses and progress
✅ **Teacher Dashboard** - Manage courses and students
✅ **Admin Panel** - User and course management
✅ **Form Validation** - Zod schema validation
✅ **SEO Optimized** - React Helmet meta tags
✅ **Responsive Design** - Mobile-first with Tailwind CSS
✅ **API Service Layer** - Axios with interceptors
✅ **Docker Ready** - Complete Docker setup

## 📋 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Fast build tool
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Zod** - Form validation
- **React Helmet** - SEO tags
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Express Validator** - Input validation

## 🚀 Quick Start

### Option 1: Local Development

**Prerequisites:**
- Node.js v16+
- MongoDB
- npm or yarn

**Setup:**

```bash
# Clone repository
git clone https://github.com/santhra-code/santrix-e-tuition.git
cd santrix-e-tuition

# Frontend setup
cd frontend
npm install
cp .env.example .env.local
npm run dev

# Backend setup (in another terminal)
cd backend
npm install
cp .env.example .env
npm run dev

# MongoDB
mongosh
```

**Access:**
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- MongoDB: mongodb://localhost:27017

### Option 2: Docker Deployment

**Prerequisites:**
- Docker Desktop

**Setup:**

```bash
git clone https://github.com/santhra-code/santrix-e-tuition.git
cd santrix-e-tuition
docker-compose up --build
```

**Access:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: mongodb://localhost:27017

## 📁 Project Structure

```
santrix-e-tuition/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         (Button, Input, Card, Modal, SEO)
│   │   │   ├── home/           (Hero, Categories, Teachers, Demo)
│   │   │   ├── layout/         (Navbar, Footer)
│   │   │   └── dashboard/      (Student, Teacher)
│   │   ├── pages/              (Home, Login, Courses, Teachers)
│   │   ├── context/            (AuthContext)
│   │   ├── hooks/              (useAuth, useForm)
│   │   ├── services/           (API client)
│   │   ├── utils/              (Validation schemas)
│   │   ├── styles/             (CSS files)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env.example
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── User.js         (User schema)
│   │   ├── routes/
│   │   │   ├── auth.js         (Auth endpoints)
│   │   │   ├── courses.js
│   │   │   ├── teachers.js
│   │   │   ├── students.js
│   │   │   ├── bookings.js
│   │   │   └── admin.js
│   │   └── index.js            (Server)
│   ├── package.json
│   └── .env.example
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🔑 Environment Variables

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Santrix E-Tuitions
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/santrix-e-tuitions
JWT_SECRET=your_secret_key_here
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/change-password` - Change password

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (teacher)
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `GET /api/courses/categories/all` - Get categories

### Teachers
- `GET /api/teachers` - List all teachers
- `GET /api/teachers/:id` - Get teacher profile
- `GET /api/teachers/search?q=query` - Search teachers
- `PUT /api/teachers/profile` - Update profile
- `GET /api/teachers/:teacherId/courses` - Get teacher's courses

### Students
- `GET /api/students/profile/me` - Get profile
- `POST /api/students/enroll/:courseId` - Enroll course
- `GET /api/students/courses` - Get enrolled courses
- `GET /api/students/progress/:courseId` - Get progress

### Bookings
- `POST /api/bookings/demo` - Book demo session
- `GET /api/bookings` - Get bookings
- `DELETE /api/bookings/:id` - Cancel booking

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - List users
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/analytics` - Get analytics

## 🧪 Testing

### Test Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "student"
  }'
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

## 🐳 Docker Commands

```bash
# Start all services
docker-compose up --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Clean up
docker-compose down -v
```

## 📖 Documentation

For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 🚧 Roadmap

- [ ] Video streaming
- [ ] Live classes
- [ ] Payment integration (Stripe)
- [ ] Certificate generation
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] AI-powered recommendations

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 💬 Support

For support, email support@santrix-e-tuitions.com or open an issue on GitHub.

## 🎉 Acknowledgments

- Tailwind CSS for beautiful styling
- React for amazing UI library
- MongoDB for scalable database
- All open-source contributors

---

**Built with ❤️ by Santrix Team**

[⬆ back to top](#-santrix-e-tuitions-platform)
