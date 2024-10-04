import React from 'react';

function ClearButton() {
  const handleClear = () => {
    localStorage.clear();
    alert('Local storage cleared!');
  };

  return <button onClick={handleClear}>Clear Database</button>;
}

export default ClearButton;
