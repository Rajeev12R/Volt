import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import rajeev from "../assets/rajeev.jpeg";
import aditi from "../assets/aditi.jpeg";
import sneha from "../assets/IMG_2449.jpg"
import arun from "../assets/arun3.jpeg"
// import defaultImg from "../assets/icon-1633250_1280.png";

const teamMembers = [
  { name: "Arun Changra", role: "CEO & Founder", img: arun },
  { name: "Rajeev Ranjan", role: "Head Developer", img: rajeev },
  { name: "Sneha Tiwari", role: "Content Writer", img: sneha },
  { name: "Aditi Sable", role: "Graphics Designer", img: aditi },
];

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
        stagger: 0.15,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="team my-10 mx-auto w-full max-w-[1400px] px-4">
      <div className="flex justify-center items-center">
        <h2 className="team-heading text-center text-3xl font-bold my-2 tracking-wide text-stone-600">
          Our Team
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-14 mb-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => (teamMembersRef.current[index] = el)}
            className="team-member flex flex-col items-center w-36 h-36 justify-center p-3 mb-6 transition-transform hover:scale-105"
          >
            <img
              src={member.img}
              alt={`${member.name} - ${member.role}`}
              className="object-cover w-full h-full cursor-pointer rounded-full shadow-md"
            />
            <div className="p-2 flex flex-col gap-1">
              <p className="text-md text-gray-700 text-center w-40 font-semibold">
                {member.name}
              </p>
              <p className="text-sm text-gray-500 text-center">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
