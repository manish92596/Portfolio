import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from './data';
import { setupSkillsAnimation } from './animations';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centralBubbleRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      setupSkillsAnimation(bubbleRefs.current, centralBubbleRef.current);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCentralBubbleHover = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const radius = 250;
    const totalSkills = skills.length;
    const angleStep = (2 * Math.PI) / totalSkills;

    bubbleRefs.current.forEach((bubble, index) => {
      if (!bubble) return;

      const angle = angleStep * index - Math.PI / 2;
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

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="px-4 py-2 rounded-full backdrop-blur-sm border text-sm font-medium whitespace-nowrap transition-all duration-300 hover:scale-110"
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

        <div
          ref={centralBubbleRef}
          className="relative cursor-none transform-gpu"
          onMouseEnter={handleCentralBubbleHover}
          onMouseLeave={handleCentralBubbleLeave}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-blue-500/50 transition-all duration-300 transform-gpu">
            <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Explore Skills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}