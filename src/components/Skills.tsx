

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: 'C++', color: '#61DAFB' },
  { name: 'Java', color: '#3178C6' },
  { name: 'Python', color: '#339933' },
  { name: 'Flask', color: '#F7DF1E' },
  { name: 'HTML5', color: '#06B6D4' },
  { name: 'CSS3', color: '#339933' },
  { name: 'JavaScript', color: '#3776AB' },
  { name: 'TypeScript', color: '#06B6D4' },
  { name: 'Node.js', color: '#E34F26' },
  { name: 'Express.js', color: '#1572B6' },
  { name: 'React', color: '#E10098' },
  { name: 'Tailwind', color: '#47A248' },
  { name: 'Bootstrap', color: '#2496ED' },
  { name: 'Material UI', color: '#F05032' },
  { name: 'Redux', color: '#FF9900' },
  { name: 'MySQL', color: '#764ABC' },
  { name: 'MongoDB', color: '#06B6D4' },
  { name: 'Firebase', color: '#339933' },
  { name: 'GitHub', color: '#F05032' },
  { name: 'Docker', color: '#FF9900' },
  { name: 'AWS', color: '#764ABC' }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centralBubbleRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
    
      gsap.set(bubbleRefs.current, { 
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0
      });

   
      gsap.to(centralBubbleRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

 
      gsap.to(centralBubbleRef.current, {
        filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCentralBubbleHover = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const radius = 300; 
    const totalSkills = skills.length;
    const angleStep = (2 * Math.PI) / totalSkills; 

    bubbleRefs.current.forEach((bubble, index) => {
      if (!bubble) return;

    
      const angle = angleStep * index; 
      const x = Math.cos(angle) * radius; 
      const y = Math.sin(angle) * radius; 

      
      gsap.to(bubble, {
        x,
        y,
        opacity: 1,
        scale: 1, 
        duration: 0.8,
        ease: "elastic.out(1, 0.7)",
        delay: index * 0.03, 
      });
    });

  
    gsap.to(centralBubbleRef.current, {
      scale: 1,
      filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))",
      duration: 0.5,
    });
  };

  const handleCentralBubbleLeave = () => {
    if (!isAnimating.current) return;

    gsap.to(bubbleRefs.current, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "back.in(1.7)",
      stagger: {
        from: "random",
        amount: 0.3
      },
      onComplete: () => {
        isAnimating.current = false;
      }
    });

    gsap.to(centralBubbleRef.current, {
      scale: 1,
      filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
      duration: 0.5
    });
  };

  return (
    <section id="skills" className="py-20 bg-[#030014] relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-30 top-0 -left-64" />
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl opacity-30 bottom-0 -right-64" />

      <div className="relative z-10 mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Technical Skills
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Hover over the central bubble to explore my technical expertise
        </p>
      </div>

      <div 
        ref={containerRef} 
        className="relative h-[700px] flex items-center justify-center"
      >
      
        {skills.map((skill, index) => (
  <div
  key={index}
  ref={el => bubbleRefs.current[index] = el}
  className="absolute flex items-center justify-center w-32 h-10 text-sm font-medium text-white bg-opacity-20"
  style={{
    backgroundColor: `${skill.color}15`,
   
    borderColor: `${skill.color}`,
        borderWidth: '0.2px', 
        borderStyle: 'solid', 
    color: skill.color,
    filter: `drop-shadow(0 0 10px ${skill.color}40)`,
    borderRadius: '35px' 
  }}
>
  {skill.name}
</div>

        ))}

      
        <div
          ref={centralBubbleRef}
          className="relative flex items-center justify-center w-40 h-40 text-white border rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-sm border-white/20"
          onMouseEnter={handleCentralBubbleHover}
          onMouseLeave={handleCentralBubbleLeave}
        >
          <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Explore Skills
          </span>
        </div>
      </div>
    </section>
  );
}
