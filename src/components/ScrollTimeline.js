import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Card, CardContent } from "./card";
import './ScrollTimeline.css';

const DEFAULT_EVENTS = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description:
      "Description of the achievement or milestone reached during this time period.",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Timeline",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 3,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.2
        : index * 0.3;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x: cardAlignment === "alternating" ? (index % 2 === 0 ? -100 : 100) : -100,
        opacity: 0,
      },
      scale: { scale: 0.8, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.7,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      viewport: { once: false, margin: "-100px" },
    };
  };

  return (
    <div ref={scrollRef} className={`scroll-timeline-container ${className}`}>
      <div className="timeline-header">
        <h2 className="timeline-title">{title}</h2>
        <p className="timeline-subtitle">{subtitle}</p>
      </div>

      <div className="timeline-content">
        <div className="timeline-wrapper">
          {/* Background line */}
          <div className="timeline-line-bg"></div>

          {/* Enhanced Progress Indicator */}
          {progressIndicator && (
            <>
              <motion.div
                className="timeline-progress"
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                }}
              />
              <motion.div
                className="timeline-comet"
                style={{
                  top: progressHeight,
                }}
              >
                <motion.div
                  className="comet-core"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="timeline-events">
            {events.map((event, index) => {
              const isLeft = cardAlignment === "alternating" ? index % 2 === 0 : false;
              
              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={`timeline-event ${isLeft ? 'timeline-event-left' : 'timeline-event-right'}`}
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot-container">
                    <motion.div
                      className={`timeline-dot ${index <= activeIndex ? 'active' : ''}`}
                      animate={
                        index <= activeIndex
                          ? {
                              scale: [1, 1.3, 1],
                              boxShadow: [
                                "0 0 0px rgba(0,255,136,0)",
                                "0 0 12px rgba(0,255,136,0.6)",
                                "0 0 0px rgba(0,255,136,0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  
                  {/* Event card */}
                  <motion.div
                    className={`timeline-card ${isLeft ? 'card-left' : 'card-right'}`}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    <Card className="event-card">
                      <CardContent className="event-content">
                        {dateFormat === "badge" ? (
                          <div className="event-date-badge">
                            <span className="date-text">{event.year}</span>
                          </div>
                        ) : (
                          <p className="event-date-large">{event.year}</p>
                        )}
                        <h3 className="event-title">{event.title}</h3>
                        {event.subtitle && (
                          <p className="event-subtitle">{event.subtitle}</p>
                        )}
                        <p className="event-description">{event.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};