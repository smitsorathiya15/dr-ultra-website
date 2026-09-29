import React from 'react';

/**
 * ScrollTopButton
 * ------------------------------------------------------------------
 * Floating "back to top" button that appears once the visitor has
 * scrolled past the first viewport. Self-contained: manages its own
 * visibility state and scroll listener lifecycle.
 * ------------------------------------------------------------------
 */
class ScrollTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const visible = window.scrollY > window.innerHeight * 0.6;
    if (visible !== this.state.visible) {
      this.setState({ visible });
    }
  }

  handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    if (!this.state.visible) return null;
    return (
      <button
        type="button"
        className="scroll-top"
        onClick={this.handleClick}
        aria-label="Back to top"
      >
        ↑
      </button>
    );
  }
}

export default ScrollTopButton;
