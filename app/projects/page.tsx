// app/projects/page.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiFilter, FiX } from 'react-icons/fi';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/components/types';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'Industrial Warehouse Complex',
      description: '50,000 sqft steel structure warehouse with office spaces',
      imageUrl: '/images/projects/warehouse.jpg',
      location: 'Noida, UP',
      year: 2023,
      type: 'Industrial'
    },
    {
      id: '2',
      title: 'Commercial Office Building',
      description: '8-story prefabricated steel frame office building',
      imageUrl: '/images/projects/office.jpg',
      location: 'Gurugram, HR',
      year: 2022,
      type: 'Commercial'
    },
    {
      id: '3',
      title: 'Residential Apartment Complex',
      description: 'Modular steel construction for 100-unit housing project',
      imageUrl: '/images/projects/residential.jpg',
      location: 'Greater Noida, UP',
      year: 2023,
      type: 'Residential'
    },
    {
      id: '4',
      title: 'Shopping Mall Structure',
      description: 'Steel skeleton for 200,000 sqft retail space',
      imageUrl: '/images/projects/mall.jpg',
      location: 'Delhi',
      year: 2021,
      type: 'Commercial'
    },
    {
      id: '5',
      title: 'Factory Shed',
      description: 'Prefabricated steel shed for manufacturing unit',
      imageUrl: '/images/projects/factory.jpg',
      location: 'Faridabad, HR',
      year: 2022,
      type: 'Industrial'
    },
    {
      id: '6',
      title: 'Community Center',
      description: 'Multi-purpose steel structure for public use',
      imageUrl: '/images/projects/community.jpg',
      location: 'Ghaziabad, UP',
      year: 2023,
      type: 'Institutional'
    }
  ];

  const projectTypes = ['All', ...new Set(projects.map(p => p.type))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-800 flex items-center">
        <div className="absolute inset-0 bg-blue-900/50 z-10" />
        <Image
          src="/images/projects/projects-hero.jpg"
          alt="Our Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Portfolio
          </h1>
          <p className="text-xl text-white mt-2">
            Showcasing our quality steel construction projects
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 bg-gray-50 sticky top-0 z-20 shadow-sm">
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === type
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <FiFilter />
              <span>Filter</span>
            </button>
          </div>

          {/* Mobile Filters Dropdown */}
          {showMobileFilters && (
            <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Filter Projects</h3>
                <button onClick={() => setShowMobileFilters(false)}>
                  <FiX />
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
                    className={`px-3 py-1 rounded-full text-sm text-center ${
                      activeFilter === type
                        ? 'bg-blue-800 text-white'
                        : 'bg-gray-100 text-gray-700'
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

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">
                No projects found in this category
              </h3>
              <button
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;