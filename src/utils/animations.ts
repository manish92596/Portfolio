import { gsap } from 'gsap';

export const fadeInUp = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 20,
    duration: 1,
    delay,
    ease: "power2.out"
  });
};

export const setupScrollTrigger = (element: gsap.TweenTarget, options = {}) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top center+=100",
      toggleActions: "play none none reverse",
      ...options
    }
  });
};