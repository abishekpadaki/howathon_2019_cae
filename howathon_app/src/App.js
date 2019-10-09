import React, {useState, useEffect } from 'react';
// import HomePage from './features/homepage';
import './App.css';
import Select from './select';

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
        setValues={setValues}
        label="React Multiple Select"
        placeholder="Pick some"
        options={[
          { value: 'Rock' },
          { value: 'Paper' },
          { value: 'Scissors' }
        ]}
        multiple
      />
    </div>
      </header>
    </div>
  );
}

export default App;
