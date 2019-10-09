import React, {useState, useEffect } from 'react';
// import HomePage from './features/homepage';
import './App.css';
import Select from './components/Select';

function App() {
  const [values, setValues] = useState([])
  useEffect(()=>{
    console.log(values)
  })
  return (
    <div className="App">
      <header className="App-header">        
        <div>
      <Select

      />
    </div>
      </header>
    </div>
  );
}

export default App;
