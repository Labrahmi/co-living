import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import * as Icons from '@/icons/hugeicons'
import * as myIcons from '@/assets/collection/collection'
import stayWithUs from '@/assets/8727599.png'
import unsplash from '@/assets/elena-rabkina-eVVzwsNhNf4-unsplash.jpeg'
import { Separator } from "@/components/ui/separator"
import '@/App.css'

import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Convenient from './components/Convenient'
import Table from './components/Table'


function App() {
  return (
    <div className='selection:bg-black selection:text-white'>
      <Header />
      <main id='root-main' className='text-justify h-[90vh] flex flex-col items-center font-montserrat'>
        <Hero />
        <div className='flex py-20'></div>
        <div className='text-center w-full relative'>
          <Numbers />
          <div className='flex py-28 items-start'></div>
          <Convenient />
          <div className='flex py-28 items-start'></div>
          <Table />
        </div>
        <div className='flex py-96 invisible'> .</div>
      </main>
    </div>
  )
}

export default App
