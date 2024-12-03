import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectImageProps {
  image: string;
  projectUrl?: string;
  company: string;
}

export default function ProjectImage({ image, projectUrl, company }: ProjectImageProps) {
  return (
    <>
      <img 
        src={image} 
        alt={`${company} project`} 
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100"
        >
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <ExternalLink className="w-4 h-4 text-white" />
            <span className="text-white">Source Code</span>
          </div>
        </a>
      )}
    </>
  );
}