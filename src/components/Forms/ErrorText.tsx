import React from 'react'

const ErrorText = ({ children }: { children: React.ReactNode }) => {
  return <div className='text-red-500 text-[0.6vw] mt-2'>{children}</div>
}

export default ErrorText
