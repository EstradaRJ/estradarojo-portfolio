import React from 'react'

const pdfUrl = '/images/EstradaROJO_CV.pdf';

function Experience() {
    const downloadFile = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'EstradaROJO_CV.pdf'); // Set the file name for download
        document.body.appendChild(aTag);
        aTag.click(); // Trigger the download
        document.body.removeChild(aTag); // Clean up
    };



    return (
        <div className='bg-red-50 font-display'>
            <div className='px-4 sm:px-20 md:px-10 md:text-xl lg:px-40 lg:text-xl'>
                <div>
                    <div className='min-h-[100px]  align-items-center flex justify-center items-center'>
                        <div>
                            <h1 className='text-4xl text-red-600 font-bold h-auto px-auto'>Experience</h1>
                        </div>
                    </div>
                </div>


                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical data-theme-light">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="red"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
                            <div className="text-lg font-black"> 2017 - 2021 Agricultural sector Manager</div>
                            <p className="font-mono italic">Family Business</p>
                            Managed irrigation maintenance and task assignments
                            for 15 subordinates, boosting production by 20%
                            while ensuring quality and proper inventory allocation.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="red"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10" data-aos="fade-left">
                            <div className="text-lg font-black">2022 Website Designer </div>
                            <p className="font-mono italic">National Institute of Educational Robotics (INIRE) </p>

                            Conceptual proposal and graphic design for a
                            company website based on its requirements.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="red"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
                            <div className="text-lg font-black"> 2023 Web Depeloper</div>
                            <p className="font-mono italic">BeeHive Systems</p>

                            Development of a web module for the control and
                            monitoring of residential developments, based on
                            the company's proprietary software.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="red"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10" data-aos="fade-left">
                            <div className="text-lg font-black">2023 - 2024 IT Teacher </div>
                            <p className="font-mono italic">Technological University of Nayarit</p>

                            Developed and implemented study plans for TSU and
                            Engineering students in databases, cloud computing,
                            and software development, achieving a 96% teacher
                            evaluation satisfaction rate.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="red"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className=" timeline-start mb-10 md:text-end" data-aos="fade-right">
                            <div className="animate-bounce text-lg font-black">Data Analyst / Software Developer</div>
                            <p className="font-mono italic">Today - Indefinitely</p>
                            Currently looking for a job where I can learn as much as possible, contributing my best to the company.
                        </div>
                    </li>
                </ul>

            </div>

            <div className='m-6 gap-4 grid grid-cols-1 rows-4 lg:grid-cols-2 lg:rows-2 min-h-[100px] pb-20'>

                <div className='order-1 lg:order-1 text-4xl font-bold min-h-[100px]  align-items-center flex justify-center items-center'>
                    Tools
                </div>

                <div className='order-3 lg:order-2 text-4xl font-bold min-h-[100px]  align-items-center flex justify-center items-center'>
                    Languages
                </div>
                <div className='order-2 lg:order-4 min-h-[100px]  align-items-center flex justify-center items-center' >
                    <img className='transition duration-500 hover:scale-105 rounded-2xl border-2 border-red-600 p-11' src="images/icons/ImagesTools.png" />
                </div>

                <div className='order-4 lg:order-4 min-h-[100px]  align-items-center flex justify-center items-center' >
                    <img className='transition duration-500 hover:scale-105 rounded-2xl border-2 border-red-600 p-8' src="images/icons/ImagesLanguages.png" />
                </div>

            </div>

            <div className='pb-12 bg-white min-h-screen grid-cols-1 grid-rows-2'>

                <div className='text-4xl font-bold min-h-[100px]  align-items-center flex justify-center items-center'>
                    <a id='CV'>Curriculum Vitae</a>

                </div>

                <div className='py-10 grid grid-cols-1 rows-2 gap-6 sm:grid-cols-2 sm:rows-1 bg-white align-items-center justify-center items-center text-lg'>
                    <div className='animate-bounce order-1 sm:order-1 flex justify-center sm:justify-end'>
                        <button onClick={() => { downloadFile(pdfUrl) }} type="button" class="cursor-pointer rounded-2xl text-white bg-red-600 hover:bg-red-800 focus:ring-4 font-medium px-12 py-2.5 ">
                            Download
                        </button>
                    </div>
                    <div className='order-2 sm:order-2 flex justify-center sm:justify-start'>
                        <button type="button" class="rounded-2xl text-white bg-red-600 hover:bg-red-800 focus:ring-4 font-medium px-10 py-2.5">
                            <a href="mailto:jonathanestrada02@hotmail.com">
                                Contact Me
                            </a>
                        </button>
                    </div>
                </div>

                <div className='p-4 md:p-10 lg:px-35 align-items-center flex justify-center items-center'>
                    <img src="images/ImageCV.png" className='rounded-2xl border-2 border-red-600 lg:shadow-[3rem_3rem_0rem_-0.2rem_#dc2626] ' />
                </div>

                

            </div>

        </div>

    )
}

export default Experience