import { useEffect, useRef } from 'react'
import Header from './components/Header'
import * as Icons from './icons/hugeicons'
import * as myIcons from './assets/collection/collection'
import './App.css'
// import heroImage_2 from './assets/3616813.jpeg'
import stayWithUs from './assets/8727599.png'
import unsplash from './assets/elena-rabkina-eVVzwsNhNf4-unsplash.jpeg'
import { Separator } from "@/components/ui/separator"

function App() {
  
  const menmenue = useRef<HTMLDivElement>(null);

  return (
    <div className='selection:bg-black selection:text-white'>
      <Header />
      <main id='root-main' className='text-justify h-[90vh] flex flex-col items-center font-montserrat'>
        {/* ----------- main ----------- */}
        <div className='flex items-center flex-col lg:flex-row gap-4 bg-white relative lg:p-12 p-8 border lg:rounded-xl rounded-md lg:mt-64'>
          <div className='card-one lg:w-1/6 flex flex-col gap-2'>
            <div className='w-full flex justify-start'><myIcons._1 /></div>
          </div>
          {/*  */} <div className='h-32 hidden lg:block px-2'><Separator orientation='vertical' className='' /></div><div className='w-64 py-4 lg:hidden block'><Separator orientation='horizontal' className='' /></div>
          <div className='card-one px-4 flex flex-col gap-2'>
            <h1 className='font-light lg:text-3xl text-2xl cursor-default uppercase text-nowrap flex items-center gap-2'>Find your next <span className='font-light text-4xl'><Icons.Home05Icon /></span></h1>
            <h2 className='font-light lg:text-base text-sm text-start'>Find flexible, convenient, and affordable coliving homes with friends included.</h2>
            <div className='rounded-full flex justify-center items-center px-2 border relative '>
              <input
                onFocus={(e) => {
                  setTimeout(() => {
                    menmenue.current?.classList.remove('hidden');
                  }, 150);
                }}
                className='bg-transparent w-full rounded-full lg:p-3 lg:px-2 p-2 outline-none select-none ' placeholder='Where are you going' type="text" />
              <a href='/' className='lg:p-1 hover:scale-105 outline-none'><Icons.Search01Icon className='flex' /></a>
              <a href='/' className='p-2 outline-none text-nowrap rounded text-xs hover:underline '>Nearby</a>
              <div ref={menmenue} className='absolute top-10 left-0 my-4 bg-white p-4 py-6 rounded-xl border  text-sm text-left w-full flex items-start gap-2 hidden'>
                <div onClick={() => {
                  menmenue.current?.classList.add('hidden');
                }} className='absolute top-0 right-0 w-4 h-4  m-2 flex justify-center items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className='w-1/3'>
                  <h1 className='font-semibold text-base uppercase'>Casablanca</h1>
                  <div className='flex py-1.5'></div>
                  <ul className='px-1 text-zinc-800 space-y-0.5 flex items-start flex-col'>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Sidi Maârouf</a>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Casanearshore</a>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Bouskoura</a>
                  </ul>
                </div>
                {/*  */} <div className='h-16 self-center hidden lg:block px-2'><Separator orientation='vertical' className='' /></div><div className='w-64 py-4 lg:hidden block'><Separator orientation='horizontal' className='' /></div>
                <div className='w-1/3'>
                  <h1 className='font-semibold text-base uppercase'>Rabat</h1>
                  <div className='flex py-1.5'></div>
                  <ul className='px-1 text-zinc-800 space-y-0.5 flex items-start flex-col'>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Agdal</a>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Souissi</a>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Hay Riad</a>
                  </ul>
                </div>
                {/*  */} <div className='h-16 self-center hidden lg:block px-2'><Separator orientation='vertical' className='' /></div><div className='w-64 py-4 lg:hidden block'><Separator orientation='horizontal' className='' /></div>
                <div className='w-1/3'>
                  <h1 className='font-semibold text-base uppercase'>Marrakech</h1>
                  <div className='flex py-1.5'></div>
                  <ul className='px-1 text-zinc-800 space-y-0.5 flex items-start flex-col'>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Djemaa El Fna</a>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Mellah</a>
                    <a target='_blank' href='/casa/location/1' className='hover:underline'>Gueliz</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*  */} <div className='h-32 hidden lg:block px-2'><Separator orientation='vertical' className='' /></div><div className='w-64 py-4 lg:hidden block'><Separator orientation='horizontal' className='' /></div>
          <div className='card-one px-4 flex flex-col gap-2 text-center'>
            <div className='font-semibold text-xl'>Or</div>
            <p className='font-light'>Login and search for your future roommate</p>
            <div className='py-3'><Separator className='w-1/3 m-auto' /></div>
            <div className='flex gap-2'>
              <button className='border hover:border-red-100 p-2 rounded text-nowrap text-sm flex justify-center items-center gap-2 hover:text-red-500 group'>
                <div>Login with Google</div>
                <Icons.GoogleIcon className='w-4 h-4 group-hover:text-red-500' />
              </button>
              <button className='border hover:border-blue-100 p-2 rounded text-nowrap text-sm flex justify-center items-center gap-2 hover:text-blue-500 group'>
                <div>Login with Facebook</div>
                <Icons.Facebook02Icon className='w-4 h-4 group-hover:text-blue-500' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex py-20'></div>
        <div className='text-center w-full relative'>
          <svg className="top-0 left-0 z-10 w-full flex-none stroke-gray-100 object-cover h-[24rem]" aria-hidden="true">
            <defs>
              <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                <path d="M0.5 200V0.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke="none"></path>
            </svg>
            <rect className="" width="100%" height="100%" stroke="none" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"></rect>
          </svg>

          <div className='absolute top-0 w-full text-center'>
            <div className='py-4'></div>
            <h1 className='font-semibold lg:text-2xl text-lg z-50'>The simple and safe way to find your next co-living home in Morocco 🇲🇦</h1>
            <h1 className='font-thin lg:text-xl text-base z-50'>Study Abroad in Style: Co-Living Made Easy for Students!</h1>
            <div className='flex py-6'></div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>1,200</h1>
                <div>Communities</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>28,000</h1>
                <div>Rooms</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>60</h1>
                <div>Countries</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>300</h1>
                <div>Destinations</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>75,000</h1>
                <div>Members</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>25,000</h1>
                <div>Reviews</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>90,000</h1>
                <div>Monthly visitors</div>
              </div>
              <div className='p-4 rounded bg-white bg-opacity-20'>
                <h1 className='font-semibold text-xl'>Excellent!</h1>
                <div>Rating</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='flex py-28 items-start'></div>
          {/*  */}
          <div className='grid items-center gap-8 lg:grid-cols-2 w-full'>
            <div className='flex lg:justify-end'>
              <img src={unsplash} alt="stayWithUs" className='md:h-[36rem] object-cover rounded-2xl' />
            </div>
            <div className='text-justify'>
              <h1 className='font-semibold text-4xl'>Why stay with us</h1>
              <div className='flex py-2'></div>
              {/*  */}
              <div className='flex flex-col items-start py-1'>
                <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>1. Bills included <span className='rounded-full cursor-default bg-red-100 px-2.5 py-1 text-xs font-medium text-red-800'>Affordable</span></h2>
                <p className='font-light px-2 text-zinc-800 text-left'>Affordable rent without having to compromise on quality. Utilities, Wi-Fi, and cleaning costs are included in one price.</p>
              </div>
              {/*  */}
              <div className='flex flex-col items-start py-1'>
                <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>2. Move-in-ready <span className='rounded-full cursor-default bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800'>Convenient</span></h2>
                <p className='font-light px-2 text-zinc-800 text-left'>Don't move around with heavy furniture. All coliving spaces are fully furnished for comfort and convenience.</p>
              </div>
              {/*  */}
              <div className='flex flex-col items-start py-1'>
                <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>3. Monthly stays <span className='rounded-full cursor-default bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800'>Flexible</span></h2>
                <p className='font-light px-2 text-zinc-800 text-left'>Choose the convenience and flexibility of monthly stays - our short leases make it easy to relocate quickly if your job demands it.</p>
              </div>
              {/*  */}
              <div className='flex flex-col items-start py-1'>
                <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>4. Built-in community <span className='rounded-full cursor-default bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-800'>Social</span></h2>
                <p className='font-light px-2 text-zinc-800 text-left'>Join a built-in community that is supportive and welcoming - Sharing with others helps you find meaning, belonging and acceptance in life.</p>
              </div>
              {/*  */}
            </div>
          </div>
          <div className='flex py-28 items-start'></div>
          <div className='text-left'>
            <h3 className="text-4xl font-semibold">
              What is included
            </h3>
            <p className="mt-2 mb-6 block text-base font-normal text-gray-500 sm:text-xl md:mt-3 lg:mb-8">
              Save up to 40% compared to living in a studio
            </p>
            <div className="flex w-full items-stretch text-center">
              <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
              </div>
              <div aria-hidden="true" className="my-auto w-1/4 pr-4 pl-4">
                <p className="items-center py-6 text-sm text-gray-900">
                  <span className='font-bold'>Co-Living</span>.ma
                </p>
              </div>
              <div aria-hidden="true" className="my-auto w-1/4 pr-4 pl-4">
                <div className="py-6">
                  <p className="text-sm font-bold text-gray-900">Studio</p>
                </div>
              </div>
              <div aria-hidden="true" className="my-auto w-1/4 pl-4">
                <div className="py-6">
                  <p className="text-sm font-bold text-gray-900">Flat share</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                <div className="w-1/4 pr-4"></div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full lg:rounded-lg lg:bg-gray-100 lg:opacity-25 lg:shadow-md"></div>
                </div>
              </div>
              <table className="relative w-full">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Fully furnished</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Cleaning</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">WiFi</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Streaming services</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Kitchen essentials</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Work space</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Community &amp; networking</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Laundry services *</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Pool *</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Gym *</th>
                    <td className="relative w-1/4 px-4 py-0 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                    <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                      <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                      </svg> </td>
                  </tr>
                </tbody>
              </table>
              <div className="pointer-events-none absolute inset-0 hidden items-stretch lg:flex" aria-hidden="true">
                <div className="w-1/4 pr-4"></div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              * Amenities may vary depending on the coliving space
            </div>
          </div>
        </div>
        {/* ----------- main ----------- */}
        <div className='flex py-96 invisible'> .</div>
      </main>
    </div>
  )
}

export default App
