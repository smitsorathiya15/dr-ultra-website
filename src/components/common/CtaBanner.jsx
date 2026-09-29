import React from 'react';
import Button from './Button.jsx';
import '../home/home.css';

/**
 * CtaBanner
 * ------------------------------------------------------------------
 * Global call-to-action banner used at the bottom of Home, Services
 * and Products pages to funnel visitors toward the Contact page.
 * ------------------------------------------------------------------
 */
class CtaBanner extends React.Component {
  render() {
    const {
      title = 'Need help selecting the right grade?',
      text = 'Talk to our technical team about thermal class, application process and service duty.',
      buttonLabel = 'Contact Our Team',
      buttonTo = '/contact',
    } = this.props;

    return (
      <div className="cta-banner">
        <div className="cta-banner__text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Button to={buttonTo} variant="outline">
          {buttonLabel}
        </Button>
      </div>
    );
  }
}

export default CtaBanner;
