import React from 'react';

/**
 * PlantSequence
 * ------------------------------------------------------------------
 * Draws a real photographed/rendered frame sequence of a Dr. Ultra VPI
 * plant assembling itself, one frame per tick of scroll — the same
 * technique used for Apple-style product reveals. There is no 3D
 * object or WebGL scene here on purpose: every pixel on screen is an
 * actual frame from the reference footage, decoded onto a <canvas>
 * and cover-fitted to whatever space it's given.
 *
 * The parent (HeroSection) owns scroll math and calls
 * `updateProgress(0..1)` on this component's ref with the raw scroll
 * fraction. Rather than snapping straight to that frame, a small
 * requestAnimationFrame loop eases a `displayProgress` value toward
 * it every frame — the same damped-follow trick the original
 * Three.js hero used — so a fast flick of the scroll wheel doesn't
 * teleport the picture, it catches up smoothly over a few frames.
 * ------------------------------------------------------------------
 */
const FRAME_COUNT = 240;
// Native resolution of the source reference video — frames were
// previously downscaled to 1120x630 on extraction, which left them
// visibly soft once the canvas scaled them back up on any screen
// wider than ~1120px. Re-extracted at the source's full 1280x720 so
// there's no unnecessary softness baked in before the browser's own
// scaling takes over.
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 720;
const FRAME_PATH = (index) => `/plant-sequence/frame-${String(index + 1).padStart(4, '0')}.jpg`;

// How quickly displayProgress catches up to targetProgress, as a
// fraction closed per second (not per frame, so it stays consistent
// regardless of refresh rate). Lower = smoother/laggier, higher =
// snappier/closer to raw scroll position.
const CATCH_UP_RATE = 4.2;

class PlantSequence extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.images = new Array(FRAME_COUNT);
    this.loaded = new Array(FRAME_COUNT).fill(false);
    this.currentIndex = -1;
    this.targetProgress = 0;
    this.displayProgress = 0;
    this.ready = false;
    this.failed = false;
    this.resizeObserver = null;
    this.frameId = null;
    this.lastTime = null;

    this.handleResize = this.handleResize.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.preload();

    if (typeof ResizeObserver !== 'undefined' && this.wrapperRef.current) {
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.wrapperRef.current);
    } else {
      window.addEventListener('resize', this.handleResize);
    }

    this.frameId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } else {
      window.removeEventListener('resize', this.handleResize);
    }
    this.images.forEach((img) => {
      if (img) img.onload = null;
    });
  }

  preload() {
    let firstFrameFailed = false;

    for (let i = 0; i < FRAME_COUNT; i += 1) {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        this.loaded[i] = true;
        if (!this.ready && i === 0) {
          this.ready = true;
          this.forceUpdate();
        }
      };
      img.onerror = () => {
        if (i === 0) {
          firstFrameFailed = true;
          this.failed = true;
          this.props.onFailure?.();
        }
      };
      img.src = FRAME_PATH(i);
      this.images[i] = img;
    }

    // Belt-and-braces: if even the very first frame never loads (bad
    // deploy, blocked path, etc.), bail out to the static fallback
    // hero rather than showing an empty canvas forever.
    window.setTimeout(() => {
      if (!this.ready && !firstFrameFailed) {
        this.failed = true;
        this.props.onFailure?.();
      }
    }, 6000);
  }

  handleResize() {
    this.currentIndex = -1; // force the next tick to redraw at the new size
  }

  /** Public imperative API used by HeroSection's scroll handler. */
  updateProgress(value) {
    if (this.failed) return;
    this.targetProgress = Math.min(1, Math.max(0, value));
  }

  /** Nearest loaded frame to `index`, so a not-yet-downloaded target
   *  frame still paints something instead of freezing on a stale one. */
  nearestLoadedIndex(index) {
    if (this.loaded[index]) return index;
    for (let step = 1; step < FRAME_COUNT; step += 1) {
      const lower = index - step;
      const upper = index + step;
      if (lower >= 0 && this.loaded[lower]) return lower;
      if (upper < FRAME_COUNT && this.loaded[upper]) return upper;
    }
    return null;
  }

  tick(time) {
    this.frameId = requestAnimationFrame(this.tick);
    if (!this.ready || this.failed) {
      this.lastTime = time;
      return;
    }

    const delta = this.lastTime ? Math.min(0.1, (time - this.lastTime) / 1000) : 0;
    this.lastTime = time;

    const diff = this.targetProgress - this.displayProgress;
    if (Math.abs(diff) < 0.0008) {
      this.displayProgress = this.targetProgress;
    } else {
      this.displayProgress += diff * Math.min(1, delta * CATCH_UP_RATE);
    }

    const targetIndex = Math.round(this.displayProgress * (FRAME_COUNT - 1));
    const drawIndex = this.nearestLoadedIndex(targetIndex);
    if (drawIndex !== null && drawIndex !== this.currentIndex) {
      this.currentIndex = drawIndex;
      this.drawFrame(drawIndex);
    }
  }

  drawFrame(index, forceResize = false) {
    const canvas = this.canvasRef.current;
    const img = this.images[index];
    const wrapper = this.wrapperRef.current;
    if (!canvas || !img || !img.complete || !wrapper) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = wrapper.clientWidth;
    const cssHeight = wrapper.clientHeight;
    if (cssWidth === 0 || cssHeight === 0) return;

    if (forceResize || canvas.width !== Math.round(cssWidth * dpr)) {
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
    }

    const ctx = canvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Always scale to match the canvas's full width, then center
    // vertically — the footage spans edge-to-edge horizontally on
    // every viewport, with no letterbox bars down the sides. On a
    // canvas proportionally wider than the 16:9-ish footage (a wide
    // desktop window, an ultrawide monitor) this means the frame is
    // scaled up past what "contain" used to use, so the top and
    // bottom get cropped slightly by the canvas's own bounds (no
    // explicit clip needed — drawImage never paints outside them).
    // On a canvas taller/narrower than the footage (a phone in
    // portrait, a tall narrow browser window) width was already the
    // limiting axis even under the old contain math, so nothing
    // changes there: the whole machine still fits with no side
    // cropping — this is what the v1.10 fix relied on, and it's
    // preserved because that case never takes the "fit to height"
    // branch that used to pillarbox wide viewports.
    const frameRatio = FRAME_WIDTH / FRAME_HEIGHT;
    const drawWidth = canvas.width;
    const drawHeight = drawWidth / frameRatio;
    const dx = 0;
    const dy = (canvas.height - drawHeight) / 2;
    ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
  }

  render() {
    return (
      <div className="plantseq-canvas-wrap" ref={this.wrapperRef} aria-hidden="true">
        <canvas className="plantseq-canvas" ref={this.canvasRef} />
      </div>
    );
  }
}

export default PlantSequence;
