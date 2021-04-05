import React, {useState} from 'react';
import Nav from './components/navbar';
import Speaker from './components/speakers';
import Chemathon from './components/ct';
import './App.css';

function App() {
  /*function inc1Fun(){
     setCounter(counter+1);
  }
  function inc2Fun(){
    setCounter(counter+2);
 }
 function inc3Fun(){
  setCounter(counter+3);
}*/
  //var [counter, setCounter] = useState(0);
  return (
    <div>
       <Speaker/>
       <Chemathon/>
    </div>
  );
}

export default App;
