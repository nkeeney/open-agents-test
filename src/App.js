import React, { useState, useEffect } from 'react';
import Textarea from './Textarea';
import PrettyPrint from './PrettyPrint';
import DataTable from './DataTable';
import PieChart from './PieChart';
import ClearButton from './ClearButton';
import ProcessButton from './ProcessButton';
import ErrorAlert from './ErrorAlert';
import generateGUID from './generateGUID';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedJson, setParsedJson] = useState({});
  const [error, setError] = useState('');
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    // Load data from local storage on component mount
    const keys = Object.keys(localStorage);
    const data = keys.map(key => JSON.parse(localStorage.getItem(key)));
    console.log('Loaded data from local storage:', data);
    setLocalStorageData(data);
  }, []);

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleProcess = () => {
    try {
      const json = JSON.parse(jsonInput);
      const guid = generateGUID();
      localStorage.setItem(guid, JSON.stringify(json));
      setParsedJson(json);
      setError(''); // Clear any previous errors
      // Update local storage data
      const updatedData = [...localStorageData, json];
      console.log('Updated local storage data:', updatedData);
      setLocalStorageData(updatedData);
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
      <DataTable data={localStorageData} />
      <h2>Pie Chart</h2>
      <PieChart data={localStorageData} />
      <ClearButton />
    </div>
  );
}

export default App;
