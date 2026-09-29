import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * withRouter
 * ------------------------------------------------------------------
 * React Router v6 dropped the old `withRouter` HOC and only exposes
 * location/navigation through hooks, which by definition only work
 * inside function components. Since every page/feature component in
 * this project is a class component (per project convention), this
 * tiny function component is the one deliberate exception: it is
 * pure plumbing that reads the router hooks and forwards them to the
 * wrapped class as a single `router` prop ({ location, navigate,
 * params }). No page logic lives here.
 * ------------------------------------------------------------------
 */
function withRouter(WrappedClassComponent) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <WrappedClassComponent {...props} router={{ location, navigate, params }} />
    );
  }

  ComponentWithRouterProp.displayName = `withRouter(${
    WrappedClassComponent.displayName || WrappedClassComponent.name || 'Component'
  })`;

  return ComponentWithRouterProp;
}

export default withRouter;
