import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button
 * ------------------------------------------------------------------
 * Global, reusable button used across every page. Renders as a
 * react-router <Link> when a `to` prop is supplied, a plain <a> when
 * `href` is supplied, or a native <button> otherwise — one component,
 * three use cases, consistent styling.
 * ------------------------------------------------------------------
 */
class Button extends React.Component {
  render() {
    const {
      children,
      variant = 'primary',
      block = false,
      to,
      href,
      type = 'button',
      loading = false,
      className = '',
      ...rest
    } = this.props;

    const classes = `btn btn--${variant} ${block ? 'btn--block' : ''} ${className}`.trim();

    if (to) {
      return (
        <Link to={to} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <button type={type} className={classes} disabled={loading || rest.disabled} {...rest}>
        {loading && <span className="spinner" aria-hidden="true" />}
        {children}
      </button>
    );
  }
}

export default Button;
