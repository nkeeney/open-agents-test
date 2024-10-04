import React from 'react';

function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Enable Header</th>
          <th>Call Count</th>
          <th>Features</th>
          <th>Custom CSS</th>
          <th>External URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.enableHeader ? 'Yes' : 'No'}</td>
            <td>{item.callCount}</td>
            <td>{item.features.map((feature, i) => (
              <div key={i}>{JSON.stringify(feature)}</div>
            ))}</td>
            <td>{item.customCSS}</td>
            <td><a href={item.externalURL} target="_blank" rel="noopener noreferrer">Link</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
