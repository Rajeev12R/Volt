import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Work from '../components/Work';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(".work",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".work",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });

    gsap.fromTo(".footer",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-col justify-center mx-auto px-4">
      <div className="flex flex-col justify-center">
        <h1 className="heading text-center text-3xl md:text-5xl py-2 px-1 mt-14 bg-gradient-to-r from-gray-500 to-zinc-600 bg-clip-text text-transparent">
          <q style={{ wordSpacing: "0.1em" }}> We are the working unit, for the difference of your brand's present and future.</q>
        </h1>
      </div>
      <div className="flex items-center mt-16 justify-center">
        <div className="about flex mt-8 mx-4 text-center text-lg md:text-2xl justify-center max-w-[1000px] items-center">
          <h1 style={{ wordSpacing: "0.1em" }} className="text-stone-600">At Volt Studio, we don’t just market— we create experiences. We’ve had the privilege of working with incredible brands, transforming their ideas into impactful campaigns that resonate. Our approach isn’t just about strategy; it’s about crafting memorable stories that engage, inspire, and convert. Every project we take on is fueled by creativity, innovation, and a deep passion for what we do. Together, we can build something that not only stands out but makes a lasting impression.</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
