import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import * as Icons from '@/icons/hugeicons'
import * as myIcons from '@/assets/collection/collection'
import '@/App.css'
// import heroImage_2 from '@/assets/3616813.jpeg'
import stayWithUs from '@/assets/8727599.png'
import unsplash from '@/assets/elena-rabkina-eVVzwsNhNf4-unsplash.jpeg'
import { Separator } from "@/components/ui/separator"


function Hero() {

    const menmenue = useRef<HTMLDivElement>(null);

    return (
        <div className='flex items-center flex-col lg:flex-row gap-4 bg-white relative lg:p-12 p-2 py-6 border lg:rounded-xl rounded-md lg:mt-64'>
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
                    <div ref={menmenue} className='absolute top-10 left-0 my-4 bg-white p-4 py-6 rounded-xl border  text-sm text-left w-full flex lg:flex-row flex-col items-start gap-2 hidden z-10'>
                        <div onClick={() => {
                            menmenue.current?.classList.add('hidden');
                        }} className='absolute top-0 right-0 w-4 h-4  m-2 flex justify-center items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                <div className='flex lg:flex-row flex-col gap-2'>
                    <button className='border hover:border-red-100 p-2 rounded text-nowrap text-sm flex justify-center items-center gap-2 hover:text-red-500 group'>
                        <div>Continue with Google</div>
                        <Icons.GoogleIcon className='w-4 h-4 group-hover:text-red-500' />
                    </button>
                    <button className='border hover:border-blue-100 p-2 rounded text-nowrap text-sm flex justify-center items-center gap-2 hover:text-blue-500 group'>
                        <div>Continue with Facebook</div>
                        <Icons.Facebook02Icon className='w-4 h-4 group-hover:text-blue-500' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;