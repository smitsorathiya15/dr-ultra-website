import React from 'react';

/**
 * Highlight
 * ------------------------------------------------------------------
 * Icon + title + text row, used for "why choose us" style strips on
 * the Home and About pages.
 * ------------------------------------------------------------------
 */
class Highlight extends React.Component {
  render() {
    const { icon, title, text } = this.props;
    return (
      <div className="highlight">
        <span className="highlight__icon" aria-hidden="true">
          {icon}
        </span>
        <div>
          <h3 className="highlight__title">{title}</h3>
          <p className="highlight__text">{text}</p>
        </div>
      </div>
    );
  }
}

export default Highlight;
