import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import ItemBox from './components/ItemBox';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    // === FETCHES RESULTS FROM AIRTABLE ===
    // Create the request URL to pull data from the Airtable
    const url = `TODO`;

    // Create the config for the request (headers, parameters, etc.)
    // (Differs based on each API so read the documentation!)
    const config = {
      headers : {
        
      }
    };

    // Code to actually pull and then use the data
    axios.get(url, config)
    .then(res => {
      console.log(res);
    })
    .catch(err=> console.log(err))

    // === TELL THE USER THE FETCH IS DONE ===
    console.log("Finished fetching table from Airtable...");
  }, []);

  return (
  <div className="App">
    <NavBar/>
    <div className='items'>
      No items present
    </div>
  </div>    
  );
}

export default App;
