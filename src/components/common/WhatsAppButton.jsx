import React from 'react';
import siteConfig from '../../config/siteConfig.js';

/**
 * WhatsAppButton
 * ------------------------------------------------------------------
 * Opens a WhatsApp chat with the company number
 * (`siteConfig.contact.whatsappNumber`) in a new tab, via the standard
 * `wa.me` deep link — works the same on desktop (opens WhatsApp Web)
 * and mobile (opens the WhatsApp app) with no API key or SDK needed.
 *
 * `wa.me` requires the number as digits only, in full international
 * format (country code + number, no `+`, spaces, or leading zero), so
 * this strips everything else out of the human-readable config value
 * rather than hard-coding a second, easy-to-drift copy of the number.
 *
 * Two render modes, one shared link-building/icon so they can never
 * drift apart:
 *  - default (used on the Contact page): a full-width labelled button
 *    inline in the page content.
 *  - `floating`: a small round corner launcher (bottom-left, fixed),
 *    rendered once from Layout.jsx so every page gets it automatically
 *    without each page having to remember to add it.
 * ------------------------------------------------------------------
 */
class WhatsAppButton extends React.Component {
  buildHref() {
    const digits = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
    const prefill = this.props.message || "Hi Dr. Ultra team, I'd like to know more about your products.";
    return `https://wa.me/${digits}?text=${encodeURIComponent(prefill)}`;
  }

  renderIcon(size) {
    return (
      <svg
        className="whatsapp-icon"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        <path d="M12.01 2C6.49 2 2.01 6.48 2.01 12c0 1.87.52 3.63 1.42 5.13L2 22l4.99-1.31A9.95 9.95 0 0 0 12.01 22C17.52 22 22 17.52 22 12S17.52 2 12.01 2zm0 18.15c-1.65 0-3.19-.46-4.51-1.25l-.32-.19-3.01.79.8-2.93-.21-.3a8.14 8.14 0 0 1-1.26-4.27c0-4.51 3.68-8.19 8.2-8.19 4.51 0 8.19 3.68 8.19 8.19s-3.68 8.15-8.19 8.15z" />
      </svg>
    );
  }

  render() {
    const { className = '', children, floating = false } = this.props;

    if (floating) {
      return (
        <a
          href={this.buildHref()}
          className={`whatsapp-float ${className}`.trim()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dr. Ultra on WhatsApp"
        >
          {this.renderIcon(28)}
        </a>
      );
    }

    return (
      <a
        href={this.buildHref()}
        className={`btn btn--whatsapp ${className}`.trim()}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.renderIcon(20)}
        {children || 'Chat on WhatsApp'}
      </a>
    );
  }
}

export default WhatsAppButton;
