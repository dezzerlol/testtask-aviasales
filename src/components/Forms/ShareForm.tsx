import { SHARELINKS } from '@/consts/shareLinks'
import { Socials, useFormStore } from '@/store/formStore'
import React, { useState } from 'react'
import { shallow } from 'zustand/shallow'
import ErrorText from './ErrorText'
import FormWrapper from './FormWrapper'

const ShareForm = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { isShared, currentForm, sharedSocials, setIsShared, handleSubmit } = useFormStore(
    (state) => ({
      isShared: state.isShared,
      sharedSocials: state.sharedSocials,
      currentForm: state.currentForm,
      setIsShared: state.setIsShared,
      handleSubmit: state.handleSubmit,
    }),
    shallow
  )

  const handleClickSocial = (url: string, value: Socials) => {
    if (sharedSocials.includes(value)) return

    setIsShared(value)
    setIsError(false)
    window.open(url, '_blank')?.focus()
  }

  const onSubmit = async () => {
    if (!isShared) {
      setIsError(true)
      return
    }

    setIsLoading(true)
    await handleSubmit()
    setIsLoading(false)
  }

  return (
    <FormWrapper
      isDisabled={currentForm !== 'share'}
      buttonText='Я поделился'
      number={2}
      isLoading={isLoading}
      title='Поделись с друзьями'
      onSubmit={onSubmit}>
      <div className='w-full h-16'>
        <div className='w-full justify-between flex mt-1'>
          {SHARELINKS.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleClickSocial(item.link, item.value)}
                type='button'
                disabled={currentForm !== 'share'}
                className={`w-[2vw] h-[2vw] flex items-center justify-center rounded-full bg-gradient-to-br ${
                  sharedSocials.includes(item.value) ? 'bg-gray-600 cursor-default' : item.bgcolor
                }`}>
                {item.icon}
              </button>
            </div>
          ))}
        </div>
        {isError && <ErrorText>Надо все же поделиться</ErrorText>}
      </div>
    </FormWrapper>
  )
}

export default React.memo(ShareForm)
