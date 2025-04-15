'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiFilter, FiX } from 'react-icons/fi';
import { FaHardHat, FaBuilding, FaHome, FaWarehouse, FaIndustry, FaSchool } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/components/types';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Expanded project data with 6 projects
  const projects: Project[] = [
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
    },
    {
      id: '4',
      title: 'Manufacturing Plant',
      description: 'Heavy-duty industrial facility with 80,000 sqft production area',
      imageUrl: '/images/projects/manufacturing.jpg',
      location: 'Pune, MH',
      year: 2021,
      type: 'Industrial',
      icon: <FaIndustry className="text-yellow-500" />
    },
    {
      id: '5',
      title: 'Educational Campus',
      description: 'Steel-framed school building with earthquake-resistant design',
      imageUrl: '/images/projects/school.jpg',
      location: 'Hyderabad, TS',
      year: 2022,
      type: 'Institutional',
      icon: <FaSchool className="text-yellow-500" />
    },
    {
      id: '6',
      title: 'Mixed-Use Development',
      description: 'Integrated commercial and residential steel structure',
      imageUrl: '/images/projects/mixed-use.jpg',
      location: 'Bengaluru, KA',
      year: 2023,
      type: 'Commercial',
      icon: <FaBuilding className="text-yellow-500" />
    }
  ];

  const projectTypes = ['All', ...new Set(projects.map(p => p.type))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/projects-hero.jpg"
            alt="Our Projects"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/50 to-blue-900/30" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Showcasing our steel construction excellence across India
          </p>
        </div>
      </section>

      {/* Filter Controls - Enhanced */}
      <section className="py-8 bg-gray-50 sticky top-0 z-20 shadow-sm animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              {activeFilter === 'All' ? 'All Projects' : activeFilter + ' Projects'}
              <span className="text-gray-500 text-lg ml-2">
                ({filteredProjects.length})
              </span>
            </h2>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-2">
              {projectTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === type
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:bg-gray-100"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <FiFilter className="text-blue-800" />
              <span className="font-medium">Filter</span>
            </button>
          </div>

          {/* Mobile Filters Dropdown */}
          {showMobileFilters && (
            <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg animate-in">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Filter Projects</h3>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {projectTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setActiveFilter(type);
                      setShowMobileFilters(false);
                    }}
                    className={`px-3 py-2 rounded-full text-sm text-center transition-colors ${
                      activeFilter === type
                        ? 'bg-blue-800 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid - Now showing 6 projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  className="animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <div className="max-w-md mx-auto">
                <FaHardHat className="mx-auto text-5xl text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  No projects found in this category
                </h3>
                <button
                  onClick={() => setActiveFilter('All')}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2 mx-auto"
                >
                  View all projects
                  <FiX className="transform rotate-90" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Updated numbers to reflect expanded portfolio */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Construction Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '300+', label: 'Projects Completed' },  // Increased from 250+
              { value: '1.5M+', label: 'Square Feet Built' }, // Increased from 1M+
              { value: '98%', label: 'Client Satisfaction' },
              { value: '18+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-blue-800/30 rounded-lg backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;