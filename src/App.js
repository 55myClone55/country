import React,{useState} from 'react';
import "./App.css"
import Data from './data/new.json'
import DataCompon from './DataCompon';
import PostData from './PostData';

//let dataBase = Data.data;
function App() {
  const [toggle, setToggle] = useState("Africa")

  
  
  return (
    <div className='App-data'>
   <div>
   <PostData/> 
    </div>
    </div>
  );
}

export default App;
