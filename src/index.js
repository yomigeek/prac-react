import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/Pages/About';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
  <GlobalProvider>
    <Router >
      <Route exact path="/" component={Main} />
      <Route exact path="/todo" component={App} />
      <Route exact path="/about" component={About} />
    </Router>
  </GlobalProvider>
, 
document.getElementById('root'));
