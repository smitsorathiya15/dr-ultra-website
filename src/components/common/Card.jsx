import React from 'react';

/**
 * Card
 * ------------------------------------------------------------------
 * Global content card: optional image or icon, title, text, and any
 * extra children (e.g. a link, a spec list). Reused by services,
 * products, gallery, and highlight sections.
 * ------------------------------------------------------------------
 */
class Card extends React.Component {
  render() {
    const { image, icon, title, text, children, className = '' } = this.props;

    return (
      <div className={`card ${className}`.trim()}>
        {image && (
          <div className="card__media">
            <img src={image.src} alt={image.alt || ''} loading="lazy" />
          </div>
        )}
        <div className="card__body">
          {icon && (
            <span className="card__icon" aria-hidden="true">
              {icon}
            </span>
          )}
          {title && <h3 className="card__title">{title}</h3>}
          {text && <p className="card__text">{text}</p>}
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
