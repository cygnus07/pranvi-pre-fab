import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  year: number;
  type: string;
  icon?: React.ReactNode;
}

const ProjectCard = ({ 
  project,
  className = '',
  style 
}: {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group ${className}`}
      style={style}
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
          {project.type}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {project.icon && (
            <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
              {project.icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-800" />
            <span>{project.location}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-blue-800" />
            <span>{project.year}</span>
          </div>
        </div>
        
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-600 font-medium group"
        >
          <span>View Project Details</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;