import React from 'react';
import Button from '../common/Button.jsx';
import Badge from '../common/Badge.jsx';
import RotatingBadge from '../common/RotatingBadge.jsx';
import wireSpoolImg from '../../assets/images/photos/wire-spool.jpg';
import motorImg from '../../assets/images/photos/motor.jpg';
import electronicsImg from '../../assets/images/photos/electronics-pcb.jpg';
import factoryFloorImg from '../../assets/images/photos/factory-floor.jpg';
import './home.css';

/**
 * Narrative stages shown over the plant-assembly frame sequence as the
 * visitor scrolls — each tied to a stretch of scroll progress (0–1),
 * so the copy on screen always matches what the footage is building
 * at that moment. Kept as plain data so the story can be edited
 * without touching the scroll wiring below.
 */
const STAGES = [
  {
    kicker: 'Engineered for Reliability',
    text: 'Wire enamels, insulating varnishes and resin systems trusted by motor, transformer and electronics manufacturers across India.',
    range: [0, 0.2],
  },
  {
    kicker: 'Precision-Built Impregnation Tanks',
    text: 'Every Vacuum Pressure Impregnation vessel we manufacture is built to hold consistent pressure and temperature, batch after batch.',
    range: [0.2, 0.42],
  },
  {
    kicker: 'Fully Integrated Process Piping',
    text: 'Dip, drain and cure lines are engineered together, so resin flows exactly where — and when — your process needs it.',
    range: [0.42, 0.64],
  },
  {
    kicker: 'Monitored Control Systems',
    text: 'Every plant we build ships with the gauges, valves and controls to keep quality repeatable on the shop floor.',
    range: [0.64, 0.86],
  },
  {
    kicker: 'From Our Plant to Your Line',
    text: 'The same engineering discipline goes into every litre of varnish and resin we manufacture.',
    range: [0.86, 1.001],
  },
];

// Lazily loaded so the frame-sequence wiring only downloads on the
// Home page, and code-splits away from the rest of the app.
const PlantSequence = React.lazy(() => import('./PlantSequence.jsx'));

/**
 * HeroSection
 * ------------------------------------------------------------------
 * Home page hero: a fixed intro (badges + headline) followed by a
 * scroll-driven frame sequence of a real Dr. Ultra VPI plant build,
 * used as a full-bleed background with the caption text overlaid on
 * top of it. As the visitor scrolls through the tall track, the
 * footage advances frame by frame while the caption beside it
 * advances through STAGES in sync. Falls back to the original static
 * photo layout when the visitor has requested reduced motion, or if
 * the frame sequence fails to load.
 * ------------------------------------------------------------------
 */
