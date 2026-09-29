import React from 'react';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../../config/siteConfig.js';

/**
 * SEO
 * ------------------------------------------------------------------
 * Reusable, global component every page renders once with its own
 * title/description/path. Centralises how meta tags (title,
 * description, canonical URL, Open Graph) are built so each page
 * only has to supply the few things that actually differ.
 * ------------------------------------------------------------------
 */
class SEO extends React.Component {
  render() {
    const { title, description, path } = this.props;
    const fullTitle = `${title} | ${siteConfig.companyName}`;
    const canonicalUrl = `${siteConfig.siteUrl}${path || ''}`;

    return (
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteConfig.companyName} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    );
  }
}

export default SEO;
