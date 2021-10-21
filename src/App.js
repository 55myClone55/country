import React,{useState} from 'react';
import "./App.css"
import Data from './data/new.json'
import DataCompon from './DataCompon';
import PostData from './PostData';
import{BrowserRouter as Router, NavLink,Route,Switch,Link} from 'react-router-dom'

//let dataBase = Data.data;
function App() {
  const [toggle, setToggle] = useState("Africa")

  const Routes = ()=> (
   
      <header>
        
      </header>
   
  )
  
  return (
    <Router>
    <div className='App-data'>
    <NavLink to='/' activeClassName='active'>Change Country</NavLink>
        <NavLink to='/post' activeClassName='active'>Country</NavLink>
      
      <Switch>
        <Route path='/post' component={PostData} />
        <Route path='/' component={DataCompon} />
        </Switch>
      
   
   {/* <div>
   
   <PostData/> 
    </div> */}
    </div>
    </Router>
  );
}

export default App;
