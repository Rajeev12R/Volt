import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../assets'; // Import the images array from assets.js

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Image gallery animation
    gsap.fromTo(
      '.gallery-image',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.work',
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );
  }, []);

  const getCustomStyles = (index) => {
    // Assign unique styles for each index
    switch (index) {
      case 0:
        return 'w-[400px] h-[364px]'; // Example: Tall portrait
      case 1:
        return 'w-96 h-80'; // Example: Square
      case 2:
        return 'w-96 h-80'; // Example: Custom size
      case 3:
        return 'w-[400px] h-72'; // Example: Wide landscape
      case 4:
        return 'w-[400px] h-[300px]'; // Example: Portrait
      case 5:
        return 'w-96 h-80'; // Example: Custom size
      case 6:
        return 'w-96 h-80'; // Example: Custom size
      case 7:
        return 'w-96 h-80'; // Example: Custom size
      case 8:
        return 'w-96 h-72'; // Example: Custom size
      case 9:
        return 'w-96 h-80'; // Example: Custom size
      case 10:
        return 'w-[20rem] h-96'; // Example: Custom size
      case 11:
        return 'w-[30rem] h-[30rem]'; // Example: Custom size
      case 12:
        return 'w-96 h-96'; // Example: Custom size
      case 13:
        return 'w-96 h-96'; // Example: Custom size
      case 14:
        return 'w-96 h-96'; // Example: Custom size
      default:
        return '<w-80></w-80> h-80'; // Default size for others
    }
  };

  return (
    <div className="work my-10 mx-20 w-full max-w-fit">
      <div className="flex items-center">
        {/* Title or heading can go here if needed */}
      </div>

      {/* Gallery of images arranged with Flexbox */}
      <div className="image-gallery flex justify-center flex-wrap gap-2 mt-4 py-8">
        {images.map((image, index) => {
          const customStyles = getCustomStyles(index); // Get styles for the current index

          return (
            <div
              key={index}
              className={`gallery-image ${customStyles} flex-shrink-0 rounded-lg overflow-hidden m-0 p-0`}
            >
              <img
                src={image}
                alt={`Gallery image ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
