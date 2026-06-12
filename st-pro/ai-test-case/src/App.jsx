import React, { useState } from 'react';

function TestcaseEngine() {
  const [file, setFile] = useState(null);
  const [inputType, setInputType] = useState('image');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  const handleTypeChange = (type) => {
    setInputType(type);
    setFile(null);
    setResult('');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;

    setIsProcessing(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('inputType', inputType);

    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult('An error occurred while generating test cases.');
    } finally {
      setIsProcessing(false); 
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 max-w-2xl mx-auto">

      <div className="flex gap-2">
        <button 
          onClick={() => handleTypeChange('image')}
          className={`p-2 rounded ${inputType === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Use Image
        </button>
        <button 
          onClick={() => handleTypeChange('audio')}
          className={`p-2 rounded ${inputType === 'audio' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Use Audio
        </button>
      </div>

      <input 
        type="file" 
        key={inputType}
        accept={inputType === 'image' ? 'image/*' : 'audio/*'} 
        onChange={handleFileChange} 
        disabled={isProcessing}
      />

      <button 
        onClick={handleSubmit} 
        disabled={!file || isProcessing}
        className={`p-2 rounded text-white ${isProcessing || !file ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'}`}
      >
        {isProcessing ? 'Analyzing and Generating...' : 'Generate Test Cases'}
      </button>

      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-50 whitespace-pre-wrap font-mono text-sm">
          {result}
        </div>
      )}
    </div>
  );
}

export default TestcaseEngine;