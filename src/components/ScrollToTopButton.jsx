import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 100; // Adjust this value as needed

    const handleScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-red-600 border-2 border-white text-white cursor-pointer transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } sm:bottom-3 sm:right-3 sm:p-2`}
      aria-label="Back to top"
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;