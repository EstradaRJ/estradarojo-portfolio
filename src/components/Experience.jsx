import React from 'react'

const pdfUrlen = 'public/cven.pdf';
const pdfUrles = 'public/cves.pdf';


function Experience({ translations, language }) {

    const imgCVPath = language === 'es'
        ? 'images/CVEsp.jpg'
        : 'images/CVEng.jpg';
    const downloadFile = (url, fileName) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName); // Nombre del archivo, que se va a asignar como parametro en el evento onclick
        document.body.appendChild(aTag);
        aTag.click(); // Inicia la descarga
        document.body.removeChild(aTag); // Limpia el DOM
    };

    const downloadFilees = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'EstradaROJO_CV_ES.pdf'); // Nombre del archivo directamente desde la constante
        document.body.appendChild(aTag);
        aTag.click(); // Inicia la descarga
        document.body.removeChild(aTag); // Limpia el DOM
    };


    return (
        <div className='bg-red-50 font-display'>
            <div className='px-4 sm:px-20 md:px-10 md:text-xl lg:px-40 lg:text-xl'>
                <div>
                    <div className='min-h-[100px]  align-items-center flex justify-center items-center'>
                        <div>
                            <h1 className='text-4xl text-red-600 font-bold h-auto px-auto'>{translations.experienceTitle}</h1>
                        </div>
                    </div>
                </div>


                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical data-theme-light">
                    {translations.experienceItems.map((item, index) => (
                        <li key={index}>
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
                            <div
                                className={`timeline-${item.position} mb-10 ${item.position === 'start' ? 'md:text-end' : ''
                                    }`}
                                data-aos={item.animation}
                            >
                                <div className="text-lg font-black">{item.title}</div>
                                <p className="font-mono italic">{item.company}</p>
                                <p>{item.description}</p>
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>

            </div>

            <div className='m-6 gap-4 grid grid-cols-1 rows-4 lg:grid-cols-2 lg:rows-2 min-h-[100px] pb-20'>

                <div className='order-1 lg:order-1 text-4xl font-bold min-h-[100px]  align-items-center flex justify-center items-center'>
                    {translations.toolsTitle}
                </div>

                <div className='order-3 lg:order-2 text-4xl font-bold min-h-[100px]  align-items-center flex justify-center items-center'>
                    {translations.languagesTitle}
                </div>
                <div className='order-2 lg:order-4 min-h-[100px]  align-items-center flex justify-center items-center' >
                    <img className='transition duration-500 hover:scale-105 rounded-2xl border-2 border-red-600 p-11' src="images/icons/ImagesTools.png" />
                </div>

                <div className='order-4 lg:order-4 min-h-[100px]  align-items-center flex justify-center items-center' >
                    <img className='transition duration-500 hover:scale-105 rounded-2xl border-2 border-red-600 p-8' src="images/icons/ImagesLanguages.png" />
                </div>

            </div>

            <div className='px-10 bg-white'>

                <div className='text-4xl font-bold min-h-[100px]  align-items-center flex justify-center items-center'>
                    <a id='CV'>Curriculum Vitae</a>

                </div>

                <div className='grid  gap-6 grid-cols-2 rows-1 bg-white text-xs sm:text-lg'>
                    <div className='order-1 sm:order-1 flex justify-end'>
                        <button onClick={() => { downloadFilees(pdfUrles) }} class="cursor-pointer bg-red-600 hover:bg-red-900 text-white py-2.5 px-5 rounded-2xl inline-flex items-center">
                            <svg class="fill-current w-2 h-3 mr-2 sm:w-4 sm:h-4 sm:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>{translations.downloadButtonen}</span>
                        </button>
                    </div>

                    <div className='order-2 sm:order-2 flex justify-start'>
                        <button onClick={() => { downloadFile(pdfUrlen, 'EstradaROJO_CV_EN.pdf') }} class="cursor-pointer bg-red-600 hover:bg-red-900 text-white py-2.5 px-5 rounded-2xl inline-flex items-center">
                            <svg class="fill-current w-2 h-3 mr-2 sm:w-4 sm:h-4 sm:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>{translations.downloadButtones}</span>
                        </button>
                    </div>


                </div>

                <div className='p-4 md:p-10 lg:px-35 align-items-center flex justify-center items-center'>
                    <img
                        src={imgCVPath}
                        className='rounded-2xl border-2 border-red-600 lg:shadow-[3rem_3rem_0rem_-0.2rem_#dc2626]'
                        alt="Curriculum Vitae"
                    />
                </div>

            </div>

        </div>

    )
}

export default Experience