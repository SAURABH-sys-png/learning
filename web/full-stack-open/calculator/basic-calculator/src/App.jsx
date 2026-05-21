import { useState } from "react";

const Input = ({ value, onChange }) => (
  <input 
    type="number" 
    value={value} 
    onChange={onChange}
    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
    placeholder="Enter number"
  />
);

const Button = ({ onClick, Text }) => (
  <button 
    onClick={onClick}
    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/50"
  >
    {Text}
  </button>
);

const Display = ({ Text }) => (
  <div className="w-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border-2 border-purple-300 dark:border-purple-700 shadow-inner">
    <p className="text-center text-5xl font-bold text-purple-600 dark:text-purple-400">
      {Text}
    </p>
  </div>
);

const App = () => {
  const [count, setCounter] = useState(0);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const add = () => setCounter(Number(val1) + Number(val2));
  const subs = () => setCounter(Number(val1) - Number(val2));
  const multi = () => setCounter(Number(val1) * Number(val2));
  const divide = () => setCounter(Number(val1) / Number(val2));
  
  const reset = () => {
    setVal1(0);
    setVal2(0);
    setCounter(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
            Calculator
          </h1>
          <p className="text-gray-300 text-lg">Simple & Powerful</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                First Number
              </label>
              <Input value={val1} onChange={(e) => setVal1(e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Second Number
              </label>
              <Input value={val2} onChange={(e) => setVal2(e.target.value)} />
            </div>
          </div>

          <div className="pt-4">
            <Display Text={count} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button onClick={add} Text="+ Add" />
            <Button onClick={subs} Text="- Subtract" />
            <Button onClick={multi} Text="× Multiply" />
            <Button onClick={divide} Text="÷ Divide" />
          </div>

          <button 
            onClick={reset}
            className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default App;
