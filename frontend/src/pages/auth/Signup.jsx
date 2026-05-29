import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'
import { signupSchema } from '../../utils/validationSchemas'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import { SEO } from '../../components/common/SEO'
import toast from 'react-hot-toast'

export const Signup = () => {
  const navigate = useNavigate()
  const { signup, isAuthenticated } = useAuth()
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    signupSchema,
    async (data) => {
      const { confirmPassword, ...signupData } = data
      const result = await signup(signupData)
      if (result.success) {
        toast.success('Account created successfully!')
        navigate('/')
      } else {
        toast.error(result.error)
      }
    }
  )

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <SEO
        title="Sign Up | Santrix E-Tuitions"
        description="Create your Santrix account and start learning today"
        keywords="signup, register, create account"
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-2 text-gray-600">Join Santrix E-Tuitions today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword || ''}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                I am a <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={formData.role || ''}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.role ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              >
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full"
            >
              Create Account
            </Button>
          </form>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
