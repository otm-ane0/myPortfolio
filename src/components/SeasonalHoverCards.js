import React from 'react';
import { cn } from '../lib/utils';
import './SeasonalHoverCards.css';

const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
}) => {
  return (
    <div className={cn('season-card', className)}>
      <img src={imageSrc} className="season-card-image" alt={imageAlt || title} />
      <div className="season-card-overlay" />

      <div className="season-card-content">
        <div className="season-card-header">
          <h2 className="season-card-title">{title}</h2>
          <p className="season-card-subtitle">{subtitle}</p>
        </div>

        <div className="season-card-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function SeasonalHoverCards({ cards, className }) {
  return (
    <section id="service" className={cn('seasonal-section', className)}>
      <div className="seasonal-container">
        {/* Service Header */}
        <div className="service-header">
          <h2 className="service-title">
            My <span className="highlight">Services</span>
          </h2>
          <p className="service-description">
            Comprehensive solutions tailored to bring your vision to life with cutting-edge technology and creative expertise
          </p>
        </div>

        <div className="seasonal-wrapper">
          {cards.map((card, index) => (
            <SeasonCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              className="season-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
}