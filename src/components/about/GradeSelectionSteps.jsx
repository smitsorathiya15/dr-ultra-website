import React from 'react';
import { gradeSelectionSteps } from '../../data/products.js';
import './about.css';

/**
 * GradeSelectionSteps
 * ------------------------------------------------------------------
 * Renders the "Choosing a Grade" 3-step guide from the technical
 * literature. Reused on the About page (as a differentiator — "we
 * guide you") and on the Products page (as a practical buying guide).
 * ------------------------------------------------------------------
 */
class GradeSelectionSteps extends React.Component {
  render() {
    return (
      <div className="steps-grid">
        {gradeSelectionSteps.map((step) => (
          <div className="step-card" key={step.step}>
            <span className="step-card__number">{step.step}</span>
            <h3 className="step-card__title">{step.title}</h3>
            <p className="step-card__text">{step.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GradeSelectionSteps;
