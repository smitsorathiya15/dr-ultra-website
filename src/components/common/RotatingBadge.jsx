import React from 'react';
import flaskIcon from '../../assets/images/flask-icon.png';

let idCounter = 0;

// Full circumference of the ring path below (2 * π * r, r = 40, in the
// SVG's own 0–100 user-unit space) — used as the basis for `textLength`
// so a single pass of the phrase is stretched to wrap the *entire*
// circle edge-to-edge instead of leaving a long blank arc, per client
// direction ("full round shape"). Held a few units short of the true
// 251.3 circumference so the text's start and end don't visually
// collide at the seam.
const RING_TEXT_LENGTH = 246;

/**
 * RotatingBadge
 * ------------------------------------------------------------------
 * A circular "seal" badge — text curving around the rim spins slowly
 * and continuously while the client's own flask icon sits fixed in
 * the middle, unaffected by the rotation. Modeled on the classic
 * rotating-stamp badge pattern (e.g. "Est. 2012" seals), requested by
 * the client from a reference recording of one in use elsewhere.
 *
 * The curved text is real SVG <text> on a <textPath> (not an image),
 * so it stays crisp at any size and the words remain readable to
 * screen readers via the wrapper's aria-label — the SVG itself is
 * marked aria-hidden since the visible ring text would otherwise be
 * announced a second time.
 *
 * The phrase appears once around the ring (per client direction) but
 * is stretched via `textLength`/`lengthAdjust` to span the full circle
 * rather than leaving a blank arc — this makes the exact rendered
 * spacing depend on `RING_TEXT_LENGTH` above rather than the font's
 * own natural glyph widths, which is what makes a single pass read as
 * a complete ring instead of a short arc of text.
 *
 * Sizing is left to CSS (`.rotating-badge`'s own clamp()) by default
 * so it scales with the viewport like the rest of the hero; the
 * `size` prop is only for a caller that needs a fixed pixel size
 * instead.
 * ------------------------------------------------------------------
 */
class RotatingBadge extends React.Component {
  constructor(props) {
    super(props);
    // Unique per instance (not just per render) so two badges on the
    // same page never collide on the <path> id the <textPath> below
    // resolves by reference — a stale render's id would otherwise
    // make every instance's ring show the first instance's path.
    idCounter += 1;
    this.pathId = `rotating-badge-path-${idCounter}`;
  }

  render() {
    const { text, size, className = '' } = this.props;
    const style = size ? { width: size, height: size } : undefined;

    return (
      <div
        className={`rotating-badge ${className}`.trim()}
        style={style}
        role="img"
        aria-label={text}
      >
        <svg className="rotating-badge__ring" viewBox="0 0 100 100" aria-hidden="true">
          <path
            id={this.pathId}
            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="none"
          />
          <text>
            <textPath
              href={`#${this.pathId}`}
              startOffset="0%"
              textLength={RING_TEXT_LENGTH}
              lengthAdjust="spacingAndGlyphs"
            >
              {text}
            </textPath>
          </text>
        </svg>
        <span className="rotating-badge__center">
          <img
            className="rotating-badge__center-icon"
            src={flaskIcon}
            alt=""
            loading="lazy"
          />
        </span>
      </div>
    );
  }
}

export default RotatingBadge;
