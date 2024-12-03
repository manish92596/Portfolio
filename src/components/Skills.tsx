import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Git', color: '#F05032' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Redux', color: '#764ABC' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Next.js', color: '#339933' }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centralBubbleRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(bubbleRefs.current, { 
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0
      });

      // Floating animation for central bubble
      gsap.to(centralBubbleRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Pulsating glow animation
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

    const radius = 250; // Increased radius for better spacing
    const totalSkills = skills.length;
    const angleStep = (2 * Math.PI) / totalSkills;

    bubbleRefs.current.forEach((bubble, index) => {
      if (!bubble) return;

      // Calculate position on the circle
      const angle = angleStep * index - Math.PI / 2; // Start from top (-Math.PI/2)
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      gsap.to(bubble, {
        x,
        y,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.7)",
        delay: index * 0.03
      });
    });

    gsap.to(centralBubbleRef.current, {
      scale: 1.2,
      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))',
      duration: 0.5
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
        {/* Skill bubbles */}
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={el => bubbleRefs.current[index] = el}
            className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          >
            <div 
              className="relative transform -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full backdrop-blur-sm whitespace-nowrap hover:scale-110"
                style={{ 
                  backgroundColor: `${skill.color}15`,
                  borderColor: `${skill.color}30`,
                  color: skill.color,
                  filter: `drop-shadow(0 0 10px ${skill.color}40)`
                }}
              >
                {skill.name}
              </div>
            </div>
          </div>
        ))}

        {/* Central bubble */}
        <div
          ref={centralBubbleRef}
          className="relative cursor-none transform-gpu"
          onMouseEnter={handleCentralBubbleHover}
          onMouseLeave={handleCentralBubbleLeave}
        >
          <div className="flex items-center justify-center w-40 h-40 text-white transition-all duration-300 border rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-sm border-white/20 hover:border-blue-500/50 transform-gpu">
            <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Explore Skills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}