import React from 'react';

function PrettyPrint({ json }) {
  return <pre>{JSON.stringify(json, null, 2)}</pre>;
}

export default PrettyPrint;
