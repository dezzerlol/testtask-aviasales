import { useFormStore } from '../store/formStore'
import EmailForm from './Forms/EmailForm'
import FormWrapper from './Forms/FormWrapper'
import ShareForm from './Forms/ShareForm'
import Button from './ui/Button'

type TabProps = {
  title: string
  gradientTitle: string
  mainText: string
  children: React.ReactNode
}

const Tab = ({ title, gradientTitle, mainText, children }: TabProps) => {
  return (
    <div className='flex-1 flex flex-col gap-8'>
      <div>
        <h2 className='text-[2.6vw] font-bold text-white uppercase'>{title}</h2>
        <h2 className='text-[2.6vw] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-500'>
          {gradientTitle}
        </h2>
      </div>
      <div className='max-w-[30vw]'>
        <h3 className='text-white font-bold text-[1.3vw]'>{mainText}</h3>
      </div>
      {children}
    </div>
  )
}

const Tabs = () => {
  const { currentTab, reset } = useFormStore((state) => ({
    currentTab: state.currentTab,
    reset: state.reset,
  }))

  switch (currentTab) {
    case 'form':
      return (
        <Tab
          title='Все круто! Теперь'
          gradientTitle='выигрывай путешествие'
          mainText=' Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и поделись с друзьями'>
          <div className='flex gap-[2.2vw]'>
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
