import React, { useState } from 'react'
import { useFormStore } from '@/store/formStore'
import FormWrapper from './FormWrapper'

const emailRegex =
  /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

const EmailForm = () => {
  const [isError, setIsError] = useState(false)
  const { email, setEmail, setForm, currentForm } = useFormStore((state) => ({
    email: state.email,
    setEmail: state.setEmail,
    setForm: state.setForm,
    currentForm: state.currentForm,
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    if (!email) {
      setIsError(true)
      return
    }

    if (!emailRegex.test(email)) {
      setIsError(true)
      return
    } else {
      setForm('share')
    }

    setIsError(false)
  }

  return (
    <FormWrapper
      isDisabled={currentForm !== 'email'}
      buttonText='Я оставил'
      number={1}
      title='Оставь актаульный email'
      onClick={handleSubmit}>
      <div className='w-full h-16'>
        <input
          value={email}
          onChange={handleChange}
          disabled={currentForm !== 'email'}
          type='email'
          autoFocus
          placeholder='Ввести email'
          className='w-full bg-[#051237] focus:outline-none text-white border-[1px] border-[#62FF82] rounded-md py-[0.6vw] px-[0.8vw]'
        />
        {isError && <div className='opacity-50 text-white text-[0.6vw] mt-1'>Неверный формат почты</div>}
      </div>
    </FormWrapper>
  )
}

export default EmailForm
