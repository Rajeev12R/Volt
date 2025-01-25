import React, { useEffect } from "react";
import { gsap } from "gsap";
import video from "../assets/file_example_MP4_480_1_5MG.mp4"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".subheading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".cta-button",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      }
    );

    gsap.fromTo(
      ".illustration",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 pt-14 pb-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 -z-10 opacity-90"></div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1
            className="heading text-4xl md:text-6xl p-2 md:p-3 font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent"
          >
            We shape the future of your brand.
          </h1>

          <p
            className="subheading text-lg md:text-2xl md:max-w-[80%] text-gray-500 mt-5 leading-relaxed"
          >
            At Volt Studio, we don’t just market; we craft experiences that resonate and inspire. Join us in creating
            something extraordinary—something that makes an unforgettable impact.
          </p>

          <div className="mt-6">
            <button
              className="cta-button px-6 py-3 text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Discover More
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="illustration flex-1 w-64 h-80">
        <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-2xl h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
