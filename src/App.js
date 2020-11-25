import React from 'react';
import { NavigationBar } from './NavigationBar';
import './App.css';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Formulario } from './Formulario';
import Validador from './validate';

function App() {
  return (
    <div> 
      <header>
          <div className="App">
            <NavigationBar />
            <div className="container">        
              <React.Fragment>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/validador" component={Validador} />
                    <Route path="/formulario" component={Formulario} />
                    <Route component={NoMatch} />
                  </Switch>
                </Router>
              </React.Fragment>
              </div> 
              <Footer/>
          </div>
      </header>
    </div>
  );
}

export default App;
