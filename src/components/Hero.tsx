import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Code2, Palette, FileText } from "lucide-react";
import dp from "../assets/images/test.png";

export default function Hero() {
  const containerRef = useRef(null);
  const profileRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (profileRef.current && textRef.current) {
        gsap.set([profileRef.current, textRef.current], { opacity: 0, y: 20 });

        gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } })
          .to(profileRef.current, { opacity: 1, y: 0 })
          .to(textRef.current, { opacity: 1, y: 0 }, "-=0.5");
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = useMemo(
    () => [
      // { href: "mailto:hello@example.com", Icon: Mail, label: "Resume" },
            { 
        href: "https://drive.google.com/file/d/1vFKtlsrS0LO9KThPktaTbx_03gzsR1IM/view", 
        Icon: FileText, 
        label: "Resume",
        className: "group-hover:text-blue-400 transition-colors duration-300"
      },
      { href: "https://www.linkedin.com/in/manish-kumar-a42861244/", Icon: Linkedin, label: "LinkedIn" },
      { href: "https://github.com/manish92596/", Icon: Github, label: "GitHub" },
    ],
    []
  );

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#030014] text-white px-40"
    >
      <div
        ref={profileRef}
        className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] overflow-hidden rounded-full relative flex-shrink-0 border-4 border-blue-500/30"
      >
       <img
  src={dp}  
  alt="Manish Kumar - Profile Picture"
  className="object-cover w-full h-full"
  loading="lazy"
/>

        <div className="absolute p-3 rounded-full -top-4 -right-4 bg-blue-500/20 backdrop-blur-sm">
          <Code2 className="w-6 h-6 text-blue-400" />
        </div>
        <div className="absolute p-3 rounded-full -bottom-4 -left-4 bg-emerald-500/20 backdrop-blur-sm">
          <Palette className="w-6 h-6 text-emerald-400" />
        </div>
      </div>

      <div
        ref={textRef}
        className="flex flex-col justify-center max-w-xl ml-10"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Hello, I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Manish Kumar
          </span>
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
        I'm a passionate developer from IIIT Guwahati with a strong enthusiasm for Machine Learning, Deep Learning, and web development. Let's create impactful digital solutions together!
        </p>

        <div className="flex space-x-4">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={`Link to ${label}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-3 space-x-2 transition-all duration-300 border rounded-full group bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/50 backdrop-blur-sm"
            >
              <Icon className="w-5 h-5 group-hover:text-blue-400" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
















