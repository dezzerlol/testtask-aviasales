import PurpleBlur from '../assets/purple-blur.png'
import Rocket from '../assets/Rocket.svg'

const RocketLogo = () => {
  return (
    <div className='relative w-[30vw] h-[30vw]'>
      <div className='w-full h-full flex justify-end items-center'>
        <img src={Rocket} className='w-full h-full absolute z-10' />
      </div>
      <div className='w-[80vw] h-[70vw] fixed -top-[10vw] -right-[20vw]'>
        <img src={PurpleBlur} className='-z-10  bg-contain' />
      </div>
    </div>
  )
}

export default RocketLogo
