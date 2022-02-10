import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  
  Route,

} from "react-router-dom";
import ReadOnlyRow from './ReadOnlyRow';
const Navbar = () => {
  return (
    
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid1">
    <a className="nav-item nav-link px-3" href="/tableedit/src/App.js ">Home</a>
    <a className="nav-item nav-link px-3" href="/tableedit/src/components/ReadOnlyRow.js">Table</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      
    </div>
  </div>
</nav>
{/* <Navbar/> */}
    <Switch>
      <Route exact path="/App" element={<ReadOnlyRow />}>
         <ReadOnlyRow /> 
      </Route>
      <Route exact path="/App" element={<ReadOnlyRow />}>
      <ReadOnlyRow />
      </Route>    
      
    </Switch>
  </Router>   </div>
  )
}

export default Navbar
