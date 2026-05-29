require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const app = express()

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})
app.use('/api/', limiter)

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/santrix-e-tuitions')
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.log('✗ MongoDB connection error:', err))

// Routes
app.use('/api/auth', require('./routes/auth'))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`)
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`)
})
