import React from 'react';

/**
 * ContactInfoCard
 * ------------------------------------------------------------------
 * Small reusable card for one contact detail (address / email /
 * phone). Used in a list on the Contact page.
 * ------------------------------------------------------------------
 */
class ContactInfoCard extends React.Component {
  render() {
    const { icon, title, children } = this.props;
    return (
      <div className="contact-info-card">
        <span className="contact-info-card__icon" aria-hidden="true">
          {icon}
        </span>
        <div>
          <h3 className="contact-info-card__title">{title}</h3>
          <p className="contact-info-card__text">{children}</p>
        </div>
      </div>
    );
  }
}

export default ContactInfoCard;
