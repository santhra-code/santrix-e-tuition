import React from 'react'

export const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-purple-600 text-white hover:bg-purple-700',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
      ghost: 'text-gray-700 hover:bg-gray-100',
      danger: 'bg-red-600 text-white hover:bg-red-700'
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }

    const variantClass = variants[variant] || variants.primary
    const sizeClass = sizes[size] || sizes.md

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClass} ${sizeClass} ${className || ''}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
