import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import * as Icons from '@/icons/hugeicons'
import * as myIcons from '@/assets/collection/collection'
import stayWithUs from '@/assets/8727599.png'
import unsplash from '@/assets/elena-rabkina-eVVzwsNhNf4-unsplash.jpeg'
import { Separator } from "@/components/ui/separator"
import '@/App.css'


function Numbers() {
    return (
        <>
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
        </>
    );
}

export default Numbers;