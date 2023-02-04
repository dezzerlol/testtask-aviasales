import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-full min-w-[12vw] h-[3vw] tracking-wide font-black text-[1vw] text-white rounded-[0.8vw] flex items-center justify-center
      default-button-gradient 
      ${!disabled && 'hover:hover-button-gradient'}
      ${!disabled && 'active:pressed-button-gradient'}
      disabled:cursor-default disabled:opacity-50
    `}>
      {children}
    </button>
  )
}

export default Button
