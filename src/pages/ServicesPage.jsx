import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import Card from '../components/common/Card.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import { businessLines, additionalServices } from '../data/services.js';
import vpiTwinTankFullImg from '../assets/images/photos/vpi-twin-tank-full.jpg';
import vpiAssemblyFullImg from '../assets/images/photos/vpi-assembly-full.jpg';
import '../components/services/services.css';

/**
 * ServicesPage
 * ------------------------------------------------------------------
 * Full breakdown of Dr. Ultra's business lines and additional
 * services (VPI plant manufacturing, consulting, bulk supply).
 * ------------------------------------------------------------------
 */
class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    // Index 0 (the twin-tank photo) is expanded by default — matching
    // its hover state — rather than the two panels starting even.
    // Hovering the *other* panel is what shifts the expansion over to
    // it; leaving the whole banner returns to this default.
    this.state = { expandedPanel: 0 };
    this.handleBannerLeave = this.handleBannerLeave.bind(this);
  }

  handleBannerLeave() {
    this.setState({ expandedPanel: 0 });
  }

  handlePanelEnter(index) {
    this.setState({ expandedPanel: index });
  }

  render() {
    return (
      <>
        <SEO
          title="Services"
          description="Explore Dr. Ultra's business lines: wire enamels, electrical insulating varnishes, electronics protection resins, flooring & coating solutions, and VPI plant manufacturing."
          path="/services"
        />

        <div className="page-header">
          <div className="container">
            <span className="breadcrumb">What We Do</span>
            <h1>Our Business Lines &amp; Services</h1>
            <p>Enamels, varnishes and resin systems delivered through four core business lines — plus the equipment and expertise to put them to work.</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Business Lines"
              title="We Offer Enamels, Varnishes & Resin Systems"
              subtitle="Through our different business lines, covering the insulation needs of an electrical or electronic assembly end-to-end."
            />
            <div className="grid grid--4">
              {businessLines.map((line) => (
                <ServiceCard key={line.key} {...line} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <SectionHeading
              eyebrow="Beyond Varnish"
              title="Additional Services"
              subtitle="Equipment manufacturing, technical consulting, and dependable supply — the rest of what a production line needs from an insulation-materials partner."
            />
            <div className="additional-services__grid">
              {additionalServices.map((service) => (
                <Card key={service.key} icon={service.icon} title={service.title} text={service.text} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Equipment Manufacturing"
              title="Vacuum Pressure Impregnation (VPI) Plants"
              subtitle="We also design and manufacture the impregnation plant machinery your production line runs on."
            />
            {/* An accordion, not a fixed 50/50 split: each panel is a flex
                item whose flex-grow widens the panel matching
                state.expandedPanel (see .service-banner__panel.is-expanded
                in services.css) — revealing more of that photo's width,
                since object-fit: cover crops the sides at the narrower
                size — while the other panel yields width back. Panel 0
                is expanded by default; entering the other panel shifts
                the expansion to it, and leaving the banner entirely
                (onMouseLeave here, not per-panel) returns to that
                default rather than freezing on whichever was last
                hovered. On touch, there's no hover to move the
                expansion at all, so it simply stays on the default. */}
            <div
              className="service-banner service-banner--accordion"
              onMouseLeave={this.handleBannerLeave}
            >
              <div
                className={`service-banner__panel ${this.state.expandedPanel === 0 ? 'is-expanded' : ''}`}
                onMouseEnter={() => this.handlePanelEnter(0)}
              >
                <img
                  src={vpiTwinTankFullImg}
                  alt="Vacuum Pressure Impregnation twin-tank system manufactured by Dr. Ultra"
                />
              </div>
              <div
                className={`service-banner__panel ${this.state.expandedPanel === 1 ? 'is-expanded' : ''}`}
                onMouseEnter={() => this.handlePanelEnter(1)}
              >
                <img
                  src={vpiAssemblyFullImg}
                  alt="Vacuum Pressure Impregnation plant control and processing unit"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <CtaBanner
              title="Not sure which service fits your process?"
              text="Tell us about your winding, dip, or trickle process and we'll recommend the right combination."
              buttonLabel="Talk to Our Team"
            />
          </div>
        </section>
      </>
    );
  }
}

export default ServicesPage;
