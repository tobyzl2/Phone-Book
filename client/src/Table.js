import React from 'react';

class Table extends React.Component {
  buildTableHeader(headers) {
    const tableHeader = (
      <tr>
        {headers.map((header, colIndex) => {
          return (
            <th key={colIndex.toString()} scope='col'>
              {header}
            </th>
          );
        })}
      </tr>
    );

    return tableHeader;
  }

  buildTableRow(value, headers) {
    const tableRow = headers.map((header, colIndex) => {
      return <td key={colIndex.toString()}>{value[header]}</td>;
    });

    return tableRow;
  }

  buildTableRows(data, headers) {
    const tableRows = data.map((value, rowIndex) => {
      return <tr key={rowIndex}>{this.buildTableRow(value, headers)}</tr>;
    });

    return tableRows;
  }

  render() {
    const data = this.props.data; // Array of entry objects

    if (typeof data === 'undefined' || data.length === 0) {
      return <div />;
    }

    const headers = Object.keys(data[0]); // Array of headers
    return (
      <div>
        <table className='table table-striped table-hover'>
          <thead>{this.buildTableHeader(headers)}</thead>
          <tbody>{this.buildTableRows(data, headers)}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
