import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Badge from '../components/common/Badge.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import GradeSelectionSteps from '../components/about/GradeSelectionSteps.jsx';
import teamCollaborationImg from '../assets/images/photos/team-collaboration.svg';
import '../components/about/about.css';

/**
 * AboutPage
 * ------------------------------------------------------------------
 * Company background, mission & vision, differentiators, and trust
 * badges — everything a prospective client needs to know about who
 * Dr. Ultra is before looking at products or services.
 * ------------------------------------------------------------------
 */
class AboutPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="About Us"
          description="Learn about Dr. Ultra — a manufacturer of electrical insulating varnishes, wire enamels and resin systems, built on German technology and made in India."
          path="/about"
        />

        <div className="page-header">
          <div className="container">
            <span className="breadcrumb">About Dr. Ultra</span>
            <h1>Engineered for Reliability, Built to Protect</h1>
            <p>
              A closer look at who we are, what drives us, and the technology behind every
              litre of varnish and resin we manufacture.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container about-intro">
            <div>
              <div className="about-intro__flags">
                <Badge variant="navy">🇩🇪 German Technology</Badge>
                <Badge variant="purple">🇮🇳 Make in India</Badge>
              </div>
              <h2>Who We Are</h2>
              <p>
                Dr. Ultra manufactures electrical insulating varnishes, resins and wire enamels
                used to insulate and protect the coils, stators, rotors and electronic
                assemblies inside motors, generators, transformers and consumer electronics.
                Our process technology draws on German engineering standards, manufactured
                locally in India to serve winding shops, OEMs and service centres with
                dependable supply and fast local support.
              </p>
              <p>
                From wire enamels for magnet wire, to impregnating and air-drying varnishes
                across Class B, F and H thermal ratings, to resin systems that protect
                electronic circuits — our different business lines cover the insulation needs
                of an electrical machine end-to-end, right through to the Vacuum Pressure
                Impregnation plants we also design and manufacture.
              </p>
            </div>
            <div className="about-intro__image">
              <img
                src={teamCollaborationImg}
                alt="Illustration of the Dr. Ultra team collaborating"
              />
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <SectionHeading
              eyebrow="Our Purpose"
              title="Mission & Vision"
            />
            <div className="mission-vision">
              <div className="mission-vision__card">
                <h3>Our Mission</h3>
                <p>
                  To manufacture high-performance, reliable insulating varnishes and resin
                  systems that protect electrical and electronic equipment throughout its
                  service life — supported by responsive, knowledgeable technical service.
                </p>
              </div>
              <div className="mission-vision__card">
                <h3>Our Vision</h3>
                <p>
                  To be the trusted insulation-materials partner for motor, transformer and
                  electronics manufacturers across India and beyond — known for consistent
                  quality, innovation, and dependable supply.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title="We Don't Just Sell Varnish — We Help You Choose the Right One"
              subtitle="Our technical team guides every specification through three simple checks."
            />
            <GradeSelectionSteps />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CtaBanner
              title="Want to know more about our manufacturing process?"
              text="Reach out — our team is happy to walk you through our facility, process, and quality standards."
              buttonLabel="Contact Us"
            />
          </div>
        </section>
      </>
    );
  }
}

export default AboutPage;
