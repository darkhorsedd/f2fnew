import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route,Switch, } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './pages/Home';
import Culture from './pages/Culture';
import Client from './pages/Client';
import Portfolio from './pages/portfolio';
import Contact from './pages/Contact';
import Work from './pages/Work';
import About from './pages/About';
import $ from 'jquery';
import "../node_modules/video-react/dist/video-react.css";
class App extends Component {

  componentDidMount()
  {
    
  }

  render() {
    const baseUrl =window.location.href;
    return (
      <Router  >
     <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Culture" component={Culture} />
          <Route exact path="/Clients" component={Client} />
          <Route path="/Portfolio/:id" component={Portfolio}/>
          <Route path="/Contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Route path="/Work" component={Work}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
