import React from 'react';

function Textarea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      rows="10"
      cols="50"
      placeholder="Enter JSON here..."
    />
  );
}

export default Textarea;
