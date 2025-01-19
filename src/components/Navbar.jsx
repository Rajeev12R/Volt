import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/image.png';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Hide navbar just before the Work component appears
    gsap.to('.navbar', {
      opacity: 0,
      y: -50, // Move up slightly
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.work', // Work component
        start: 'top 90%', // When Work component is about to appear
        end: 'top 50%', // When Work is halfway in view
        scrub: true, // Smooth animation on scroll
      },
    });

    // Show navbar when scrolling back up
    gsap.to('.navbar', {
      opacity: 1,
      y: 0, // Reset to original position
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.work', // Work component
        start: 'top 90%', // Reverse animation point
        end: 'top 50%', // Reverse animation point
        scrub: true,
        toggleActions: 'play none reverse none',
      },
    });
  }, []);

  return (
    <nav className='w-full'>
      <div className="logo flex flex-col items-center justify-center">
        <img src={logo} alt="" height={200} width={200} className='p-2 mb-4' />
      <div class="fixed top-32 flex gap-4 items-center justify-center p-3 outline outline-gray-200 bg-white rounded-2xl max-w-full sm:max-w-4xl h-10">
        <a href="/" class="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">Home</a>
        <a href="#" class="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">About</a>
        <a href="#" class="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">Client</a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
