import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { FadeIn } from './ScrollAnimations';
import './Projects.css';

const Projects = () => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const minSwipeDistance = 50;
  const autoRotate = true;
  const rotateInterval = 4000;

  // Project data for your 7 projects
  const projects = [
  {
    id: 1,
    title: "IK Nettoyage — Cleaning Services Website Redesign",
    brand: "Front-end Developer & UI/UX Designer",
    description: "A modern, responsive website redesign for a cleaning company aimed at improving user engagement and increasing lead generation.",
    tags: ["Front-End Development", "React", "Vue.js", "Tailwind CSS", "UX & UI Design"],
    imageUrl: "/photo/netyy.png",
    link: "https://github.com/otm-ane0"
  },
  {
    id: 2,
    title: "Education Question Platform",
    brand: "Full-stack Developer",
    description: "A full-stack platform for teachers to manage math & science questions, featuring advanced filtering, ZIP exports, and payment integration.",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    imageUrl: "/photo/edu.png",
    link: "https://github.com/otm-ane0"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    brand: "Full-Stack Developer",
    description: "A responsive personal portfolio website designed to showcase professional full-stack development projects and skills.",
    tags: ["Web Design", "Back-End Development", "Front-End Development"],
    imageUrl: "/photo/framer.png",
    link: "https://github.com/otm-ane0"
  },
  {
    id: 4,
    title: "Daily Habit Tracker UI",
    brand: "Frontend Developer",
    description: "A clean, frontend-only React application for tracking daily habits, featuring dark/light themes and local storage for data persistence.",
    tags: ["React", "Tailwind CSS", "HTML5", "CSS"],
    imageUrl: "/photo/hubis.png",
    link: "https://github.com/otm-ane0"
  },
  {
    id: 5,
    title: "Inventory Management Application",
    brand: "Full-Stack Developer",
    description: "A real-time inventory system designed to help businesses track stock levels, automate reordering, and generate analytical reports.",
    tags: ["Front-End Development", "Back-End Development", "React", "SQL", "JavaScript"],
    imageUrl: "/photo/stock.png",
    link: "https://github.com/otm-ane0"
  },
  {
    id: 6,
    title: "Event Management Application",
    brand: "Full-Stack Developer",
    description: "A digital platform designed to efficiently plan events, manage attendee registrations, handle ticketing, and coordinate venues.",
    tags: ["React", "JavaScript", "Front-End Development", "Back-End Development", "SQL"],
    imageUrl: "/photo/event.png",
    link: "https://github.com/otm-ane0"
  },
  {
    id: 7,
    title: "Supplements Web Store",
    brand: "Full-stack Developer",
    description: "A responsive full-stack e-commerce platform for health products, featuring easy navigation, secure purchasing, and order tracking.",
    tags: ["Front-End Development", "React", "FastAPI", "JavaScript"],
    imageUrl: "/photo/store.png",
    link: "https://github.com/otm-ane0"
  }
];
  // Check if mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto rotate effect
  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % projects.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, projects.length]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % projects.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const getCardAnimationClass = (index) => {
    const total = projects.length;
    const activeIndex = active;
    
    if (index === activeIndex) {
      return "active-card";
    }
    
    if (index === (activeIndex + 1) % total) {
      return "next-card";
    }
    
    if (index === (activeIndex - 1 + total) % total) {
      return "prev-card";
    }
    
    // Cards further away
    if (index === (activeIndex + 2) % total) {
      return "far-next-card";
    }
    
    if (index === (activeIndex - 2 + total) % total) {
      return "far-prev-card";
    }
    
    return "hidden-card";
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <FadeIn direction="up">
          <div className="projects-header">
            <h2 className="projects-title">
              My <span className="highlight">Projects</span>
            </h2>
            <p className="projects-subtitle">
              Explore my latest work showcasing full-stack development skills and creative solutions
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div 
            className="carousel-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            ref={carouselRef}
          >
            <div className="carousel-track">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-card ${getCardAnimationClass(index)}`}
                >
                  <div className="card-container">
                    <div 
                      className="project-image"
                      style={{
                        backgroundImage: `url(${project.imageUrl})`,
                      }}
                    >
                      <div className="image-overlay" />
                      <div className="project-header">
                        <h3 className="project-brand">{project.brand.toUpperCase()}</h3>
                        <div className="brand-line" />
                        <p className="project-title-overlay">{project.title}</p>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-brand-sub">{project.brand}</p>
                      <p className="project-description">{project.description}</p>

                      <div className="project-footer">
                        <div className="project-tags">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <span>View Project</span>
                          <ArrowRight className="arrow-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!isMobile && (
              <>
                <button
                  className="carousel-btn carousel-btn-prev"
                  onClick={() =>
                    setActive((prev) => (prev - 1 + projects.length) % projects.length)
                  }
                  aria-label="Previous"
                >
                  <ChevronLeft className="btn-icon" />
                </button>
                <button
                  className="carousel-btn carousel-btn-next"
                  onClick={() => setActive((prev) => (prev + 1) % projects.length)}
                  aria-label="Next"
                >
                  <ChevronRight className="btn-icon" />
                </button>
              </>
            )}

            <div className="carousel-dots">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${active === idx ? 'active' : ''}`}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;