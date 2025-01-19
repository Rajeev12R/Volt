import React, { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '.bin/components/Gallery.css';

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
  ];
  const Limages = [
    "https://images.unsplash.com/photo-1675789203977-70070dae0799",
    "https://images.unsplash.com/photo-1674985594089-eab270e843c5",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
    "https://images.unsplash.com/photo-1667093060577-02f07eb01585",
  ];

  return (
    <div className="gallery">
      {/* Text Section */}
      <div className="flex text-container">
        <div className="text-inner ml-2">
          <h1 className="text-6xl sm:text-8xl leading-none -mt-2">SUNNY</h1>
          <h1 className="text-7xl sm:text-9xl ml-5 leading-none -mt-2">SIDE</h1>
        </div>
        <div className="flex items-center justify-center max-h-fit max-w-full text-container">
          <h1 className="text-[15rem] text-center">UP</h1>
        </div>
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className={`image-container ${index % 2 === 0 ? "portrait" : "landscape"}`}
        >
          <a href={image} data-fancybox="gallery">
            <img
              alt={`Gallery image ${index}`}
              className="object-cover"
              src={image}
            />
          </a>
        </div>
      ))}
      {Limages.map((image, index) => (
        <div
          key={index}
          className={`image-container ${index % 1 === 0 ? "landscape" : "portrait"}`}
        >
          <a href={image} data-fancybox="gallery">
            <img
              alt={`Gallery image ${index}`}
              className="object-cover"
              src={image}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
