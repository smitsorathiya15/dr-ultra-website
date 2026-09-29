import React from 'react';

/**
 * DataTable
 * ------------------------------------------------------------------
 * Tiny, generic, reusable table renderer: pass column definitions
 * ({ key, label }) and row objects, get a styled, horizontally
 * scrollable table. Used for the packaging and thinner-guide tables,
 * and reusable for any future tabular data on the site.
 * ------------------------------------------------------------------
 */
class DataTable extends React.Component {
  render() {
    const { columns, rows } = this.props;

    return (
      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={row.id || index}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
