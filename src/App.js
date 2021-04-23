import React, {Component} from 'react';
import Productos from './components/Productos';
import { Switch, Route } from 'react-router-dom';
import DondeEstamos from './components/DondeEstamos';
import DetallePlato from './components/DetallePlato';
import Home from './components/Home';

class App extends Component{
    
  
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route path="/dondeEstamos" component={DondeEstamos} ></Route>
        <Route path="/productos" component={Productos} ></Route>
        <Route path="/detallePlato/:id" component={DetallePlato} ></Route>
      </Switch>
    ) 
  }
}

export default App;