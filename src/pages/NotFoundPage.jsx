import React from 'react';
import SEO from '../components/common/SEO.jsx';
import Button from '../components/common/Button.jsx';

/**
 * NotFoundPage
 * ------------------------------------------------------------------
 * Catch-all route for any URL that doesn't match a real page.
 * ------------------------------------------------------------------
 */
class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
        <div className="section text-center">
          <div className="container">
            <h1>404</h1>
            <p>Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
            <Button to="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default NotFoundPage;
