import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { FiArrowLeft } from 'react-icons/fi'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" className="gap-2">
            <FiArrowLeft />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
