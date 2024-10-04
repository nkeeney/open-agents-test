import React, { useState } from 'react';
import Textarea from './Textarea';
import PrettyPrint from './PrettyPrint';
import DataTable from './DataTable';
import PieChart from './PieChart';
import ClearButton from './ClearButton';
import ProcessButton from './ProcessButton';
import ErrorAlert from './ErrorAlert';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedJson, setParsedJson] = useState({});
  const [error, setError] = useState('');

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleProcess = () => {
    try {
      const json = JSON.parse(jsonInput);
      setParsedJson(json);
      setError(''); // Clear any previous errors
    } catch (error) {
      setParsedJson({});
      setError(error.message); // Set the error message
    }
  };

  return (
    <div className="App">
      <h1>Config Analyzer</h1>
      <Textarea value={jsonInput} onChange={handleJsonChange} />
      <ProcessButton onProcess={handleProcess} />
      <ErrorAlert message={error} />
      <h2>Pretty Printed JSON</h2>
      <PrettyPrint json={parsedJson} />
      <h2>Data Table</h2>
      <DataTable data={Object.keys(parsedJson)} />
      <h2>Pie Chart</h2>
      <PieChart data={Object.keys(parsedJson)} />
      <ClearButton />
    </div>
  );
}

export default App;
