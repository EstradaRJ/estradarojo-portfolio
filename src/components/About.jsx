import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTopButton from './ScrollToTopButton';

function About({ translations }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing function
    });
  }, []);

  return (
    <div className="font-display italic">
      <div className="m-4 gap-4 grid sm:grid-cols-1 rows-2">
        <div className="min-h-[100px] align-items-center flex justify-center items-center">
          <div>
            <h1 id="AboutMe" className="text-4xl font-bold h-auto px-auto">
              {translations.aboutMeTitle}
            </h1>
          </div>
        </div>
        <div className="min-h-[100px] pb-10">
          <p
            className="text-red-600 font-light p-0 text-center md:text-xl md:px-8 lg:px-40 lg:text-xl"
            data-aos="fade-up"
          >
            "{translations.aboutMeText}"
          </p>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default About;