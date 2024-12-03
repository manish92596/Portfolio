import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { experiences } from './data';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-[#030014] relative">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-30 -left-64 top-0" />
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl opacity-30 -right-64 bottom-0" />

      <div className="relative z-10 max-w-5xl px-4 mx-auto">
        <div className="mb-16 text-center experience-title">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Work Experience
              </span>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A journey through my professional experience
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <div key={index} ref={el => cardsRef.current[index] = el}>
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}