class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.useSequence = typeof window !== 'undefined' && !reducedMotion;

    this.state = { activeStage: 0 };
    this.trackRef = React.createRef();
    this.plantRef = React.createRef();
    this.ticking = false;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleSequenceFailure = this.handleSequenceFailure.bind(this);
  }

  componentDidMount() {
    if (!this.useSequence) return;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  }

  handleSequenceFailure() {
    this.useSequence = false;
    this.forceUpdate();
  }

  handleScroll() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.ticking = false;
      const track = this.trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

      this.plantRef.current?.updateProgress(progress);

      const stageIndex = STAGES.findIndex(
        (stage) => progress >= stage.range[0] && progress < stage.range[1]
      );
      const resolved = stageIndex === -1 ? STAGES.length - 1 : stageIndex;
      if (resolved !== this.state.activeStage) {
        this.setState({ activeStage: resolved });
      }
    });
  }

  renderFallback() {
    return (
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badges">
            <Badge variant="navy">🇩🇪 German Technology</Badge>
            <Badge variant="purple">🇮🇳 Make in India</Badge>
          </div>
          <div className="hero__title-wrap">
            <RotatingBadge text="Best Varnish Company 2026" />
            <h1 className="hero__title">
              Electrical Insulating <span className="hero__title-accent">Varnishes &amp; Resins</span>
            </h1>
          </div>
          <p className="hero__subtitle">{STAGES[0].text}</p>
          <div className="hero__actions">
            <Button to="/products" variant="primary">
              Explore Products
            </Button>
            <Button to="/contact" variant="outline-dark">
              Get a Quote
            </Button>
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__photo-grid">
            <img src={wireSpoolImg} alt="Copper magnet wire coated with Dr. Ultra wire enamel" />
            <img src={motorImg} alt="Electric motor insulated with Dr. Ultra varnish systems" />
            <img src={electronicsImg} alt="Electronic assembly protected with Dr. Ultra resin systems" />
            <img src={factoryFloorImg} alt="Dr. Ultra production facility floor" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.useSequence) {
      return (
        <section className="hero">
          {this.renderFallback()}
        </section>
      );
    }

    const { activeStage } = this.state;

    return (
      <section className="hero hero--sequence">
        <div className="plantseq-track" ref={this.trackRef}>
          <div className="plantseq-sticky">
            <div className="plantseq-bg">
              <React.Suspense fallback={null}>
                <PlantSequence ref={this.plantRef} onFailure={this.handleSequenceFailure} />
              </React.Suspense>
            </div>

            {/* Centered independently of the left-aligned caption column
                below it — sits directly in .plantseq-sticky (not inside
                .plantseq-overlay) so it can be centered across the full
                hero width rather than confined to the overlay's 620px
                column. Carries the whole "first frame": badges, headline,
                the opening stage's kicker/copy (STAGES[0], hardcoded here
                rather than pulled from the crossfading .plantseq-stages
                loop below, since it never needs to crossfade against
                anything — it's simply shown or hidden as a unit), and the
                CTA buttons + progress dots, all fading out together once
                the visitor scrolls past the first stage. */}
            <div className={`plantseq-intro ${activeStage > 0 ? 'is-hidden' : ''}`}>
              <div className="hero__badges">
                <Badge variant="navy">🇩🇪 German Technology</Badge>
                <Badge variant="purple">🇮🇳 Make in India</Badge>
              </div>
              <div className="hero__title-wrap">
                <RotatingBadge text="Best Varnish Company 2026" />
                <h1 className="hero__title">
                  Electrical Insulating <span className="hero__title-accent">Varnishes &amp; Resins</span>
                </h1>
              </div>
              <span className="plantseq-kicker">{STAGES[0].kicker}</span>
              <p className="plantseq-copy">{STAGES[0].text}</p>
              <div className="hero__actions">
                <Button to="/products" variant="primary">
                  Explore Products
                </Button>
                <Button to="/contact" variant="outline-dark">
                  Get a Quote
                </Button>
              </div>
              <div className="plantseq-dots" role="presentation">
                {STAGES.map((stage, index) => (
                  <span
                    key={stage.kicker}
                    className={`plantseq-dot ${index === activeStage ? 'is-active' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* The outer `.container` is the same element the navbar's
                logo sits inside — centered, `--container-max` wide,
                with `.container`'s own edge padding — so the caption
                column's left edge starts at exactly the same x as the
                logo on every viewport, including ones wider than
                `--container-max` where the navbar's container no
                longer touches the raw viewport edge. `.plantseq-overlay`
                nested inside it only needs to add its own extra
                breathing room and cap its width; it doesn't have to
                fight `.container`'s centering the way a single element
                carrying both classes used to. */}
            <div className="container">
              <div className="plantseq-overlay">
                <div className="plantseq-stages">
                  {STAGES.map((stage, index) => {
                    // Stage 0's kicker/copy render inside .plantseq-intro
                    // above instead, as part of the centered first frame.
                    if (index === 0) return null;
                    return (
                      <div
                        key={stage.kicker}
                        className={`plantseq-stage ${index === activeStage ? 'is-active' : ''}`}
                        aria-hidden={index !== activeStage}
                      >
                        <span className="plantseq-kicker">{stage.kicker}</span>
                        <p className="plantseq-copy">{stage.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <span className={`plantseq-scroll-hint ${activeStage > 0 ? 'is-hidden' : ''}`}>
              Scroll to build the plant ↓
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
