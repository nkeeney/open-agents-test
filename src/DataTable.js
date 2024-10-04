import React from 'react';

function DataTable({ data }) {
  const countOccurrences = (arr) => {
    const counts = {};
    arr.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1;
    });
    return counts;
  };

  const occurrences = countOccurrences(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Occurrences</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(occurrences).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
