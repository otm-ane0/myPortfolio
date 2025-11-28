import React from 'react';
import { motion } from 'framer-motion';
import Globe from './Globe';
import MetaBalls from './MetaBalls';
import TerminalCard from './TerminalCard';
import './GridSection.css';

const GridSection = () => {
  const gridItems = [
    {
      id: 1,
      title: "Creative Solutions",
      subtitle: "Design & Development",
      description: "Crafting unique digital experiences with attention to detail and user-centric approach.",
      icon: "🎨",
      color: "var(--accent-color)"
    },
    {
      id: 2,
      title: "Technical Excellence",
      subtitle: "Full Stack Development",
      description: "Building robust applications with modern technologies and best practices.",
      icon: "⚡",
      color: "#00ff88"
    },
    {
      id: 3,
      title: "Innovation Focus",
      subtitle: "Future-Ready Solutions",
      description: "Embracing emerging technologies to deliver cutting-edge solutions.",
      icon: "🚀",
      color: "#ff6b6b"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <section className="grid-section">
      <div className="grid-container">
        <motion.div
          className="grid-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="grid-title">What I Bring</h2>
          <p className="grid-subtitle">Combining creativity, technology, and innovation</p>
        </motion.div>

        <motion.div
          className="grid-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="grid-item"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="grid-card">
                <div className="card-header">
                  <div className="card-badge">
                    0{item.id}
                  </div>
                </div>

                {/* Globe animation for the first card */}
                {item.id === 1 && (
                  <div className="globe-section">
                    <Globe 
                      baseColor="#00ff88"
                      glowColor="#00ff88"
                      markerColor="#ffffff"
                      scale={0.75}
                      className="card-globe"
                    />
                  </div>
                )}

                {/* MetaBalls animation for the second card */}
                {item.id === 2 && (
                  <div className="metaballs-section">
                    <MetaBalls
                      color="#00ff88"
                      cursorBallColor="#ffffff"
                      cursorBallSize={2}
                      ballCount={12}
                      animationSize={25}
                      enableMouseInteraction={true}
                      enableTransparency={true}
                      hoverSmoothness={0.05}
                      clumpFactor={0.8}
                      speed={0.4}
                      className="card-metaballs"
                    />
                  </div>
                )}

                {/* TerminalCard for the third card */}
                {item.id === 3 && (
                  <div className="terminal-section">
                    <TerminalCard
                      command={`// Building the future with code
const developer = {
  name: "Otmane",
  skills: ["React", "Node.js", "TypeScript"],
  passion: "Innovation",
  status: "Always Learning"
};

function createSolution() {
  return developer.skills.map(skill => 
    skill + " + creativity = amazing projects"
  );
}`}
                      language="javascript"
                      className="card-terminal"
                    />
                  </div>
                )}

                {/* Regular icon for other cards */}
                {item.id !== 1 && item.id !== 2 && item.id !== 3 && (
                  <div className="card-icon-section">
                    <div 
                      className="card-icon"
                      style={{ '--accent-color': item.color }}
                    >
                      {item.icon}
                    </div>
                  </div>
                )}
                
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.subtitle}</p>
                  <p className="card-description">{item.description}</p>
                </div>

                <div className="card-footer">
                  <div className="card-line" style={{ backgroundColor: item.color }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridSection;