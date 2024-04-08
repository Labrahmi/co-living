import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import * as Icons from '@/icons/hugeicons'
import * as myIcons from '@/assets/collection/collection'
import '@/App.css'
// import heroImage_2 from '@/assets/3616813.jpeg'
import stayWithUs from '@/assets/8727599.png'
import unsplash from '@/assets/elena-rabkina-eVVzwsNhNf4-unsplash.jpeg'
import { Separator } from "@/components/ui/separator"


function Table() {
    return (
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
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Cleaning</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">WiFi</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Streaming services</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Kitchen essentials</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Work space</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Community &amp; networking</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Laundry services *</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Pool *</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-bold text-gray-900">Gym *</th>
                            <td className="relative w-1/4 px-4 py-0 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg> </td>
                            <td className="relative w-1/4 py-0 pl-4 pr-4 text-center h-full">
                                <svg className="mx-auto h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
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
    );
}

export default Table