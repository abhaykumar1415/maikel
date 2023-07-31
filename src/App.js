import logo from './logo.svg';
import './App.css';
import Connector from './Components/connector';
import Data from './services/data';
import { useEffect, useState } from 'react';

function App() {
  const [data , setData] = useState([])
  useEffect( ()=> {
    setData(Data.getConnectorMetaData);
    console.log("called on mount")
  }, []);
  return (
    <div className="App">
      <div className='connectorWrapper'>
        {
          data.map( (current, index ) => {
            return (
              <h1>
                <Connector name={current.name} flag={current.flag} index={index} />
              </h1>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;



// State of connectors : Disabled | Inactive | Active