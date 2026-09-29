import React from 'react';
import SEO from '../components/common/SEO.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import HighlightsStrip from '../components/home/HighlightsStrip.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import Button from '../components/common/Button.jsx';
import { businessLines } from '../data/services.js';
import { impregnatingBakingVarnishes, airDryingVarnishes } from '../data/products.js';

/**
 * HomePage
 * ------------------------------------------------------------------
 * Landing page: hero, "why choose us" highlights, business-line
 * preview, flagship product teaser, certifications and a closing CTA.
 * ------------------------------------------------------------------
 */
class HomePage extends React.Component {
  render() {
    const featuredProducts = [
      impregnatingBakingVarnishes[0],
      impregnatingBakingVarnishes[7],
      airDryingVarnishes[0],
    ];

    return (
      <>
        <SEO
          title="Home"
          description="Dr. Ultra manufactures high-performance electrical insulating varnishes, wire enamels, and resin systems for motors, transformers and electronics — German technology, made in India."
          path="/"
        />

        <HeroSection />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Why Dr. Ultra"
              title="Built on Innovation, Backed by Reliability"
              subtitle="Four principles that guide every batch we manufacture."
            />
            <HighlightsStrip />
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <SectionHeading
              eyebrow="What We Offer"
              title="Enamels, Varnishes & Resin Systems Across Business Lines"
              subtitle="From wire enamels to electronics protection resins, delivered through our different business lines."
            />
            <div className="grid grid--4">
              {businessLines.map((line) => (
                <ServiceCard key={line.key} {...line} />
              ))}
            </div>
            <div className="text-center mt-40">
              <Button to="/services" variant="outline-dark">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Flagship Grades"
              title="A Grade Engineered for Every Duty"
              subtitle="A glimpse of our impregnating and air-drying varnish range — see the full catalogue with specs, thinners and applications."
            />
            <div className="grid grid--3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.code} {...product} />
              ))}
            </div>
            <div className="text-center mt-40">
              <Button to="/products" variant="primary">
                View Full Product Catalogue
              </Button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CtaBanner />
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
