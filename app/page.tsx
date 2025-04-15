"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  FaBuilding, 
  FaHardHat, 
  FaWarehouse, 
  FaArrowRight, 
  FaPhone, 
  FaCalendarCheck, 
  FaCertificate, 
  FaMapMarkerAlt 
} from "react-icons/fa";

import { FaHome,  FaIndustry, FaSchool } from 'react-icons/fa';


export default function Home() {
  // Rotating text animation for hero section
  const words = ["EXCELLENCE", "INNOVATION", "PRECISION", "STRENGTH"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState("fade-in");
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
    
    // Text rotation animation
    const wordInterval = setInterval(() => {
      setAnimationState("fade-out");
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimationState("fade-in");
      }, 500);
    }, 3000);
    
    // Add animation class to elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      clearInterval(wordInterval);
      
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Services data
  const services = [
    {
      title: "Industrial Construction",
      description: "Robust industrial facilities built to withstand time and meet your production needs",
      icon: <FaWarehouse className="text-4xl" />,
      image: "/images/service-industrial.jpg"
    },
    {
      title: "Commercial Buildings",
      description: "Modern commercial spaces designed for efficiency, sustainability, and lasting impression",
      icon: <FaBuilding className="text-4xl" />,
      image: "/images/service-commercial.jpg"
    },
    {
      title: "Custom Steel Solutions",
      description: "Bespoke steel fabrication and engineering for specialized structural requirements",
      icon: <FaHardHat className="text-4xl" />,
      image: "/images/service-steel.jpg"
    },
  ];

  // Core values and company features
  const coreValues = [
    {
      title: "Safety First",
      description: "Zero-compromise safety protocols across all projects",
      icon: <FaHardHat />
    },
    {
      title: "Precision Engineering",
      description: "Meticulously calculated structures for maximum stability",
      icon: <FaCertificate />
    },
    {
      title: "Timely Delivery",
      description: "Projects completed on schedule, every time",
      icon: <FaCalendarCheck />
    },
  ];

  // Project showcase data
  const projects = [
   {
         id: '1',
         title: 'Industrial Warehouse Complex',
         description: '50,000 sqft steel structure warehouse with office spaces',
         imageUrl: '/images/projects/warehouse.jpg',
         location: 'Noida, UP',
         year: 2023,
         type: 'Industrial',
         icon: <FaWarehouse className="text-yellow-500" />
       },
       {
         id: '2',
         title: 'Commercial Office Building',
         description: '8-story prefabricated steel frame office building',
         imageUrl: '/images/projects/office.jpg',
         location: 'Gurugram, HR',
         year: 2022,
         type: 'Commercial',
         icon: <FaBuilding className="text-yellow-500" />
       },
       {
         id: '3',
         title: 'Residential Apartment Complex',
         description: 'Modular steel construction for 100-unit housing project',
         imageUrl: '/images/projects/residential.jpg',
         location: 'Greater Noida, UP',
         year: 2023,
         type: 'Residential',
         icon: <FaHome className="text-yellow-500" />
       }
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section - High Contrast, Clearly Visible */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background image with optimal overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction Site"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Clear gradient overlay that ensures visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/50 to-blue-900/30" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Company badge */}
            <div className="inline-flex items-center gap-2 mb-6 border-l-4 border-yellow-500 pl-3 py-1">
              <span className="text-yellow-400 font-bold tracking-wider">PRANVI CONSTRUCTION</span>
            </div>
            
            {/* Main headline - High contrast for visibility */}
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-white">
              BUILDING THE 
              <br className="hidden md:block" />
              <span className="inline-block mt-2">
                FUTURE WITH{" "}
                <span className={`text-yellow-400 transition-opacity duration-500 ${animationState === "fade-in" ? "opacity-100" : "opacity-0"}`}>
                  {hasMounted ? words[currentWordIndex] : words[0]}
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl">
              Premium steel structures engineered for performance, precision, and longevity. Setting the industry standard since 2004.
            </p>
            
            {/* CTA buttons - High contrast */}
            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-10 py-5 font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group flex items-center gap-3"
              >
                Get a Quote 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/projects"
                className="bg-white text-blue-900 px-10 py-5 font-bold transition-all duration-300 hover:translate-y-[-2px] hover:bg-gray-100"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-200 mb-2 text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-transparent rounded"></div>
        </div>
      </section>

     {/* Services Section - Clean, visible design */}
