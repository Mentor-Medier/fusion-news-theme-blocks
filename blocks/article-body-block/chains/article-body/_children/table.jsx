import React from 'react';
import unescapeHtml from '../shared/unescape-html';

const Table = ({ element }) => {
  const { header, rows } = element;

  const tableHeaders = header.map((headerItem) => (
    <th
      key={headerItem._id}
      dangerouslySetInnerHTML={{ __html: unescapeHtml(headerItem.content) }}
      aria-label="See content for column"
    />
  ));

  const tableRows = rows.map((row) => {
    let keys;
    const cells = row.map((item) => {
      keys += item._id;
      return (
        <td
          key={item._id}
          dangerouslySetInnerHTML={{ __html: unescapeHtml(item.content) }}
        />
      );
    });
    return <tr key={keys}>{cells}</tr>;
  });

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
