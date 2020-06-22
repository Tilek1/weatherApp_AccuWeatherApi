import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import ContextProvider from './Context';

class App extends React.Component {

  render() {
    return (
      <ContextProvider>
      <Router>
        <React.Fragment>
           <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
      </ContextProvider>
    )
  }
}


export default App;
