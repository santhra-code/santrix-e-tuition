import { useState, useCallback } from 'react'
import { z } from 'zod'

export const useForm = (schema, onSubmit) => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }, [errors])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      if (schema) {
        const validatedData = schema.parse(formData)
        await onSubmit(validatedData)
      } else {
        await onSubmit(formData)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {}
        error.errors.forEach(err => {
          fieldErrors[err.path[0]] = err.message
        })
        setErrors(fieldErrors)
      } else {
        console.error('Form submission error:', error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, schema, onSubmit])

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    handleChange,
    handleSubmit
  }
}
