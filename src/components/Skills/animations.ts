import { gsap } from 'gsap';

export const setupSkillsAnimation = (
  bubbles: (HTMLDivElement | null)[],
  centralBubble: HTMLDivElement | null
) => {
  // Initial setup
  gsap.set(bubbles, { 
    opacity: 0,
    scale: 0,
    x: 0,
    y: 0
  });

  // Floating animation for central bubble
  gsap.to(centralBubble, {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // Pulsating glow animation
  gsap.to(centralBubble, {
    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
};