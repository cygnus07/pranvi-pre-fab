// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { Project } from './types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {project.type}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;