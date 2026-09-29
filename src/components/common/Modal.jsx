import React from 'react';

/**
 * Modal
 * ------------------------------------------------------------------
 * Generic, reusable dialog overlay — a dimmed backdrop centered over a
 * white panel that carries whatever `children` the caller renders
 * inside it. Used by ProductCard for the product-detail popup, but
 * kept generic (no product-specific markup) so any future "click to
 * see more" pattern on the site can reuse it instead of building its
 * own overlay.
 *
 * Behaviour: closes on Escape, on a click/tap on the dimmed backdrop
 * (not on the panel itself), or via the always-visible close button;
 * locks page scroll while open; moves focus into the dialog on mount
 * and returns it to whatever triggered the modal on unmount, so
 * keyboard and screen-reader users land somewhere sensible either way.
 * ------------------------------------------------------------------
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
    this.dialogRef = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayMouseDown = this.handleOverlayMouseDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.previouslyFocused = document.activeElement;
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (this.dialogRef.current) {
      this.dialogRef.current.focus();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = this.previousBodyOverflow || '';
    if (this.previouslyFocused && typeof this.previouslyFocused.focus === 'function') {
      this.previouslyFocused.focus();
    }
  }

  handleKeyDown(event) {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  }

  // Only closes when the mousedown started on the backdrop itself, not
  // when a drag/selection that began inside the panel happens to end
  // up released over the backdrop.
  handleOverlayMouseDown(event) {
    if (event.target === this.overlayRef.current) {
      this.props.onClose();
    }
  }

  render() {
    const { onClose, labelledBy, children, className = '' } = this.props;

    return (
      <div className="modal-overlay" ref={this.overlayRef} onMouseDown={this.handleOverlayMouseDown}>
        <div
          className={`modal-dialog ${className}`.trim()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          ref={this.dialogRef}
          tabIndex={-1}
        >
          <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
            ✕
          </button>
          {/* Scrolls independently of the close button above, so a tall
              panel (a big product image plus a full spec sheet) can
              scroll internally without carrying the close control away
              with it — the button stays fixed in the same corner the
              whole time. */}
          <div className="modal-dialog__scroll">{children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
