import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Sparkles, Cpu, Globe, Shield } from 'lucide-react';
import apiSecurityImage from "../assets/images/dash.png";
import realestate from "../assets/images/real.png";
import etp from "../assets/images/employee.png";
import skillwise from "../assets/images/skillwise.png";
import sra from "../assets/images/sra.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Api Security Dashboard",
    description: "API Security Dashboard is a comprehensive security solution designed to protect and manage API infrastructures. We provide real-time analytics, vulnerability assessments, and security enforcement to safeguard your APIs from potential threats.",
    // image: "https://images.unsplash.com/photo-1686191128892-3b37813f0e6e?auto=format&fit=crop&q=80&w=800",
    image: apiSecurityImage,
    tech: ["Python", "Flask", "React", "JavaScript","MySQL", "Material UI", "AWS-EC2", "RDS", "Auto Scaling"] ,
    // links: { demo: "#", github: "#" },
    links: { demo: "http://13.232.235.203/", github: "https://github.com/manish92596/Flipkart-Grid--Api-Security-Dashboard" },
    // icon: <Sparkles className="w-6 h-6 text-purple-400" />
  },
  {
    title: "SkillWise  E-Learning platform",
    description: "Skillwise is an innovative e-learning platform designed to bridge the gap between education and skill application. It offers a wide range of courses tailored to both beginners and professionals, aiming to enhance their knowledge and skills in various domains.",
    image: skillwise,
    tech: ["React", "Node.js", "Express.js", "JavaScript", "Bootstrap", "MySQL"],
    links: {github: "https://github.com/manish92596/SkillWise_E-Learning-Platform" },
    // icon: <Cpu className="w-6 h-6 text-blue-400" />
  },
  
  {
    title: "Real Estate Management System",
    description: "A real estate application is a platform that enables users to effortlessly search for and explore properties available for sale or rent. The application offers essential features that make the property search process seamless, including property search functionality, detailed property information, and the ability to contact the listing agent.",
    image: realestate,
    tech: ["MySQL", "Java", "Java Swing", "AWT", "JDBC connector"],
    links: { github: "https://github.com/manish92596/Real-Estate-Management-System" },
    // icon: <Cpu className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Employee Turnover Prediction",
    description: "This application uses a machine learning model to predict whether an employee will leave or stay based on features like satisfaction level, last evaluation score, and more. The model is built using the K-Nearest Neighbors (KNN) algorithm, with hyperparameter tuning via GridSearchCV for optimal accuracy.",
    image: etp,
    tech: ["Machine Learning","Python", "Pandas", "NumPy", "scikit-learn"," Matplotlib", "Seaborn", "pickle", "Docker", "AWS (ECS/EC2)", "Flask" , "TypeScript"],
    links: { demo: "http://65.0.107.0/", github: "https://github.com/manish92596/Employee-Turnover-Prediction" },
    // icon: <Globe className="w-6 h-6 text-green-400" />
  },
  {
    title: "Smart Resume Analyzer",
    description: "Smart Resume Analyzer is a web app that ranks resumes based on their relevance to a job description. It extracts key details like job titles, skills, and experience, calculates a relevance score, and generates a downloadable PDF report to help recruiters streamline the hiring process.",
    image: sra,
    tech: ["NLP","Streamlit", "Python", "SpaCy", "Sentence-Transformers", "PyPDF2"],
    links: {github: "https://github.com/manish92596/Smart-Resume-Analyzer?tab=readme-ov-file" },
    // icon: <Shield className="w-6 h-6 text-red-400" />
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".project-header", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      });

      projectRefs.current.forEach((project, index) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[#030014]">
      <div className="relative max-w-6xl px-4 mx-auto">
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-30 top-0 -left-64"
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl opacity-30 bottom-0 -right-64"
        />
        
        <div className="relative z-10 mb-16 text-center project-header">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Featured Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Bringing technology and innovation together to create meaningful and engaging projects
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="overflow-hidden transition-all duration-300 transform border group bg-white/5 backdrop-blur-sm rounded-xl hover:scale-102 border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {/* <div className="absolute z-20 p-2 border rounded-lg top-4 left-4 bg-white/5 backdrop-blur-sm border-white/10">
                  {project.icon}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm text-gray-300 border rounded-full bg-white/5 border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                {project.links.demo && (
                    <a
                      href={project.links.demo}
                       target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 space-x-2 text-blue-400 transition-all duration-300 border rounded-full bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/50 backdrop-blur-sm hover:text-blue-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {/* <a
                    href={project.links.demo}
                    className="flex items-center px-4 py-2 space-x-2 text-blue-400 transition-all duration-300 border rounded-full bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/50 backdrop-blur-sm hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a> */}
                  <a
                  
                    href={project.links.github}
                     target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 text-blue-400 transition-all duration-300 border rounded-full bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/50 backdrop-blur-sm hover:text-blue-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}













