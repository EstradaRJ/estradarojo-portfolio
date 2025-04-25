import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation easing function

    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="font-display italic">
      <div className="m-4 gap-4 grid sm:grid-cols-1 rows-2" >
        <div className="min-h-[100px] align-items-center flex justify-center items-center">
          <div>
            <h1 id="AboutMe" className="text-4xl font-bold h-auto px-auto">
              About me
            </h1>
          </div>
        </div>
        <div className="min-h-[100px] pb-10">
          <p className="text-red-700 font-light p-0 text-center md:text-xl md:px-8 lg:px-40 lg:text-xl" data-aos="fade-up">
            “I am a Software Development and Management Engineer with experience in databases, web development, and data analysis. I work with MySQL, C#, and ASP.NET in Visual Studio Code, as well as tools like Power BI, Qlik Sense, and Excel. I am proactive, self-taught, and capable of leading high-performance teams. With over a year as an IT teacher, I have developed academic, design, and personal projects, always focused on optimization and process improvement. “
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;