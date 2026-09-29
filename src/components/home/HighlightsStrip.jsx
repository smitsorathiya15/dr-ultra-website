import React from 'react';
import Highlight from '../common/Highlight.jsx';

const HIGHLIGHTS = [
  {
    icon: '💡',
    title: 'Innovative',
    text: 'Continuous investment in formulation R&D keeps our grade range ahead of evolving winding and insulation requirements.',
  },
  {
    icon: '🌐',
    title: 'Global Reach',
    text: 'A wide distribution and support network means a fast response wherever your production line is based.',
  },
  {
    icon: '🏭',
    title: 'Reliable Solution',
    text: 'Modern, tightly controlled manufacturing keeps every batch consistent and supply on schedule.',
  },
  {
    icon: '👥',
    title: 'Expert Team',
    text: 'A technical team with deep product, application and market experience, ready to support your specification.',
  },
];

/**
 * HighlightsStrip
 * ------------------------------------------------------------------
 * "Why choose us" strip reused on the Home and About pages, driven
 * by the HIGHLIGHTS data above so the copy lives in one place.
 * ------------------------------------------------------------------
 */
class HighlightsStrip extends React.Component {
  render() {
    return (
      <div className="highlights-grid">
        {HIGHLIGHTS.map((item) => (
          <Highlight key={item.title} {...item} />
        ))}
      </div>
    );
  }
}

export default HighlightsStrip;
