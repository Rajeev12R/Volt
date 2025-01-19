import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import rajeev from "../assets/IMG_20250110_160220.jpg";

const Team = () => {
  const teamMembersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".team-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      teamMembersRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="work my-10 mx-auto w-full max-w-[1400px] px-4">
      <div className="flex justify-center items-center">
        <h2 className="team-heading text-center text-3xl font-bold my-2 tracking-wide text-stone-600">
          Our Team
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
      <div className="flex justify-center gap-10 mt-14 mb-6">
        <div
          ref={(el) => (teamMembersRef.current[0] = el)}
          className="team-member flex flex-col items-center w-36 h-36 justify-center p-3"
        >
          <img
            src={rajeev}
            alt="Team Member 1"
            className="object-cover w-full h-full cursor-pointer rounded-full"
          />
          <div className="p-2 flex flex-col gap-1">
            <p className="text-md text-gray-700 text-center">Rajeev Ranjan</p>
            <p className="text-md text-gray-700 text-center">Web Developer</p>
          </div>
        </div>

        <div
          ref={(el) => (teamMembersRef.current[1] = el)}
          className="team-member flex flex-col items-center w-36 h-36 justify-center p-3"
        >
          <img
            src={rajeev}
            alt="Team Member 2"
            className="object-cover w-full h-full cursor-pointer rounded-full"
          />
          <div className="p-2 flex flex-col gap-1">
            <p className="text-md text-gray-700 text-center">Rajeev Ranjan</p>
            <p className="text-md text-gray-700 text-center">Web Developer</p>
          </div>
        </div>

        <div
          ref={(el) => (teamMembersRef.current[2] = el)}
          className="team-member flex flex-col items-center w-36 h-36 justify-center p-3"
        >
          <img
            src={rajeev}
            alt="Team Member 3"
            className="object-cover w-full h-full cursor-pointer rounded-full"
          />
          <div className="p-2 flex flex-col gap-1">
            <p className="text-md text-gray-700 text-center">Rajeev Ranjan</p>
            <p className="text-md text-gray-700 text-center">Web Developer</p>
          </div>
        </div>

        <div
          ref={(el) => (teamMembersRef.current[3] = el)}
          className="team-member flex flex-col items-center w-36 h-36 justify-center p-3"
        >
          <img
            src={rajeev}
            alt="Team Member 4"
            className="object-cover w-full h-full cursor-pointer rounded-full"
          />
          <div className="p-2 flex flex-col gap-1">
            <p className="text-md text-gray-700 text-center">Rajeev Ranjan</p>
            <p className="text-md text-gray-700 text-center">Web Developer</p>
          </div>
        </div>

        <div
          ref={(el) => (teamMembersRef.current[4] = el)}
          className="team-member flex flex-col items-center w-36 h-36 justify-center p-3"
        >
          <img
            src={rajeev}
            alt="Team Member 5"
            className="object-cover w-full h-full cursor-pointer rounded-full"
          />
          <div className="p-2 flex flex-col gap-1">
            <p className="text-md text-gray-700 text-center">Rajeev Ranjan</p>
            <p className="text-md text-gray-700 text-center">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
