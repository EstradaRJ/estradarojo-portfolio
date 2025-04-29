import { t } from 'i18next'
import React from 'react'

function Projects({ translations }) {
    return (
        <div>



            <div className='bg-red-50 font-display'>
                <div className='min-h-[100px]  align-items-center flex justify-center items-center'>
                    <div>
                        <h1 id='Projects' className='text-4xl font-bold h-auto px-auto'>{translations.projectsTitle}</h1>
                    </div>
                </div>

                <div className='w-5/6 mx-auto'>
                    <div className='text-2xl font-bold min-h-[100px] align-items-center flex items-center  justify-start'>
                        {translations.graphicDesign}
                    </div>
                </div>

                <div className='grid grid-cols-1 rows-2 gap-8 lg:grid-cols-2 lg:gap-0'>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg sm:justify-end">
                            <img className="w-full" src="images/StudyWatch.jpg" alt={translations.studyWatchTitle} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.studyWatchTitle}</div>
                                <p className="text-black text-base">
                                    {translations.studyWatchDescription}</p>                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-red-600 text-white rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/Dn1q5XlbCCJSXQWNNO96Nh/Study-Watch?node-id=2-21&t=2bQdFi7XcAWDGTHL-1'>{translations.seeProject}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/OrbikDesign.jpg" alt="ORBIK Website" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.orbikTitle}</div>
                                <p className="text-black text-base">
                                    {translations.orbikDescription}                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-red-600 text-white rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/zsoFcKPxjDcYUuqGoNStpZ/ORBIK?node-id=0-1&t=S09bZgSZa9BNZjpe-1'>{translations.seeProject}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-5/6 mx-auto'>
                    <div className='text-2xl font-bold min-h-[100px] align-items-center flex items-center  ljustify-start'>
                        {translations.dataAnalysis}
                    </div>
                </div>

                <div className='grid grid-cols-1 rows-2 gap-8 lg:grid-cols-2 lg:gap-0'>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg sm:justify-end">
                            <img className="w-full" src=" images/PowerBI.jpg" alt="HHRR Sumary" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.hrrrSummaryTitle}</div>
                                <p className="text-black text-base">
                                    {translations.hrrrSummaryDescription}                                </p>
                            </div>
                            <button className="px-6 pt-4 pb-2">
                                <a href="https://drive.google.com/file/d/17UB4OwK_iWhmYe4e3KBTXF2tru5AwzQ0/view?usp=drive_link" class="inline-block bg-red-600 text-white rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">{translations.seeProject}</a>
                            </button>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/QlikSense.jpg" alt="Sales Sumary" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.salesSummaryTitle}</div>
                                <p className="text-black text-base">
                                    {translations.salesSummaryDescription}                                </p>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href='https://drive.google.com/file/d/1zUEgpfKkDTSf3SnJwwrwHFxL8DPGkqvZ/view?usp=drive_link' className="inline-block bg-red-600 text-white rounded-2xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">{translations.seeProject}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-5/6 mx-auto'>
                    <div className='text-2xl font-bold min-h-[100px] align-items-center flex items-center  justify-start'>
                        {translations.softwareDevelopment}
                    </div>
                </div>

                <div className='grid grid-cols-1 rows-2 gap-8 lg:grid-cols-2 lg:gap-0 pb-25'>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg sm:justify-end">
                            <img className="w-full" src=" images/GymReact.jpg" alt="Gym Website" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.gymWebsiteTitle}</div>
                                <p className="text-black text-base">
                                    {translations.gymWebsiteDescription}                                </p>
                            </div>
                            <button className="px-6 pt-4 pb-2">
                                <a href="https://github.com/EstradaRJ/gymwebsite" className="cursor-pointer inline-block bg-red-600 text-white rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">{translations.seeProject}</a>
                            </button>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/Agropecuando.jpg" alt="Agricultural and livestock blog" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.agriculturalBlogTitle}</div>
                                <p className="text-black text-base">
                                    {translations.agriculturalBlogDescription}                                </p>
                                
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href='https://github.com/EstradaRJ/Agropecuando' className="cursor-pointer inline-block bg-red-600 text-white rounded-2xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">{translations.seeProject}</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects