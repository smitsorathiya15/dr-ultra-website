import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import Badge from '../components/common/Badge.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import ThermalClassGuide from '../components/products/ThermalClassGuide.jsx';
import GradeSelectionSteps from '../components/about/GradeSelectionSteps.jsx';
import DataTable from '../components/products/DataTable.jsx';
import '../components/products/products.css';

import {
  impregnatingBakingVarnishes,
  impregnatingResins,
  airDryingVarnishes,
  specialtyResins,
  packagingOptions,
  thinnerGuide,
  safetyNotes,
} from '../data/products.js';

const PACKAGING_COLUMNS = [
  { key: 'size', label: 'Pack Size' },
  { key: 'packaging', label: 'Packaging' },
  { key: 'use', label: 'Typical Use' },
];

const THINNER_COLUMNS = [
  { key: 'code', label: 'Thinner' },
  { key: 'matches', label: 'Matched Grades' },
];

/**
 * ProductsPage
 * ------------------------------------------------------------------
 * The full product catalogue: thermal-class quick guide, grade
 * selection steps, every varnish/resin grade grouped by category,
 * and reference tables for packaging, thinners and storage/safety.
 * ------------------------------------------------------------------
 */
class ProductsPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Products"
          description="Full range of Dr. Ultra electrical insulating varnishes, wire enamels and resin systems — impregnating baking varnishes, air-drying & anti-tracking varnishes, and specialty resins, Class B/F/H."
          path="/products"
        />

        <div className="page-header">
          <div className="container">
            <span className="breadcrumb">Product Catalogue</span>
            <h1>Insulating Varnishes &amp; Resin Systems</h1>
            <p>The complete Dr. Ultra grade range — impregnating and air-drying varnishes, specialty resins, and everything you need to specify the right one.</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Start Here" title="Choose by Thermal Class" />
            <ThermalClassGuide />
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <SectionHeading
              eyebrow="Choosing a Grade"
              title="Three Checks Before You Specify"
            />
            <GradeSelectionSteps />
          </div>
        </section>

        <section className="section" id="impregnating-baking-varnishes">
          <div className="container">
            <SectionHeading
              eyebrow="Category"
              title="Impregnating Baking Varnishes"
              subtitle="Dip-and-bake and roll-dip grades for consolidating magnet wire in motors, generators and transformers."
            />
            <div className="grid grid--3">
              {impregnatingBakingVarnishes.map((product) => (
                <ProductCard key={product.code} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="impregnating-resins">
          <div className="container">
            <SectionHeading
              eyebrow="Category"
              title="Impregnating Resins"
              subtitle="Solventless resin systems for trickle and vacuum pressure impregnation (VPI) processes."
            />
            <div className="simple-list-card">
              <ul>
                {impregnatingResins.map((resin) => (
                  <li key={resin}>{resin}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="air-drying-varnishes">
          <div className="container">
            <SectionHeading
              eyebrow="Category"
              title="Air Drying &amp; Anti-Tracking Varnishes"
              subtitle="Room-temperature curing finishing coats, insulating enamels, and high-creepage anti-tracking systems."
            />
            <div className="grid grid--3">
              {airDryingVarnishes.map((product) => (
                <ProductCard key={product.code} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="specialty-resins">
          <div className="container">
            <SectionHeading
              eyebrow="Category"
              title="Specialty Resin Systems"
              subtitle="Epoxy and silicone-based solventless systems for advanced impregnation and the highest thermal duties."
            />
            <div className="grid grid--2">
              {specialtyResins.map((resin) => (
                <div className="specialty-resin-card" key={resin.name}>
                  <span className="specialty-resin-card__icon" aria-hidden="true">
                    {resin.icon}
                  </span>
                  <div className="specialty-resin-card__body">
                    <div className="specialty-resin-card__header">
                      <h3>{resin.name}</h3>
                      {Array.isArray(resin.tags) && resin.tags.length > 0 && (
                        <div className="specialty-resin-card__tags">
                          {resin.tags.map((tag) => (
                            <Badge key={tag} variant={tag === 'Class C' ? 'navy' : 'default'}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-muted">{resin.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="packaging">
          <div className="container">
            <SectionHeading eyebrow="Reference" title="Packaging Options" />
            <DataTable columns={PACKAGING_COLUMNS} rows={packagingOptions} />
          </div>
        </section>

        <section className="section section--alt" id="thinners">
          <div className="container">
            <SectionHeading eyebrow="Reference" title="Matched Thinners" />
            <DataTable columns={THINNER_COLUMNS} rows={thinnerGuide} />
          </div>
        </section>

        <section className="section" id="storage-safety">
          <div className="container">
            <SectionHeading eyebrow="Reference" title="Storage &amp; Safety" />
            <div className="safety-notes">
              <ul>
                {safetyNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <CtaBanner
              title="Need a sample or a technical data sheet?"
              text="Tell us the grade and quantity you need — we'll get back with pricing and specifications."
              buttonLabel="Request a Sample"
            />
          </div>
        </section>
      </>
    );
  }
}

export default ProductsPage;