<section className="py-24 bg-gray-100 relative animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
  {/* Accent stripe */}
  <div className="absolute top-0 left-0 w-full h-2 bg-blue-700" />
  
  <div className="container mx-auto px-6 relative z-10">
    {/* Section header - now centered */}
    <div className="mb-16 text-center">
      <div className="flex justify-center items-center gap-4 mb-4">
        <span className="h-[2px] w-12 bg-blue-700"></span>
        <span className="text-blue-700 uppercase tracking-widest text-sm font-medium">Our Expertise</span>
        <span className="h-[2px] w-12 bg-blue-700"></span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Industry-Leading Services</h2>
    </div>
    
    {/* Services grid - fixed sizing */}
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white shadow-lg rounded-lg overflow-hidden animate-on-scroll opacity-0 transition-all duration-700 flex flex-col h-full" // Ensures equal height
          style={{ transitionDelay: `${(index + 1) * 200}ms` }}
        >
          {/* Image block with fixed aspect ratio */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

          
          {/* Service content - makes each block equal height */}
          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              <div className="mb-4 p-3 bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center text-blue-700">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
            <Link 
              href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
              className="inline-flex items-center text-blue-700 hover:text-blue-600 font-medium group/link mt-auto"
            >
              <span>Learn more</span>
              <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Accent bottom border */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-700 to-yellow-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Company Highlights - Visible design */}
      <section className="py-24 bg-white relative animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: "300ms" }}>
        {/* Faint blueprint background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/blueprint-pattern.svg')] bg-repeat opacity-5" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-16">
            {/* Image column */}
            <div className="lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000" style={{ transitionDelay: "400ms" }}>
              <div className="relative h-full">
                {/* Main image */}
                <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/images/project-showcase.jpg"
                    alt="Completed Project"
                    width={800}
                    height={600}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Stats highlight */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-4xl font-bold text-yellow-400">150+</p>
                        <p className="text-gray-200 text-sm">Projects</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-yellow-400">20+</p>
                        <p className="text-gray-200 text-sm">Years</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-yellow-400">50+</p>
                        <p className="text-gray-200 text-sm">Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-blue-700/30 rounded-lg z-0"></div>
              </div>
            </div>
            
            {/* Content column */}
            <div className="lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 flex flex-col justify-center" style={{ transitionDelay: "500ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-blue-700"></span>
                <span className="text-blue-700 uppercase tracking-widest text-sm font-medium">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Building Excellence Through Precision & Integrity</h2>
              
              <p className="text-gray-600 mb-10 text-lg">
                With two decades of experience in steel construction, we have built our reputation on delivering superior quality structures that stand the test of time. Our approach combines cutting-edge engineering with time-tested craftsmanship.
              </p>
              
              {/* Core values */}
              <div className="space-y-8 mb-12">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-blue-700 hover:text-blue-600 font-bold text-lg group/about"
              >
                <span>Discover Our Story</span>
                <FaArrowRight className="group-hover/about:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Clear visibility */}
      <section className="py-24 bg-gray-100 relative animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: "600ms" }}>
        {/* Accents */}
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-700/30" />
        
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-blue-700"></span>
              <span className="text-blue-700 uppercase tracking-widest text-sm font-medium">Featured Work</span>
              <span className="h-[2px] w-12 bg-blue-700"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Landmark Projects</h2>
            <p className="text-gray-600">
              Explore our portfolio of completed projects showcasing our expertise in industrial, commercial and specialized construction.
            </p>
          </div>
          
          {/* Projects grid - Clearly visible */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative bg-white shadow-lg rounded-lg overflow-hidden animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  {/* Project overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project info - High contrast for visibility */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 text-yellow-400 mb-1">
                    {project.icon}
                    <p>{project.type}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 mb-6">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{project.location}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <span>{project.year}</span>
                  </div>
                  <Link 
                    href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group/link"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          
          {/* View all projects link */}
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-10 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold transition-all duration-300 group rounded shadow-md"
            >
              <span>View All Projects</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - High contrast */}
      <section className="py-24 bg-white relative overflow-hidden animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: "700ms" }}>
        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-blue-700"></span>
              <span className="text-blue-700 uppercase tracking-widest text-sm font-medium">Testimonials</span>
              <span className="h-[2px] w-12 bg-blue-700"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Client Success Stories</h2>
          </div>
          
          {/* Featured testimonial - Clear, visible design */}
          <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 p-10 lg:p-16 relative rounded-lg shadow-lg border border-gray-200">
          {/* Quote mark */}
          <div className="absolute top-8 left-8 text-8xl text-blue-200 font-serif">"</div>

          <div className="relative z-10">
            <p className="text-xl lg:text-2xl mb-8 text-gray-700 italic">
              Pranvi Construction delivered our industrial facility not just on time, but ahead of schedule. Their attention to detail and engineering expertise resulted in a structure that exceeded our expectations in every way. Five years later, we're still impressed with the quality of their work.
            </p>

            <div className="flex items-center gap-4">
              {/* Profile picture or initials fallback */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-700 text-white flex items-center justify-center text-xl font-semibold border-2 border-blue-700">
                MR
                {/* Uncomment below line and remove fallback initials if you have an image */}
                {/* 
                <Image
                  src="/images/client-1.jpg"
                  alt="Client"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                /> 
                */}
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800">Michael Richardson</h4>
                <p className="text-gray-600">Operations Director, Northstar Manufacturing</p>
              </div>
            </div>
          </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-yellow-500"></div>
          </div>
        </div>

        </div>
      </section>

      {/* CTA Section - Bold but visible */}
      <section className="py-24 bg-blue-800 text-white relative overflow-hidden animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: "800ms" }}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-10 lg:mb-0">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
                  Ready to Build Your Vision?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100">
                  Contact us today for a consultation and discover how we can transform your construction needs into reality.
                </p>
              </div>
              
              <div className="lg:w-1/3">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/contact"
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-5 font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg text-center flex items-center justify-center gap-3 rounded"
                  >
                    Get Free Consultation <FaArrowRight />
                  </Link>
                  
                  <Link
                    href="tel:+1234567890"
                    className="bg-white text-blue-800 px-8 py-5 font-bold transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center gap-3 rounded"
                  >
                    <FaPhone /> (123) 456-7890
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}