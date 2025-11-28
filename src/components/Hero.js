import React from 'react';
import ThreeScene from './ThreeScene';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="hero-text">
            <motion.h1 className="hero-title" variants={fadeInUp}>
              <span className="highlight">OTMANE HAMMADI</span> IM A 
              <br />
             FULL STACK WEB 
              <br />
              DEVLOPER
            </motion.h1>
            <motion.div className="hero-subtitle" variants={fadeInUp}>
              <div className="subtitle-line"></div>
              <p>Together, we build more than code  we build impact.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          {/* 3D Model - Full Right Side */}
          <ThreeScene />
          
          {/* Decorative elements */}
          <div className="hero-decorations">
            <motion.div 
              className="decoration-item decoration-01"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              01
            </motion.div>
            <motion.div 
              className="decoration-item decoration-02"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              02
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;