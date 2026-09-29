import React from 'react';
import { NavLink } from 'react-router-dom';
import siteConfig from '../../config/siteConfig.js';
import Button from '../common/Button.jsx';
import withRouter from '../../utils/withRouter.jsx';
import logo from '../../assets/images/logo.png';

/**
 * Navbar
 * ------------------------------------------------------------------
 * Global site header: brand logo, primary navigation (driven by
 * siteConfig.navigation, so adding a page is a one-line config
 * change), and a mobile hamburger toggle. Automatically closes the
 * mobile menu whenever the route changes.
 *
 * On the Home page the header floats transparent (`.navbar--overlay`)
 * over the hero's full-bleed video frame sequence so the footage runs
 * edge-to-edge behind the logo and nav links. That was previously
 * "transparent for the whole Home page", which left it invisible-
 * background once the visitor scrolled past the hero into the plain
 * white sections below — a scroll listener here now tracks whether
 * the hero (`.hero`) has been scrolled past and adds
 * `.navbar--overlay-solid` once it has, painting the header white
 * again exactly when the video frame ends. `position` stays `fixed`
 * throughout the Home page in both states (only the background/shadow
 * change) — switching back to the in-flow `sticky` layout used
 * elsewhere would insert the header's height into the document flow
 * while already scrolled hundreds of viewport-heights down the page,
 * risking a visible content jump.
 * ------------------------------------------------------------------
 */
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, pastHero: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.ticking = false;
    this.scrollAttached = false;
  }

  componentDidMount() {
    if (this.isHome()) {
      this.attachScrollListener();
      this.handleScroll();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.router.location.pathname !== this.props.router.location.pathname) {
      if (this.state.menuOpen) {
        this.closeMenu();
      }
      if (this.isHome()) {
        this.attachScrollListener();
        this.handleScroll();
      } else {
        this.detachScrollListener();
        this.setState({ pastHero: false });
      }
    }
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  isHome() {
    return this.props.router.location.pathname === '/';
  }

  attachScrollListener() {
    if (this.scrollAttached) return;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleScroll);
    this.scrollAttached = true;
  }

  detachScrollListener() {
    if (!this.scrollAttached) return;
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
    this.scrollAttached = false;
  }

  handleScroll() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.ticking = false;
      // `.hero` covers both the frame-sequence variant (its height
      // matches its full-height scroll track) and the static/reduced-
      // motion fallback, so this one check works for either — once
      // its bottom edge has scrolled above the viewport, the hero is
      // fully exited.
      const heroEl = document.querySelector('.hero');
      if (!heroEl) return;
      const pastHero = heroEl.getBoundingClientRect().bottom <= 0;
      if (pastHero !== this.state.pastHero) {
        this.setState({ pastHero });
      }
    });
  }

  toggleMenu() {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen, pastHero } = this.state;
    const isHome = this.isHome();
    const navClassName = [
      'navbar',
      isHome ? 'navbar--overlay' : '',
      isHome && pastHero ? 'navbar--overlay-solid' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <header className={navClassName}>
        <div className="container navbar__inner">
          <NavLink to="/" className="navbar__brand" onClick={this.closeMenu}>
            <img src={logo} alt={`${siteConfig.companyName} logo`} className="navbar__logo" />
          </NavLink>

          <button
            type="button"
            className="navbar__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={this.toggleMenu}
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>

          <nav
            className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
            aria-label="Primary"
          >
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={this.closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" className="navbar__cta">
              Get a Quote
            </Button>
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Navbar);
