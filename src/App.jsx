import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Menu from './components/Menu'
import Inicio from './components/Inicio'
import Login from './components/Login'
import Admin from './components/Admin'


function App() {
  return (
    <div className="container" >

      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>

        </Switch>
      </Router>
      
      
     
    </div>
  );
}

export default App;
