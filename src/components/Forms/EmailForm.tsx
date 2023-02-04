import { useFormStore } from '@/store/formStore'
import React, { useState } from 'react'
import ErrorText from './ErrorText'
import FormWrapper from './FormWrapper'

const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/

const EmailForm = () => {
  const [isError, setIsError] = useState(false)
  const { email, currentForm, apiError, setEmail, setForm, setApiError } = useFormStore((state) => ({
    email: state.email,
    currentForm: state.currentForm,
    apiError: state.apiError,
    setEmail: state.setEmail,
    setForm: state.setForm,
    setApiError: state.setApiError,
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async () => {
    if (!email) {
      setIsError(true)
      return
    }

    if (!emailRegex.test(email)) {
      setIsError(true)
      return
    }

    setForm('share')
    setApiError('')
    setIsError(false)
  }

  return (
    <FormWrapper
      isDisabled={currentForm !== 'email'}
      buttonText='Я оставил'
      number={1}
      title='Оставь актаульный email'
      onSubmit={handleSubmit}>
      <div className='w-full h-16'>
        <input
          value={email}
          onChange={handleChange}
          disabled={currentForm !== 'email'}
          type='email'
          autoFocus
          placeholder='Ввести email'
          className={`w-full bg-[#051237] focus:outline-none text-white rounded-md py-[0.6vw] px-[0.8vw] border-[1px] ${
            apiError ? 'border-red-500' : 'border-[#62FF82]'
          }  `}
        />
        {isError && <div className='opacity-50 text-white text-[0.6vw] mt-1'>Неверный формат почты</div>}
        {apiError && <ErrorText>{apiError}</ErrorText>}
      </div>
    </FormWrapper>
  )
}

export default EmailForm
