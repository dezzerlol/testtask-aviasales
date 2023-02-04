import { useFormStore } from '@/store/formStore'
import EmailForm from '../Forms/EmailForm'
import ShareForm from '../Forms/ShareForm'
import Button from '../ui/Button'
import Tab from './Tab'
import { shallow } from 'zustand/shallow'

const Tabs = () => {
  const { currentTab, reset } = useFormStore(
    (state) => ({
      currentTab: state.currentTab,
      reset: state.reset,
    }),
    shallow
  )

  switch (currentTab) {
    case 'form':
      return (
        <Tab
          title='Все круто! Теперь'
          gradientTitle='выигрывай путешествие'
          mainText=' Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и поделись с друзьями'>
          <div className='flex gap-[2.2vw] z-[999]'>
            <EmailForm />
            <ShareForm />
          </div>
        </Tab>
      )
    case 'finish':
      return (
        <Tab
          title='Класс! теперь ты'
          gradientTitle='Участвуешь в конкурсе'
          mainText='Ты прошел все наши карты, но ты всегда можешь вызвать inDriver по-настоящему, для этого переходи по ссылке!'>
          <div className='max-w-[20vw]'>
            <Button onClick={reset}>Пройти игру заново</Button>
          </div>
        </Tab>
      )
    default:
      return null
  }
}

export default Tabs
