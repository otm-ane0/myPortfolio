import React from 'react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations'
import './About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <FadeIn direction="up">
          <div className="about-header">
            <h2 className="about-title">
              About <span className="highlight">Me</span>
            </h2>
          </div>
        </FadeIn>

        <div className="about-content">
          <FadeIn direction="left" delay={0.2}>
            <div className="about-photo">
              <div className="photo-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/photo/me.png`}
                  alt="Otmane Hammadi - Full Stack Developer" 
                  className="profile-image"
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', e.target.src);
                    e.target.nextSibling.style.display = 'none'
                  }}
                />
                <div className="photo-placeholder" style={{display: 'none'}}>
                  <div className="placeholder-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                      <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p>Otmane Hammadi</p>
                </div>
              </div>
              <div className="photo-glow"></div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
            <div className="about-text">
              <div className="about-intro">
                <h3>Hello! I'm Otmane Hammadi</h3>
                <p className="intro-text">
                  Hi <span className="highlight">I'm a full-stack web developer </span> with 5 years of experience building dynamic, responsive websites and web applications that deliver real results. From sleek front-end interfaces to robust back-end architectures, I bring technical skill and a problem-solving mindset to every project.
                </p>
              </div>

            

              <div className="about-cta">
                <button className="cta-button primary">
                  <span>View My Work</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="cta-button secondary">
                  <span>Download CV</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About