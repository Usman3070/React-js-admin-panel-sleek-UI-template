import React from 'react'

const Footer = () => {
  return (
    <div class="w-full min-h-screen flex items-center justify-center bg-black">
            <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
                <div class="w-full text-7xl font-bold">
                    <h1 class="w-full md:w-2/3">How can we help you. get
                        in touch</h1>
                </div>
                <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p class="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                    <div class="w-44 pt-6 md:pt-0">
                        <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex mt-24 mb-12 flex-row justify-between">
                        <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</a>
                        <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Services</a>
                        <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Why us</a>
                        <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                    </div>
                    <hr class="border-gray-600"/>
                    <p class="w-full text-center my-12 text-gray-600">Copyright © 2024 Data Invetigo</p>
                </div>
            </div>
        </div>
  )
}

export default Footer