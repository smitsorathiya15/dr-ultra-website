import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollTopButton from '../common/ScrollTopButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';

/**
 * Layout
 * ------------------------------------------------------------------
 * Global page shell: Navbar + page content + Footer + the floating
 * back-to-top button + the floating WhatsApp launcher. Every route in
 * App.jsx renders its page inside this Layout so none of these need
 * to be added per page — the WhatsApp launcher in particular is meant
 * to be reachable from anywhere on the site, not just the Contact
 * page (which also has its own full-width WhatsApp button inline in
 * its content — the two serve different purposes and both stay).
 * ------------------------------------------------------------------
 */
class Layout extends React.Component {
  render() {
    return (
      <div className="app-shell">
        <Navbar />
        <main className="page">{this.props.children}</main>
        <Footer />
        <ScrollTopButton />
        <WhatsAppButton floating />
      </div>
    );
  }
}

export default Layout;
