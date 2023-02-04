import { useState } from 'react'
import CompanyLogo from './components/CompanyLogo'
import RocketLogo from './components/RocketLogo'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='min-h-screen bg-[#000B23] flex flex-col justify-center px-[8vw]'>
      <CompanyLogo />
      <div className='mt-[5vw] flex flex-col-reverse lg:flex-row items-center justify-around box-border'>
        <Tabs />
        <RocketLogo />
      </div>
    </div>
  )
}

export default App
