import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'
import { loginSchema } from '../../utils/validationSchemas'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import { SEO } from '../../components/common/SEO'
import toast from 'react-hot-toast'

export const Login = () => {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    loginSchema,
    async (data) => {
      const result = await login(data.email, data.password)
      if (result.success) {
        toast.success('Login successful!')
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
        title="Login | Santrix E-Tuitions"
        description="Login to your Santrix account to access courses and tutoring"
        keywords="login, sign in, authentication"
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              error={errors.email}
              required
              autoComplete="email"
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              error={errors.password}
              required
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
