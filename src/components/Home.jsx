import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from "react-router-dom"
import video from "../assets/file_example_MP4_480_1_5MG.mp4"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      // Subheading animation
      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      })

      // Button animation
      gsap.from(".cta-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 1,
      })

      // Scroll-triggered animations
      gsap.to(".content-wrapper", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(".video-overlay", {
        opacity: 0.8,
        scrollTrigger: {
          trigger: ".home-container",
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="home-container w-screen mt-6 relative overflow-hidden bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 sm:px-2 md:px-4 lg:px-6 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <h1 ref={headingRef} className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">We are the working unit, for the difference of your </span>{" "}
              <span className="block mt-1 text-red-500 xl:inline">Brand's <span className="text-white xl:inline"> present and </span>FUTURE.</span>
            </h1>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  onClick={() => navigate("/services")}
                  className="cta-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full">
          <div className="video-overlay absolute inset-0 bg-black opacity-50 z-10"></div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={video}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

