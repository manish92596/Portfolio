

import React, { Suspense, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import LoadingSpinner from './components/LoadingSpinner';
import { updateCursorPosition } from './utils/cursor';


const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      updateCursorPosition(e, setCursorPosition, setDotPosition);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-[#030014] min-h-screen text-white">
      <Toaster position="top-right" />
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`
        }}
      />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;











