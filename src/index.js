import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import BTC, { About, Login, Sign } from './BTC/btc'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";



export default class Index extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact >
            <BTC />
          </Route>
          <Route path='/About' exact >
            <About />
          </Route>
          <Route path='/Login' exact >
            <Login />
          </Route>
          <Route path='/Register' exact >
            <Sign />
          </Route>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
