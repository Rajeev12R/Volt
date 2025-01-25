import React, { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      loop: true,
    });

    return () => Fancybox.destroy();
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1675789203977-70070dae0799",
    "https://images.unsplash.com/photo-1674985594089-eab270e843c5",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
    "https://images.unsplash.com/photo-1675789203977-70070dae0799",
    "https://images.unsplash.com/photo-1674985594089-eab270e843c5",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
    "https://images.unsplash.com/photo-1674985594089-eab270e843c5",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
    "https://images.unsplash.com/photo-1675789203977-70070dae0799",
    "https://images.unsplash.com/photo-1674985594089-eab270e843c5",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
  ];

  return (
    <div className="gallery work mt-10 mb-32 mx-auto w-full max-w-[1400px] px-4" id="gallery">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">SUNNY SIDE UP</h1>
      </div>

      {/* Images Grid */}
      <div className="grid gap-4 p-4 sm:gap-6 md:gap-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] sm:auto-rows-[350px] lg:auto-rows-[450px]">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={images[0]}
              alt="Gallery Image 0"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[1]}
                alt="Gallery Image 1"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[2]}
                alt="Gallery Image 2"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={images[3]}
              alt="Gallery Image 3"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] sm:auto-rows-[350px] lg:auto-rows-[450px]">
          <div className="flex flex-col gap-4">
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[4]}
                alt="Gallery Image 4"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[5]}
                alt="Gallery Image 5"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={images[6]}
              alt="Gallery Image 6"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[7]}
                alt="Gallery Image 7"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[8]}
                alt="Gallery Image 8"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] sm:auto-rows-[350px] lg:auto-rows-[500px]">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={images[9]}
              alt="Gallery Image 9"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={images[10]}
              alt="Gallery Image 10"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={images[11]}
              alt="Gallery Image 11"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
