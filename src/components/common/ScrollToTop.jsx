import React from 'react';
import withRouter from '../../utils/withRouter.jsx';

/**
 * ScrollToTop
 * ------------------------------------------------------------------
 * Resets the scroll position to the top of the page whenever the
 * route changes, so navigating between pages never leaves the
 * visitor stranded halfway down the previous page.
 * ------------------------------------------------------------------
 */
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const prevPath = prevProps.router.location.pathname;
    const currentPath = this.props.router.location.pathname;
    if (prevPath !== currentPath) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
