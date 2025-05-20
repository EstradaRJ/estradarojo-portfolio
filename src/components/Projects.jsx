import { t } from 'i18next'
import React from 'react'

function Projects({ translations }) {
    return (
        <div>
            <div className='bg-red-50 font-display '>
                <div className='min-h-[100px]  align-items-center flex justify-center items-center'>
                    <div>
                        <h1 id='Projects' className='text-4xl font-bold h-auto px-auto'>{translations.projectsTitle}</h1>
                    </div>
                </div>

                {/* Graphic design projects */}
                <div className='w-5/6 mx-auto'>
                    <div className='text-2xl font-bold min-h-[100px] align-items-center flex items-center  justify-start border-b-2 border-red-600'>
                        {translations.graphicDesign}
                    </div>
                </div>


                {/* Graphic design cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg sm:justify-end">
                            <img className="w-full" src="images/StudyWatch.jpg" alt={translations.studyWatchTitle} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.studyWatchTitle}</div>
                                <p className="text-black text-base">
                                    {translations.studyWatchDescription}</p>                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
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
                                <span className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/zsoFcKPxjDcYUuqGoNStpZ/ORBIK?node-id=0-1&t=S09bZgSZa9BNZjpe-1'>{translations.seeProject}</a>
                                </span>
                                
                            </div>
                        </div>
                    </div>

                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full max-h-60" src=" images/JobGuy.jpg" alt="Job Guy Design" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Job Guy</div>
                                <p className="text-black text-base">
                                    {translations.jobguyDescription}                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/qeE9dIYksw8MnQonEX9IvA/JobGuy-Mockups-1er-Periodo?node-id=0-1&t=c98GvsYxm0wHUvU4-1'>{translations.seeProject}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/UXUI.jpg" alt="ORBIK Website" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Wireframes, Mockups</div>
                                <p className="text-black text-base">
                                    {translations.uxuiDescription}                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/r36zbaKP251CRp7PktQI7x/UX-and-UI?node-id=0-1&p=f&t=U11eQkIOkI9C2YGD-0'>{translations.seeProject}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/Portfolio.png" alt="ORBIK Website" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.portfolioTitle}</div>
                                <p className="text-black text-base">
                                    {translations.portfolioDescription}                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/HUhhTgbcydlrli6oyoJWxp/Portfolio?t=B1QYa9AvKqYZfEs2-0'>{translations.seeProject}</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/Apple.png" alt="Apple Infographic" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.appleTitle}</div>
                                <p className="text-black text-base">
                                    {translations.appleDescription}                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    <a href='https://www.figma.com/design/FbY2FqyCwvwvSaw0YPQvDe/Apple-Inc?node-id=0-1&p=f&t=Ahn6juOwmMkKVXhM-0'>{translations.seeProject}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Data analysis projects */}

                <div className='w-5/6 mx-auto '>
                    <div className='text-2xl font-bold min-h-[100px] align-items-center flex items-center  justify-start border-b-2 border-red-600'>
                        {translations.dataAnalysis}
                    </div>
                </div>

                {/* Data analysis cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/QlikSense.jpg" alt="Sales Sumary" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.salesSummaryTitle}</div>
                                <p className="text-black text-base">
                                    {translations.salesSummaryDescription}                                </p>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href='https://drive.google.com/file/d/1zUEgpfKkDTSf3SnJwwrwHFxL8DPGkqvZ/view?usp=drive_link' className="inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">{translations.seeProject}</a>
                            </div>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg sm:justify-end">
                            <img className="w-full" src=" images/PowerBI.jpg" alt="HHRR Sumary" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.hrrrSummaryTitle}</div>
                                <p className="text-black text-base">
                                    {translations.hrrrSummaryDescription}                                </p>
                            </div>
                            <button className="px-6 pt-4 pb-2">
                                <a href="https://drive.google.com/file/d/1RtoSUt2n-G6F3749mrSG6eZt5RMqVxZc/view" class="inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">{translations.seeProject}</a>
                            </button>
                        </div>
                    </div>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full max-h-70" src=" images/Certificate.jpg" alt="Cisco Certificate" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.certificateTitle}</div>
                                <p className="text-black text-base">
                                    {translations.certificateDescription}                                </p>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href='https://drive.google.com/file/d/1zUEgpfKkDTSf3SnJwwrwHFxL8DPGkqvZ/view?usp=drive_link' className="inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">{translations.seeProject}</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Software development projects */}

                <div className='w-5/6 mx-auto'>
                    <div className='text-2xl font-bold min-h-[100px] align-items-center flex items-center  justify-start border-b-2 border-red-600'>
                        {translations.softwareDevelopment}
                    </div>
                </div>

                {/* Software development cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-25 py-12'>
                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg sm:justify-end">
                            <img className="w-full" src=" images/GymReact.jpg" alt="Gym Website" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.gymWebsiteTitle}</div>
                                <p className="text-black text-base">
                                    {translations.gymWebsiteDescription}                                </p>
                            </div>
                            <button className="px-6 pt-4 pb-2">
                                <a href="https://github.com/EstradaRJ/gymwebsite" className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2">{translations.seeProject}</a>
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
                                <a href='https://github.com/EstradaRJ/Agropecuando' className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">{translations.seeProject}</a>
                            </div>
                        </div>
                    </div>

                    <div className='transition duration-500 hover:scale-105 align-items-center flex justify-center'>
                        <div className="max-w-md rounded-2xl bg-white overflow-hidden shadow-lg">
                            <img className="w-full" src=" images/Portfolio.jpg" alt="Digital portfolio" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{translations.portfolioTitle}</div>
                                <p className="text-black text-base">
                                    {translations.portfolioDescription}                                </p>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href='https://github.com/EstradaRJ/Agropecuando' className="cursor-pointer inline-block bg-gray-300 rounded-2xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">{translations.seeProject}</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects