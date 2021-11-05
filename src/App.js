import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'; //commented out until we actually build the component
import Characters from './components/Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. - currently none, but if we want to add clicky functionality this will change

  const [characters,setCharacters] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
    .then(res=>{
    //  console.log(res); //our chars are in res.data
    setCharacters(res.data);
    }).catch(err=>{
      console.error(err);
    })
  },[]) //this will mount on load of page!

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
