import { useState } from 'react';
import './App.css';

import { MyChild } from './components/MyChild';
import { MyFourthComponent } from './components/MyFourthComponent';
import { MyFirstComponent } from './components/MyFirstComponent';
import { MySecondComponent } from './components/MySecondComponent';
import { MyThirdComponent } from './components/MyThirdComponent';

function App() {
  const [name, setName] = useState('Ana María Guzmán Hoyos');

  return (
    <div className="App">
      <header className="App-header">
        <hr className="white-hr" />
        <MyFirstComponent />
        <hr className="white-hr" />
        <MySecondComponent />
        <hr className="white-hr" />
        <MyThirdComponent />
        <hr className="white-hr" />
        <MyFourthComponent />
        <hr className="white-hr" />
        <MyChild name={name} setName={setName} />
        <hr className="white-hr" />
      </header>
    </div>
  );
}
export default App;
