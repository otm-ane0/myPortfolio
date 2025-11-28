import React from 'react'
import { ScrollTimeline } from './ScrollTimeline'
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations'
import './Experience.css'

const Experience = () => {
  const experienceEvents = [
    {
      year: "",
      title: "Remote Work",
      subtitle: "Brazil",
      description:
        "Worked remotely, contributing to projects with international collaboration and technical problem-solving.",
      icon: (
        <svg className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      year: "",
      title: "Wepco",
      subtitle: "Fès Sidi Khyar, Morocco | 08-10-2024 to 08-02-2025",
      description:
        "Managed stock operations, tracking material movements (bricks, concrete, sand, gravel) with real-time updates. Created purchase orders, coordinated with suppliers, and monitored deliveries and delays to ensure availability of materials.",
      icon: (
        <svg className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      )
    },
    {
      year: "",
      title: "Stock Management Application",
      subtitle: "15-07-2023 to 15-01-2024",
      description:
        "Developed a dedicated stock management application for monitoring and recording stock entries and exits. Oversaw orders and warehouse receipts, calculated and controlled raw materials (Preform, Ticket, Cap, etc.), coordinated with production and logistics teams, and performed inventory audits for optimized storage.",
      icon: (
        <svg className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      year: "",
      title: "EDUfacilita Educational Platform",
      subtitle: "Maths, Physics, Biology",
      description:
        "Built an educational platform integrating account management, teacher dashboards, and advanced features such as LaTeX rendering (MathJax), MathType editing, bulk downloads, and advanced search. Integrated MercadoPago for payment and implemented display protection. Developed a complete admin panel for content and user management.",
      icon: (
        <svg className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      )
    },
    {
      year: "",
      title: "Event Management Application",
      subtitle: "Al Akhawayn University, Ifrane | 06-03-2023 to 06-04-2023",
      description:
        "Designed and developed an event management system with scheduling (dates, times, venues, descriptions), event categories for filtering, participant registration, and attendance tracking.",
      icon: (
        <svg className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      )
    },
    {
      year: "",
      title: "Abdou Construction",
      subtitle: "Fès, Morocco",
      description:
        "Managed construction stock operations, tracking materials and ensuring availability. Coordinated purchases, deliveries, and supplier relations to maintain continuous workflow.",
      icon: (
        <svg className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5.5 6c-.83 0-1.5-.67-1.5-1.5S16.67 6 17.5 6s1.5.67 1.5 1.5S18.33 9 17.5 9z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <FadeIn direction="up">
        <ScrollTimeline
          events={experienceEvents}
          title="Professional Experience"
          subtitle="My journey through various roles and projects"
          animationOrder="sequential"
          cardAlignment="alternating"
          progressIndicator={true}
          cardVariant="elevated"
          cardEffect="glow"
          parallaxIntensity={0.1}
          progressLineWidth={3}
          progressLineCap="round"
          dateFormat="badge"
          revealAnimation="slide"
          connectorStyle="line"
          perspective={false}
          darkMode={true}
          smoothScroll={true}
        />
      </FadeIn>
    </section>
  )
}

export default Experience