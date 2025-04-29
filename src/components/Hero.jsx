import React from 'react';
import Typewriter from 'typewriter-effect';

function Hero({ translations }) {
    return (
        <div className="font-display">
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 border-b-2 border-red-600">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2 className="text-red-600 text-xl sm:text-4xl font-bold leading-tight tracking-tight">
                            {translations.heroTitle1}
                            <span className="text-black"> {translations.heroTitle2} </span>
                            <br />
                            <span>
                                {translations.heroTitle3}{' '}
                                <span className="text-black inline-block">
                                    <Typewriter
                                        options={{
                                            strings: translations.heroTypewriter,
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                        }}
                                    />
                                </span>
                            </span>
                        </h2>

                        <p className="text-red-600 max-w-md mt-3 sm:text-lg md:mt-5 md:text-xl">
                            {translations.heroDescription1}{' '}
                            <span className="text-black">{translations.heroDescription2}</span>{' '}
                            <span className="text-red-600 font-bold">{translations.heroDescription3}</span>
                        </p>
                        <div className="mt-5 flex md:mt-8">
                            <div>
                                <a
                                    href="mailto:jonathanestrada02@hotmail.com"
                                    className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-2xl hover:bg-red-900 focus:outline-none md:py-4 md:text-lg"
                                >
                                    {translations.heroButton}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded md:p-8">
                        <div className="rounded-lg bg-white text-black w-full">
                            <img
                                src="images/SelfPicture.jpg"
                                className="transition duration-500 hover:scale-105"
                                alt="Self Portrait"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;