import { useFormStore } from '@/store/formStore'
import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { SlSocialVkontakte } from 'react-icons/sl'
import FormWrapper from './FormWrapper'

const SHARELINKS = [
  {
    id: 3,
    icon: <FaFacebookF size='1.2vw' color='white' />,
    link: 'https://www.facebook.com/',
    bgcolor: 'from-[#70ADFF] via-[#1977F3] to-[#064BA6]',
  },
  {
    id: 4,
    icon: <SlSocialVkontakte size='1.2vw' color='white' />,
    link: 'https://vk.com/',
    bgcolor: 'from-[#60AAFF] via-[#2787F5] to-[#005CC6]',
  },
  {
    id: 2,
    icon: <IoLogoTwitter size='1.2vw' color='white' />,
    link: 'https://twitter.com/',
    bgcolor: 'from-[#73CAFF] via-[#1DA1F2] to-[#007CC8]',
  },
  {
    id: 1,
    icon: <IoLogoInstagram size='1.2vw' color='white' />,
    link: 'https://www.instagram.com/',
    bgcolor: 'from-[#D82D7E] via-[#DF406C] to-[#FA8F21]',
  },
]

const ShareForm = () => {
  const [isError, setIsError] = useState(false)

  const { isShared, currentForm, setIsShared, setTab } = useFormStore((state) => ({
    isShared: state.isShared,
    setForm: state.setForm,
    currentForm: state.currentForm,
    setIsShared: state.setIsShared,
    setTab: state.setTab,
  }))

  const handleClickSocial = (url: string) => {
    setIsShared()
    setIsError(false)
    window.open(url, '_blank')?.focus()
  }

  const handleSubmit = () => {
    if (!isShared) {
      setIsError(true)
      return
    }

    setTab('finish')
  }

  return (
    <FormWrapper
      isDisabled={currentForm !== 'share'}
      buttonText='Я поделился'
      number={2}
      title='Поделись с друзьями'
      onClick={handleSubmit}>
      <div className='w-full h-16'>
        <div className='w-full justify-between flex mt-1'>
          {SHARELINKS.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleClickSocial(item.link)}
                className={`w-[2vw] h-[2vw] flex items-center justify-center rounded-full bg-gradient-to-br ${item.bgcolor}`}>
                {item.icon}
              </button>
            </div>
          ))}
        </div>
        {isError && <div className='text-red-500 text-[0.6vw] mt-2'>Надо все же поделиться</div>}
      </div>
    </FormWrapper>
  )
}

export default ShareForm
