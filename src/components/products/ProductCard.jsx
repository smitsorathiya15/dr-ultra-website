import React from 'react';
import Badge from '../common/Badge.jsx';
import Modal from '../common/Modal.jsx';
import './products.css';

/**
 * ProductCard
 * ------------------------------------------------------------------
 * Global reusable card for a single varnish/resin grade. Renders as a
 * short, scannable summary — image, code, thermal-class badge and
 * type — so a full grid of these fits on screen without the visitor
 * having to scroll through every spec and feature bullet just to
 * compare grades at a glance. The full detail (base, thinner,
 * viscosity, cure, feature bullets, applications) opens in a popup on
 * click, via the shared `Modal` component, styled to match the rest
 * of the site rather than introducing a new visual language.
 *
 * Self-contained (owns its own open/closed state) so every page that
 * renders a `ProductCard` — the full catalogue and the Home page's
 * "featured products" teaser alike — gets the popup for free with no
 * extra wiring at the call site.
 * ------------------------------------------------------------------
 */
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const { code, type, base, thinner, viscosity, cure, thermalClass, features, applications, image } =
      this.props;
    const { open } = this.state;
    const titleId = `product-modal-title-${code.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;

    return (
      <>
        <button type="button" className="product-card" onClick={this.openModal}>
          {image && (
            <div className="product-card__media">
              <img src={image} alt={`${code} — ${type}`} loading="lazy" />
            </div>
          )}
          <div className="product-card__body">
            <div className="product-card__header">
              <h3 className="product-card__code">{code}</h3>
              <Badge variant="navy">{thermalClass}</Badge>
            </div>
            <p className="product-card__type">{type}</p>
            <span className="product-card__view-link">
              View Full Details
              <span aria-hidden="true"> →</span>
            </span>
          </div>
        </button>

        {open && (
          <Modal onClose={this.closeModal} labelledBy={titleId} className="product-modal">
            {image && (
              <div className="product-modal__media">
                <img src={image} alt={`${code} — ${type}`} />
              </div>
            )}
            <div className="product-modal__body">
              <div className="product-card__header">
                <h2 className="product-card__code" id={titleId}>
                  {code}
                </h2>
                <Badge variant="navy">{thermalClass}</Badge>
              </div>
              <p className="product-card__type">{type}</p>

              <dl className="product-card__specs">
                <div>
                  <dt>Base</dt>
                  <dd>{base}</dd>
                </div>
                <div>
                  <dt>Thinner</dt>
                  <dd>{thinner}</dd>
                </div>
                <div>
                  <dt>Viscosity</dt>
                  <dd>{viscosity}</dd>
                </div>
                <div>
                  <dt>Cure</dt>
                  <dd>{cure}</dd>
                </div>
              </dl>

              {Array.isArray(features) && features.length > 0 && (
                <ul className="product-card__features">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}

              {applications && (
                <p className="product-card__applications">
                  <strong>Applications:</strong> {applications}
                </p>
              )}
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default ProductCard;
