import React from 'react'

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

export default Tab
