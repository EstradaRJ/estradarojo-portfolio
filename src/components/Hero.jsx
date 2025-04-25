import React from 'react'
import Typewriter from 'typewriter-effect';

function Hero() {
    return (
        <div className='font-display'>
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 border-b-2 border-red-700">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2 className="text-red-700 text-4xl font-bold leading-tight tracking-tight">
                            Software Developer
                            <span className="text-black"> Engineer / </span>
                            <br />

                            <span className="">
                                Data Analyst{' '}
                                <span className=" text-black inline-block">
                                    <Typewriter
                                        options={{
                                            strings: ['Trainee', 'Enthusiast', 'Fan'],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                        }}
                                    />
                                </span>
                            </span>
                        </h2>

                        <p className="text-red-700 max-w-md mt-3 sm:text-lg md:mt-5 md:text-xl">
                            Software Development and Management Engineer, <span classNameName='text-black'> currently exploring the amazing world of</span> Data Analysis.</p>
                        <div className="mt-5 flex md:mt-8">
                            <div>
                                <a
                                    href="mailto:jonathanestrada02@hotmail.com"
                                    className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-2xl hover:bg-red-600 focus:outline-none md:py-4 md:text-lg"
                                >
                                    Message me
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded  md:p-8">
                        <div className="rounded-lg bg-white text-black w-full">
                            <img src="images/SelfPicture.jpg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero