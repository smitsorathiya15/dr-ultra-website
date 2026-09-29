import React from 'react';

/**
 * Badge
 * ------------------------------------------------------------------
 * Small global pill label used for thermal classes, categories, and
 * certification tags throughout the Products and About pages.
 * ------------------------------------------------------------------
 */
class Badge extends React.Component {
  render() {
    const { children, variant = 'default', outline = false } = this.props;
    const variantClass = variant !== 'default' ? `badge--${variant}` : '';
    return (
      <span className={`badge ${variantClass} ${outline ? 'badge--outline' : ''}`.trim()}>
        {children}
      </span>
    );
  }
}

export default Badge;
