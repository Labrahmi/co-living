import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import * as Icons from '@/icons/hugeicons'
import * as myIcons from '@/assets/collection/collection'
import '@/App.css'
// import heroImage_2 from '@/assets/3616813.jpeg'
import stayWithUs from '@/assets/8727599.png'
import unsplash from '@/assets/elena-rabkina-eVVzwsNhNf4-unsplash.jpeg'
import { Separator } from "@/components/ui/separator"


function Convenient() {
    return (
        <>
            <div className='grid items-center gap-8 lg:grid-cols-2 w-full'>
                <div className='flex lg:justify-end'>
                    <img src={unsplash} alt="stayWithUs" className='md:h-[36rem] object-cover rounded-2xl' />
                </div>
                <div className='text-justify'>
                    <h1 className='font-semibold text-4xl'>Why stay with us</h1>
                    <div className='flex py-2'></div>
                    <div className='flex flex-col items-start py-1'>
                        <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>1. Bills included <span className='rounded-full cursor-default bg-red-100 px-2.5 py-1 text-xs font-medium text-red-800'>Affordable</span></h2>
                        <p className='font-light px-2 text-zinc-800 text-left'>Affordable rent without having to compromise on quality. Utilities, Wi-Fi, and cleaning costs are included in one price.</p>
                    </div>
                    <div className='flex flex-col items-start py-1'>
                        <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>2. Move-in-ready <span className='rounded-full cursor-default bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800'>Convenient</span></h2>
                        <p className='font-light px-2 text-zinc-800 text-left'>Don't move around with heavy furniture. All coliving spaces are fully furnished for comfort and convenience.</p>
                    </div>
                    <div className='flex flex-col items-start py-1'>
                        <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>3. Monthly stays <span className='rounded-full cursor-default bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800'>Flexible</span></h2>
                        <p className='font-light px-2 text-zinc-800 text-left'>Choose the convenience and flexibility of monthly stays - our short leases make it easy to relocate quickly if your job demands it.</p>
                    </div>
                    <div className='flex flex-col items-start py-1'>
                        <h2 className='text-2xl w-fit px-2 flex items-center rounded-2xl mt-4 gap-2'>4. Built-in community <span className='rounded-full cursor-default bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-800'>Social</span></h2>
                        <p className='font-light px-2 text-zinc-800 text-left'>Join a built-in community that is supportive and welcoming - Sharing with others helps you find meaning, belonging and acceptance in life.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Convenient;