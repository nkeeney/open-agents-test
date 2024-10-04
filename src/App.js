import React, { useState } from 'react';
import Textarea from './Textarea';
import PrettyPrint from './PrettyPrint';
import DataTable from './DataTable';
import PieChart from './PieChart';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedJson, setParsedJson] = useState({});

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
    try {
      const json = JSON.parse(event.target.value);
      setParsedJson(json);
    } catch (error) {
      setParsedJson({});
    }
  };

  return (
    <div className="App">
      <h1>Config Analyzer</h1>
      <Textarea value={jsonInput} onChange={handleJsonChange} />
      <h2>Pretty Printed JSON</h2>
      <PrettyPrint json={parsedJson} />
      <h2>Data Table</h2>
      <DataTable data={Object.keys(parsedJson)} />
      <h2>Pie Chart</h2>
      <PieChart data={Object.keys(parsedJson)} />
    </div>
  );
}

export default App;
