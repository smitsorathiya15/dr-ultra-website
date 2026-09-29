import React from 'react';
import { thermalClasses } from '../../data/products.js';

/**
 * ThermalClassGuide
 * ------------------------------------------------------------------
 * Displays the three insulation thermal classes (B/F/H) with the
 * grades that belong to each, straight from the technical literature.
 * ------------------------------------------------------------------
 */
class ThermalClassGuide extends React.Component {
  render() {
    return (
      <div className="thermal-class-grid">
        {thermalClasses.map((tc) => (
          <div className="thermal-class-card" key={tc.key}>
            <h3>{tc.label}</h3>
            <p>{tc.description}</p>
            <div className="thermal-class-card__grades">
              {tc.grades.map((grade) => (
                <span key={grade}>{grade}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ThermalClassGuide;
