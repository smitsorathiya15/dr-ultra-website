import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../config/siteConfig.js';
import logo from '../../assets/images/logo.png';

/**
 * Footer
 * ------------------------------------------------------------------
 * Global site footer: brand blurb, quick links, contact details, and
 * social links, all sourced from siteConfig so updating a phone
 * number or social handle never requires touching this component.
 * ------------------------------------------------------------------
 */
class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="container footer__top">
          <div>
            <img src={logo} alt={`${siteConfig.companyName} logo`} className="footer__logo" />
            <p className="footer__about">{siteConfig.shortDescription}</p>
            <div className="footer__socials">
              {Object.entries(siteConfig.social)
                .filter(([, url]) => Boolean(url))
                .map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={platform}
                  >
                    {platform.charAt(0).toUpperCase()}
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Business Lines</h4>
            <ul className="footer__list">
              <li><Link to="/services">Wire Enamels</Link></li>
              <li><Link to="/services">Electricals</Link></li>
              <li><Link to="/services">Electronics Resins</Link></li>
              <li><Link to="/services">VPI Plant Manufacturing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
              {siteConfig.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container footer__bottom">
          <span>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </span>
          <span className="footer__credit">
            Built by{' '}
            <a href="mailto:promtixaistudio@gmail.com">PromtixAI Studio</a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
