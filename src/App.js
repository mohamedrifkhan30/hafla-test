import React, { useState } from 'react';
import './App.css';
import Cal from './components/UI/Cal';
import Display from './components/UI/Display';

const numberVal =[0,1,2,3,4,5,6,7,8,9];
function App() {
  const [numpads, setNumpads] = useState(numberVal);
  return (
    <div>
    <Display/>
        <Cal numpads={numpads}/>
        </div>
  );
}

export default App;