import React from 'react';

/**
 * SectionHeading
 * ------------------------------------------------------------------
 * Global, reusable heading block (eyebrow + title + subtitle) used
 * at the top of nearly every section across every page.
 * ------------------------------------------------------------------
 */
class SectionHeading extends React.Component {
  render() {
    const { eyebrow, title, subtitle, align = 'center' } = this.props;

    return (
      <div className={`section-heading ${align === 'left' ? 'section-heading--left' : ''}`}>
        {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
        <h2 className="section-heading__title">{title}</h2>
        {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      </div>
    );
  }
}

export default SectionHeading;
