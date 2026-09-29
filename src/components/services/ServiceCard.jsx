import React from 'react';
import Card from '../common/Card.jsx';
import './services.css';

/**
 * ServiceCard
 * ------------------------------------------------------------------
 * Global reusable card for a single business line / service, with an
 * optional photo, icon, title, summary and a bullet list of points.
 * Used on both the Home page preview and the full Services page.
 * ------------------------------------------------------------------
 */
class ServiceCard extends React.Component {
  render() {
    const { icon, image, title, summary, points } = this.props;

    return (
      <Card image={image ? { src: image, alt: title } : undefined} icon={icon} title={title} text={summary}>
        {Array.isArray(points) && points.length > 0 && (
          <ul className="service-card__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </Card>
    );
  }
}

export default ServiceCard;
