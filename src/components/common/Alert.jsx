import React from 'react';

/**
 * Alert
 * ------------------------------------------------------------------
 * Global inline success/error banner. Used by the contact form today;
 * available to any future form or async action in the app.
 * ------------------------------------------------------------------
 */
class Alert extends React.Component {
  render() {
    const { type = 'success', children } = this.props;
    if (!children) return null;
    return <div className={`alert alert--${type}`} role="alert">{children}</div>;
  }
}

export default Alert;
