import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/image.png';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    gsap.to('.navbar', {
      opacity: 0,
      y: -50,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.work',
        start: 'top 90%',
        end: 'top 50%',
        scrub: true,
      },
    });

    gsap.to('.navbar', {
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.work',
        start: 'top 90%',
        end: 'top 50%',
        scrub: true,
        toggleActions: 'play none reverse none',
      },
    });
    gsap.to('.navbar', {
      opacity: 0,
      y: -50,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.work',
        start: 'top 90%',
        end: 'top 50%',
        scrub: true,
      },
    });

    gsap.to('.navbar', {
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.work',
        start: 'top 90%',
        end: 'top 50%',
        scrub: true,
        toggleActions: 'play none reverse none',
      },
    });
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', 
        block: 'nearest', 
      });
    }
  };

  return (
    <nav className="w-full">
      <div className="logo flex flex-col items-center justify-center">
        <img src={logo} alt="" height={200} width={200} className="p-2 mb-4" />
        <div className="fixed top-32 flex gap-4 items-center justify-center p-3 outline outline-gray-200 bg-white rounded-2xl max-w-full sm:max-w-4xl h-10">
          <a
            href="#"
            className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg"
            onClick={() => handleScrollTo('home')}
          >
            Home
          </a>
          <a
            href="#"
            className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg"
            onClick={() => handleScrollTo('gallery')}
          >
            Gallery
          </a>
          {/* <a
            href="#"
            className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg"
            onClick={() => handleScrollTo('clients')}
          >
            Clients
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
