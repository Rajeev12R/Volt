import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, Film, Share2, Search, Palette, PenTool, Code, BarChart, Coffee } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const ServiceCard = ({ title, description, icon: Icon }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const Services = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  const services = [
    {
      title: "Web Development",
      description:
        "Building custom, responsive websites with cutting-edge technologies to deliver seamless user experiences across all devices.",
      icon: Code,
    },
    {
      title: "Video Editing",
      description:
        "Professional video editing services for events, businesses, and content creators, bringing your stories to life with stunning visuals.",
      icon: Film,
    },
    {
      title: "Social Media Management",
      description:
        "Strategic social media management to grow your online presence, engage your audience, and build a strong community around your brand.",
      icon: Share2,
    },
    {
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve your website's visibility, drive organic traffic, and boost your search engine rankings.",
      icon: Search,
    },
    {
      title: "UI / UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces and experiences that delight users and drive engagement.",
      icon: Palette,
    },
    {
      title: "Logo Design",
      description:
        "Custom logo designs that capture your brand's essence and leave a lasting impression on your audience.",
      icon: PenTool,
    },
    {
      title: "Content Strategy",
      description:
        "Developing comprehensive content strategies that align with your business goals and resonate with your target audience.",
      icon: Coffee,
    },
    {
      title: "Digital Marketing",
      description:
        "Full-service digital marketing solutions to help you reach your target audience and achieve your business objectives.",
      icon: Briefcase,
    },
    {
      title: "Analytics & Reporting",
      description:
        "In-depth analytics and reporting to track your digital performance and make data-driven decisions for your business.",
      icon: BarChart,
    },
  ]

  return (
    <div className="services bg-gradient-to-r from-blue-600 to-teal-500 mt-4 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Elevate Your Digital Presence</span>
            <span className="block text-teal-200">with Our Premium Services</span>
          </h2>
          <p className="mt-4 text-xl text-white opacity-75 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital solutions to help your business thrive in the online world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

