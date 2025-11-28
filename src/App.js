import React, { useState, useEffect } from 'react';
import Dither from './components/Dither';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GridSection from './components/GridSection';
import Experience from './components/Experience';
import SeasonalHoverCards from './components/SeasonalHoverCards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LogoLoop from './components/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiSqlite
} from 'react-icons/si';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Professional Experience Tech Stack
  const techLogos = [
    // Frontend Technologies
    { node: <SiHtml5 style={{color: '#E34F26'}} />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 style={{color: '#1572B6'}} />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiBootstrap style={{color: '#7952B3'}} />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiTailwindcss style={{color: '#06B6D4'}} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    
    // JavaScript & Frameworks
    { node: <SiJavascript style={{color: '#F7DF1E'}} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiReact style={{color: '#61DAFB'}} />, title: "React.js", href: "https://react.dev" },
    { node: <SiNextdotjs style={{color: '#000000'}} />, title: "Next.js", href: "https://nextjs.org" },
    
    // Backend Technologies
    { node: <SiPhp style={{color: '#777BB4'}} />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel style={{color: '#FF2D20'}} />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiPython style={{color: '#3776AB'}} />, title: "Python", href: "https://www.python.org" },
    { node: <SiNodedotjs style={{color: '#339933'}} />, title: "Node.js", href: "https://nodejs.org" },
    
    // Databases
    { node: <SiMysql style={{color: '#4479A1'}} />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiMongodb style={{color: '#47A248'}} />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiSqlite style={{color: '#003B57'}} />, title: "SQLite", href: "https://www.sqlite.org" },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Responsive settings for the Dither component
  const ditherSettings = {
    waveColor: [0.1, 0.2, 0.1], // Dark green-ish color to match the theme
    disableAnimation: false,
    enableMouseInteraction: !isMobile, // Disable mouse interaction on mobile for better performance
    mouseRadius: isMobile ? 0.1 : 0.3,
    colorNum: isMobile ? 3 : 4, // Reduce colors on mobile for performance
    waveAmplitude: isMobile ? 0.2 : 0.3,
    waveFrequency: isMobile ? 2 : 3,
    waveSpeed: isMobile ? 0.03 : 0.05,
    pixelSize: isMobile ? 3 : 2, // Larger pixels on mobile for performance
  };

  // Service / Seasonal cards data (rendered as the last section)
  const serviceCards = [
    {
      title: 'Design & UX',
      subtitle: 'User-centered Design',
      description: 'Crafting visually compelling and usable interfaces with attention to accessibility and usability.',
      imageSrc: '/photo/ui-ux.jpg',
    },
    {
      title: 'Web Development',
      subtitle: 'Full Stack Solutions',
      description: 'Building maintainable, fast, and scalable web applications using modern stacks.',
      imageSrc: '/photo/webdev.jpg',
    },
    {
      title: '3D & Animations',
      subtitle: 'Interactive Experiences',
      description: 'Creating immersive 3D visuals and animations using Three.js and WebGL.',
      imageSrc: '/photo/3d-cartoon-lumberjack-character.jpg',
    },
  ];

  return (
    <div className="App">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background Dither Effect */}
      <div className="background-container">
        <Dither {...ditherSettings} />
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <TopBar />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <GridSection />
          <Experience />
          {/* Services / Seasonal hover cards */}
          <SeasonalHoverCards cards={serviceCards} />
          {/* Contact Information */}
          <Contact />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
