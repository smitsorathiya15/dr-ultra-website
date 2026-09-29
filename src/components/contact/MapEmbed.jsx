import React from 'react';
import siteConfig from '../../config/siteConfig.js';

/**
 * MapEmbed
 * ------------------------------------------------------------------
 * Google Maps location embed for the Contact page. Reads the embed
 * URL from siteConfig (backed by VITE_GOOGLE_MAPS_EMBED_SRC) so
 * updating the pinned address never requires a code change beyond
 * the .env file / siteConfig.
 * ------------------------------------------------------------------
 */
class MapEmbed extends React.Component {
  render() {
    if (!siteConfig.mapsEmbedSrc) return null;

    return (
      <div className="map-embed">
        <iframe
          src={siteConfig.mapsEmbedSrc}
          title={`${siteConfig.companyName} location`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }
}

export default MapEmbed;
