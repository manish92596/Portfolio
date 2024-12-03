// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const navigationItems = ['Home', 'Skills', 'Projects', 'Contact'];

//   return (
//     <nav className="fixed z-50 w-full">
//       <div 
//         className={`relative transition-all duration-500 ${
//           isScrolled ? 'bg-[#030014]/50' : ''
//         }`}
//       >
//         {/* Enhanced glow effect */}
//         {isScrolled && (
//           <>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-blue-500/5" />
//             <div className="absolute inset-0 backdrop-blur-md" />
//             <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
//             <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
//           </>
//         )}

//         {/* Navbar content */}
//         <div className="relative max-w-6xl px-4 mx-auto">
//           <div className="flex items-center justify-between h-16">
//             <a 
//               href="#" 
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection('home');
//               }}
//               className="text-2xl font-bold text-transparent transition-opacity bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text hover:opacity-80"
//             >
//               Portfolio
//             </a>

//             <div className="hidden space-x-8 md:flex">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="relative group"
//                 >
//                   <span className={`text-gray-300 transition-all duration-300 ${
//                     isScrolled ? 'group-hover:text-blue-400' : 'group-hover:text-white'
//                   }`}>
//                     {item}
//                   </span>
//                   <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100" />
//                 </button>
//               ))}
//             </div>

//             <button
//               className="text-gray-300 md:hidden hover:text-white"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               {isMobileMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>

//           <div 
//             className={`md:hidden transition-all duration-300 ${
//               isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
//             } overflow-hidden`}
//           >
//             <div className="py-2 space-y-2">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`block w-full px-4 py-2 text-left text-gray-300 transition-all duration-300 rounded-lg ${
//                     isScrolled 
//                       ? 'hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-emerald-500/10 hover:text-blue-400' 
//                       : 'hover:bg-white/5 hover:text-white'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = ['Home', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed z-50 w-full">
      <div 
        className={`relative transition-all duration-500 ${
          isScrolled ? 'bg-[#030014]/50 backdrop-blur-md' : ''
        }`}
      >
        {/* Enhanced glow effect */}
        {isScrolled && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-blue-500/5" />
            <div className="absolute inset-0 backdrop-blur-md" />
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          </>
        )}

        {/* Navbar content */}
        <div className="relative max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-bold text-transparent transition-opacity bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text hover:opacity-80"
            >
              Portfolio
            </a>

            <div className="hidden space-x-8 md:flex">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative group"
                >
                  <span className={`text-gray-300 transition-all duration-300 ${
                    isScrolled ? 'group-hover:text-blue-400' : 'group-hover:text-white'
                  }`}>
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100" />
                </button>
              ))}
            </div>

            <button
              className="text-gray-300 md:hidden hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div 
            className={`md:hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="py-2 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full px-4 py-2 text-left text-gray-300 transition-all duration-300 rounded-lg ${
                    isScrolled 
                      ? 'hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-emerald-500/10 hover:text-blue-400' 
                      : 'hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}