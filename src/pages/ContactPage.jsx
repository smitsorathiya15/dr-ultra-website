import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ContactInfoCard from '../components/contact/ContactInfoCard.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import MapEmbed from '../components/contact/MapEmbed.jsx';
import siteConfig from '../config/siteConfig.js';
import '../components/contact/contact.css';

/**
 * ContactPage
 * ------------------------------------------------------------------
 * Contact details, location map, and the working inquiry form wired
 * to the Node.js backend (per the project proposal). All contact
 * details are sourced from siteConfig — update the address/phone in
 * one place (src/config/siteConfig.js) and it updates everywhere.
 * ------------------------------------------------------------------
 */
class ContactPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Contact Us"
          description="Get in touch with Dr. Ultra for product inquiries, technical grade recommendations, samples and bulk orders."
          path="/contact"
        />

        <div className="page-header">
          <div className="container">
            <span className="breadcrumb">Get In Touch</span>
            <h1>Contact Dr. Ultra</h1>
            <p>Have a question about a grade, a quote, or a bulk order? Send us a message and our team will get back to you shortly.</p>
          </div>
        </div>

        <section className="section">
          <div className="container contact-layout">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Reach Us"
                title="Contact Information"
              />
              <div className="contact-info-list">
                <ContactInfoCard icon="📍" title="Address">
                  {siteConfig.contact.address}
                </ContactInfoCard>
                <ContactInfoCard icon="✉️" title="Email">
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </ContactInfoCard>
                <ContactInfoCard icon="📞" title="Phone">
                  {siteConfig.contact.phones.map((phone, i) => (
                    <React.Fragment key={phone}>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                      {i < siteConfig.contact.phones.length - 1 ? ' | ' : ''}
                    </React.Fragment>
                  ))}
                </ContactInfoCard>
              </div>

              <MapEmbed />
            </div>

            <div className="contact-form-card">
              <SectionHeading align="left" eyebrow="Send a Message" title="Request a Quote or Ask a Question" />
              <ContactForm />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContactPage;
