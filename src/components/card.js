import React from "react"

const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`card ${className}`}
    style={{
      borderRadius: '0.5rem',
      border: '1px solid #374151',
      backgroundColor: '#1f2937',
      color: '#ffffff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    }}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`card-header ${className}`}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      padding: '1.5rem',
    }}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`card-title ${className}`}
    style={{
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1',
      letterSpacing: '-0.025em',
    }}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`card-description ${className}`}
    style={{
      fontSize: '0.875rem',
      color: '#9ca3af',
    }}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div 
    ref={ref} 
    className={`card-content ${className}`}
    style={{
      padding: '1.5rem',
      paddingTop: 0,
    }}
    {...props} 
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`card-footer ${className}`}
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1.5rem',
      paddingTop: 0,
    }}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }