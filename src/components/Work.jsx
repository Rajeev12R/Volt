import React from 'react';
import { images } from '../assets'; // Import your images

const Work = () => {
  return (
    <div className="work my-10 mx-auto w-full max-w-[1400px] px-4">
      <div className="flex justify-center items-center">
      <h2 className="text-center text-4xl font-bold my-8 tracking-wide text-stone-600">
        Our Work 
      </h2>
      <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
      </div>

      {/* Mixed Layouts */}
      <div className="gallery flex flex-col gap-2 p-6">
        {/* Row 1: Flex Row */}
        <div className="flex flex-row gap-3">
          <div className="flex-1 h-[300px] overflow-hidden">
            <img
              src={images[0]}
              alt="Gallery Image 0"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="h-[150px] overflow-hidden">
              <img
                src={images[1]}
                alt="Gallery Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[150px] overflow-hidden">
              <img
                src={images[2]}
                alt="Gallery Image 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 h-[300px] overflow-hidden">
            <img
              src={images[3]}
              alt="Gallery Image 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Row 2: Flex Row */}
        <div className="flex flex-row gap-3">
          <div className="flex flex-col flex-2 gap-3">
            <div className="h-[200px] overflow-hidden">
              <img
                src={images[4]}
                alt="Gallery Image 4"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[200px] overflow-hidden">
              <img
                src={images[5]}
                alt="Gallery Image 5"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 h-[400px] overflow-hidden">
            <img
              src={images[6]}
              alt="Gallery Image 6"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="h-[200px] overflow-hidden">
              <img
                src={images[7]}
                alt="Gallery Image 7"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[200px] overflow-hidden">
              <img
                src={images[8]}
                alt="Gallery Image 8"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Flex Row */}
        <div className="flex flex-row gap-3">
          <div className="flex-1 h-[500px] overflow-hidden">
            <img
              src={images[9]}
              alt="Gallery Image 9"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 h-[500px] overflow-hidden">
            <img
              src={images[10]}
              alt="Gallery Image 10"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 h-[500px] overflow-hidden">
            <img
              src={images[11]}
              alt="Gallery Image 11"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
