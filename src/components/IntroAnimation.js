import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState('vortex'); // vortex -> text -> portal -> through
  const letters = ['O', 'T', 'M', 'A', 'N', 'E'];

  useEffect(() => {
    // Phase 1: Vortex (0-2.5s)
    const vortexTimer = setTimeout(() => {
      setPhase('text');
    }, 2500);

    // Phase 2: Text appears (2.5-5s)
    const textTimer = setTimeout(() => {
      setPhase('portal');
    }, 5000);

    // Phase 3: Door opens (5-7s)
    const portalTimer = setTimeout(() => {
      setPhase('through');
    }, 7000);

    // Phase 4: Complete (7-8s)
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 8000);

    return () => {
      clearTimeout(vortexTimer);
      clearTimeout(textTimer);
      clearTimeout(portalTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Vortex particle configuration
  const particleCount = 40;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    angle: (i / particleCount) * Math.PI * 2,
    radius: 100 + (i % 5) * 80,
    delay: i * 0.02,
    size: 2 + Math.random() * 3
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.5,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    glow: {
      textShadow: [
        '0 0 20px rgba(255, 255, 255, 0.3)',
        '0 0 40px rgba(255, 255, 255, 0.5)',
        '0 0 20px rgba(255, 255, 255, 0.3)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    portal: {
      scale: 1.2,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: 'easeInOut' },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`intro-wrapper phase-${phase}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'through' ? 0 : 1 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Dark background */}
        <div className="intro-background" />

        {/* Vortex particles */}
        <div className="vortex-container">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="vortex-particle"
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={phase === 'vortex' || phase === 'text' ? {
                opacity: [0, 0.8, 0.9, 0.7],
                scale: [0, 1, 1, 0.8],
                x: [
                  0,
                  Math.cos(particle.angle) * particle.radius * 0.5,
                  Math.cos(particle.angle + Math.PI * 0.5) * particle.radius,
                  Math.cos(particle.angle + Math.PI) * particle.radius * 1.5
                ],
                y: [
                  0,
                  Math.sin(particle.angle) * particle.radius * 0.5,
                  Math.sin(particle.angle + Math.PI * 0.5) * particle.radius,
                  Math.sin(particle.angle + Math.PI) * particle.radius * 1.5
                ],
                rotate: [0, 180, 360, 540]
              } : {
                opacity: 0,
                scale: 0
              }}
              transition={{
                duration: 8,
                delay: particle.delay,
                repeat: phase === 'vortex' || phase === 'text' ? Infinity : 0,
                ease: "linear"
              }}
              style={{
                width: particle.size,
                height: particle.size,
              }}
            />
          ))}
        </div>

        {/* Text Phase */}
        {(phase === 'text' || phase === 'portal') && (
          <motion.div
            className="intro-text-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="intro-text">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="intro-letter"
                  variants={letterVariants}
                  animate={['visible', 'glow']}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="intro-subtitle-modern"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Full Stack Developer
            </motion.div>
          </motion.div>
        )}

        {/* Portal Opening Phase - Door Effect */}
        {(phase === 'portal' || phase === 'through') && (
          <motion.div
            className="portal-opening"
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              opacity: phase === 'through' ? 0 : 1,
            }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            {/* Portal door halves - opening from center */}
            <motion.div
              className="portal-door portal-door-left"
              initial={{ x: 0 }}
              animate={{
                x: phase === 'through' ? '-100vw' : phase === 'portal' ? '-50vw' : 0,
                opacity: phase === 'through' ? 0 : 1
              }}
              transition={{ 
                duration: 2, 
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: phase === 'portal' ? 0 : 0
              }}
            />
            <motion.div
              className="portal-door portal-door-right"
              initial={{ x: 0 }}
              animate={{
                x: phase === 'through' ? '100vw' : phase === 'portal' ? '50vw' : 0,
                opacity: phase === 'through' ? 0 : 1
              }}
              transition={{ 
                duration: 2, 
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: phase === 'portal' ? 0 : 0
              }}
            />

            {/* Light coming from behind the doors */}
            <motion.div
              className="door-light-glow"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase === 'portal' ? [0, 0.6, 0.8] : 0,
                scale: phase === 'portal' ? [0.5, 1, 1.2] : 0
              }}
              transition={{
                duration: 2,
                ease: 'easeOut'
              }}
            />
          </motion.div>
        )}

        {/* Green flash transition */}
        {phase === 'through' && (
          <motion.div
            className="green-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
