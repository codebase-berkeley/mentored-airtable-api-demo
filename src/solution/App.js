import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import ItemBox from './components/ItemBox';
import { useEffect, useState } from 'react';

const tableMap = {
  0: process.env.REACT_APP_DEV_TABLE_ID,
  1: process.env.REACT_APP_ITEM_TABLE_ID,
}

function App() {
  let [tableID, setTableID] = useState(1);
  let [itemBoxes, setItemBoxes] = useState([]);

  useEffect(() => {
    // === FETCHES RESULTS FROM AIRTABLE ===
    // Create the request URL to pull data from the Airtable
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${tableMap[tableID]}`;

    // Create the config for the request (headers, parameters, etc.)
    // (Differs based on each API so read the documentation!)
    const config = {
      headers : {
        "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      }
    };

    // Code to actually pull and then use the data
    axios.get(url, config)
    .then(res => {
      let tableEntries = res.data.records;

      // For each record in the table, parse the data and set state to new list
      // (NOTE: Please create a new copy of the list, we prefer to not modify the current list)
      let items = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["Name"],
          img: entry["IMG"][0]["url"],
          description: entry["Description"],
        }
        items.push(item);
      });
      setItemBoxes(items);
    })
    .catch(err=> console.log(err))

    // === TELL THE USER THE FETCH IS DONE ===
    console.log("Finished fetching table from Airtable...");
  }, [tableID]);

  function switchTable() {
    setTableID((tableID + 1) % 2);
  }

  return (
  <div className="App">
    <NavBar func={switchTable}/>
    <div className='items'>
      {/* Loop through item boxes and create */}
      {itemBoxes.map(item => (
        <ItemBox name={item["name"]} img={item["img"]} description={item["description"]}/>
      ))}
    </div>
  </div>    
  );
}

export default App;
