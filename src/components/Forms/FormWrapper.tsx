import React from 'react'
import Loader from '../ui/Loader'
import Button from '../ui/Button'

type FormWrapperProps = {
  isDisabled?: boolean
  number: number
  title: string
  children: React.ReactNode
  buttonText: string
  onSubmit: () => void
  isLoading?: boolean
}

const FormWrapper = ({ number, title, children, buttonText, onSubmit, isDisabled, isLoading }: FormWrapperProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className={`w-[17vw] bg-[#050C30] border-[1px] border-gray-600 p-[0.9vw] rounded-[0.5vw] flex flex-col gap-[0.6vw]  ${
        isDisabled ? 'opacity-50' : 'shadow-2xl shadow-teal-300'
      }`}>
      <div className='flex gap-4 items-center text-white '>
        <div className='bg-[#676D7D] w-[1.2vw] h-[1.2vw] rounded-md flex items-center justify-center text-[0.6vw]  font-bold'>
          {number}
        </div>
        <h6 className='font-bold text-[0.9vw]'>{title}</h6>
      </div>

      {children}
      <Button onClick={onSubmit} disabled={isDisabled} type='submit'>
        {!isLoading ? buttonText : <Loader />}
      </Button>
    </form>
  )
}

export default FormWrapper
