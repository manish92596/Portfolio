import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import ProjectImage from './ProjectImage';
import { ExperienceCardProps } from './types';

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  technologies,
  image,
  projectUrl,
}: ExperienceCardProps) {
  return (
    <div className="relative max-w-4xl p-6 mx-auto transition-all duration-300 border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 group">
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-xl group-hover:opacity-100" />
      
      <div className="relative z-10">
        {image && (
          <div className="relative mb-6 rounded-lg overflow-hidden group h-[320px]">
            <ProjectImage image={image} projectUrl={projectUrl} company={company} />
          </div>
        )}

        <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
        <h4 className="mb-2 text-lg text-blue-400">{company}</h4>
        
        <div className="flex items-center gap-4 mb-4 text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{period}</span>
          </div>
        </div>

        <ul className="mb-4 space-y-2 list-disc list-inside">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-gray-300 border rounded-full bg-white/5 border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}